"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "../config";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  // Form states to sync custom template mapping parameters
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatusMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      setIsSuccess(true);
      setStatusMessage("Message sent successfully.");
      
      // Reset form states
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSuccess(false);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-charcoal-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
        {/* Left Column: Contact details */}
        <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[220px]">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-4">
              05 / Contact
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
              Have a project in mind, want to discuss AI evaluation, or just want to say hello? Drop a message, and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-8 space-y-4 font-mono text-xs">
            <div>
              <span className="text-zinc-500">EMAIL //</span> <a href={`mailto:${siteConfig.email}`} className="text-zinc-400 hover:text-cyan-400 transition-colors">{siteConfig.email}</a>
            </div>
            <div>
              <span className="text-zinc-500">LOCATION //</span> <span className="text-zinc-400 font-sans">India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form fields */}
        <div className="md:col-span-8">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            {/* Hidden helper inputs to match any potential template mapping in EmailJS */}
            <input type="hidden" name="name" value={name} />
            <input type="hidden" name="from_name" value={name} />
            <input type="hidden" name="from_email" value={email} />
            <input type="hidden" name="reply_to" value={email} />
            <input type="hidden" name="email" value={email} />

            <div>
              <label htmlFor="user_name" className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 block">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-black border border-zinc-800 text-white px-4 py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors duration-300 ease-out font-light"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-black border border-zinc-800 text-white px-4 py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors duration-300 ease-out font-light"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-black border border-zinc-800 text-white px-4 py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors duration-300 ease-out font-light resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning={true}
                className="w-full sm:w-auto flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase bg-white text-black border border-white hover:bg-black hover:text-white hover:border-charcoal-border-light transition-all duration-300 ease-out disabled:bg-zinc-800 disabled:text-zinc-600 disabled:border-zinc-800 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm mt-4 font-light ${
                    isSuccess ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
