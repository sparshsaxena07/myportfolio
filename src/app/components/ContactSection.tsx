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
    <section id="contact" className="py-24 border-t border-border-subtle">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 w-full">

        {/* Left Column: Invitation + Links */}
        <div className="md:col-span-4 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent-primary font-mono">
              05 / Contact
            </h2>
            <p className="text-text-primary text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Open to the right opportunity.
            </p>
            <p className="text-text-secondary text-sm font-light leading-relaxed max-w-xs">
              I am actively seeking roles in Software Engineering, Full Stack Development, and AI Engineering. If you are building something meaningful and need someone who can execute at a high level — reach out.
            </p>
          </div>

          {/* Direct contact info */}
          <div className="flex flex-col gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-text-secondary tracking-widest uppercase text-[10px]">Email</span>
              <span className="h-px flex-1 bg-border-subtle" />
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-xs break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">
              Profiles
            </span>
            <div className="flex flex-col gap-2">
              {[
                {
                  label: "GitHub",
                  href: siteConfig.github,
                  note: "Projects & Code",
                },
                {
                  label: "LinkedIn",
                  href: siteConfig.linkedin,
                  note: "Professional Network",
                },
                {
                  label: "Resume",
                  href: siteConfig.resume,
                  note: "View / Download",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 border border-border-subtle bg-card-bg rounded hover:border-accent-primary/50 hover:bg-card-bg transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-text-primary font-medium text-xs font-mono">
                      {item.label}
                    </span>
                    <span className="text-text-secondary text-[10px] font-mono">
                      // {item.note}
                    </span>
                  </div>
                  <span className="text-text-secondary group-hover:text-accent-primary text-[10px] font-mono transition-colors duration-300">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-8">
          <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-6">
            {/* Hidden helper inputs to match any potential template mapping in EmailJS */}
            <input type="hidden" name="name" value={name} />
            <input type="hidden" name="from_name" value={name} />
            <input type="hidden" name="from_email" value={email} />
            <input type="hidden" name="reply_to" value={email} />
            <input type="hidden" name="email" value={email} />

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user_name"
                className="text-[10px] font-mono uppercase tracking-widest text-text-secondary"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-card-bg border border-border-subtle text-text-primary placeholder:text-text-secondary/40 px-4 py-3.5 text-sm focus:border-accent-primary focus:outline-none transition-colors duration-300 ease-out font-light"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user_email"
                className="text-[10px] font-mono uppercase tracking-widest text-text-secondary"
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-card-bg border border-border-subtle text-text-primary placeholder:text-text-secondary/40 px-4 py-3.5 text-sm focus:border-accent-primary focus:outline-none transition-colors duration-300 ease-out font-light"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-[10px] font-mono uppercase tracking-widest text-text-secondary"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                placeholder="Tell me about the role, project, or opportunity..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                suppressHydrationWarning={true}
                className="w-full bg-card-bg border border-border-subtle text-text-primary placeholder:text-text-secondary/40 px-4 py-3.5 text-sm focus:border-accent-primary focus:outline-none transition-colors duration-300 ease-out font-light resize-none"
              />
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                suppressHydrationWarning={true}
                className="w-full flex items-center justify-center h-12 px-8 text-sm font-medium tracking-widest uppercase bg-text-primary text-background border border-text-primary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-300 ease-out disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {statusMessage && (
                <p
                  className={`text-xs mt-4 font-light font-mono ${
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
