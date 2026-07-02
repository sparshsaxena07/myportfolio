import React from "react";
import ContactSection from "./components/ContactSection";
import { siteConfig } from "./config";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-black text-white py-8 sm:py-12 md:py-16 selection:bg-white selection:text-black antialiased font-sans flex flex-col justify-between">

      {/* Main Page Container */}
      <div className="flex-1 w-full">
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] py-16 sm:py-24 relative flex items-center overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -z-10 bg-gradient-to-tr from-cyan-900/30 to-emerald-900/20 blur-[150px] w-[600px] h-[600px] rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Text and links */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              {/* Name and Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-white leading-tight">
                Sparsh Saxena
                <span className="block text-zinc-500 text-xl sm:text-2xl md:text-3xl mt-2 font-light">
                  Software Engineer &amp; Full Stack Developer
                </span>
              </h1>

              {/* Subheadline control: narrow width and smaller size */}
              <p className="mt-6 max-w-lg text-sm sm:text-base text-zinc-400 font-light leading-relaxed tracking-wide">
                Bridging the gap between scalable web architectures and AI model evaluation.
              </p>

              {/* Call to Actions - Generous whitespace above (mt-12) */}
              <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase border border-charcoal-border-light bg-transparent text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 ease-out"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase bg-white text-black border border-white hover:bg-black hover:text-white hover:border-charcoal-border-light transition-all duration-300 ease-out"
                >
                  Contact Me
                </a>
              </div>

              {/* Icon links - simple white inline SVGs */}
              <div className="mt-12 pt-8 border-t border-charcoal-border flex items-start gap-6 w-full">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LeetCode</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces"
                  className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Codeforces</title>
                    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h-3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                  </svg>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Premium Glowing SVG blueprint */}
            <div className="md:col-span-5 hidden md:block">
              <svg viewBox="0 0 400 400" className="w-full h-auto text-zinc-700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="cyanEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                
                <circle cx="200" cy="200" r="180" fill="url(#glow)" />
                <circle cx="200" cy="200" r="150" stroke="#18181b" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="100" stroke="#27272a" strokeWidth="1" />
                <circle cx="200" cy="200" r="50" stroke="#3f3f46" strokeWidth="1" strokeDasharray="2 2" />

                <line x1="200" y1="20" x2="200" y2="380" stroke="#18181b" strokeWidth="1" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="#18181b" strokeWidth="1" />

                <line x1="72" y1="72" x2="328" y2="328" stroke="#111113" strokeWidth="1" strokeDasharray="6 6" />
                <line x1="72" y1="328" x2="328" y2="72" stroke="#111113" strokeWidth="1" strokeDasharray="6 6" />

                <circle cx="200" cy="200" r="12" fill="#000000" stroke="url(#cyanEmerald)" strokeWidth="2" />
                <circle cx="200" cy="200" r="4" fill="#34d399" />

                <g className="animate-pulse" style={{ animationDuration: "4s" }}>
                  <line x1="200" y1="200" x2="110" y2="110" stroke="#3f3f46" strokeWidth="1.5" />
                  <circle cx="110" cy="110" r="8" fill="#000" stroke="#22d3ee" strokeWidth="1.5" />
                  <circle cx="110" cy="110" r="2" fill="#22d3ee" />
                  <text x="75" y="95" fill="#a1a1aa" className="font-mono text-[9px]" letterSpacing="1">WEB_ARCH</text>
                </g>

                <g className="animate-pulse" style={{ animationDuration: "5s" }}>
                  <line x1="200" y1="200" x2="290" y2="110" stroke="#3f3f46" strokeWidth="1.5" />
                  <circle cx="290" cy="110" r="8" fill="#000" stroke="#34d399" strokeWidth="1.5" />
                  <circle cx="290" cy="110" r="2" fill="#34d399" />
                  <text x="270" y="95" fill="#a1a1aa" className="font-mono text-[9px]" letterSpacing="1">AI_EVAL</text>
                </g>

                <g className="animate-pulse" style={{ animationDuration: "6s" }}>
                  <line x1="200" y1="200" x2="290" y2="290" stroke="#3f3f46" strokeWidth="1.5" />
                  <circle cx="290" cy="290" r="8" fill="#000" stroke="#22d3ee" strokeWidth="1.5" />
                  <circle cx="290" cy="290" r="2" fill="#22d3ee" />
                  <text x="270" y="315" fill="#a1a1aa" className="font-mono text-[9px]" letterSpacing="1">LLM_ALIGN</text>
                </g>

                <g className="animate-pulse" style={{ animationDuration: "7s" }}>
                  <line x1="200" y1="200" x2="110" y2="290" stroke="#3f3f46" strokeWidth="1.5" />
                  <circle cx="110" cy="290" r="8" fill="#000" stroke="#34d399" strokeWidth="1.5" />
                  <circle cx="110" cy="290" r="2" fill="#34d399" />
                  <text x="75" y="315" fill="#a1a1aa" className="font-mono text-[9px]" letterSpacing="1">DATA_PIPE</text>
                </g>

                <circle cx="200" cy="50" r="3" fill="#22d3ee" className="animate-bounce" style={{ animationDuration: "3s" }} />
                <circle cx="350" cy="200" r="3" fill="#34d399" className="animate-bounce" style={{ animationDuration: "4s" }} />
                <circle cx="200" cy="350" r="3" fill="#22d3ee" className="animate-bounce" style={{ animationDuration: "5s" }} />
                <circle cx="50" cy="200" r="3" fill="#34d399" className="animate-bounce" style={{ animationDuration: "6s" }} />

                <path d="M 20 20 L 40 20 L 40 40" stroke="#27272a" strokeWidth="1" />
                <path d="M 380 20 L 360 20 L 360 40" stroke="#27272a" strokeWidth="1" />
                <path d="M 20 380 L 40 380 L 40 360" stroke="#27272a" strokeWidth="1" />
                <path d="M 380 380 L 360 380 L 360 360" stroke="#27272a" strokeWidth="1" />
                
                <text x="50" y="40" fill="#3f3f46" className="font-mono text-[8px]" letterSpacing="1">SYS.STATUS: ACTIVE</text>
                <text x="280" y="365" fill="#3f3f46" className="font-mono text-[8px]" letterSpacing="1">DEV.COORD: 2026</text>
              </svg>
            </div>
          </div>
        </section>

        {/* About Section featuring Experience Timeline */}
        <section id="about" className="py-24 border-t border-charcoal-border">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* Header and description on top */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono">
                01 / Experience
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
                My professional journey in software engineering, full stack development, and AI model evaluation.
              </p>
            </div>

            {/* Timeline track centered below */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-zinc-800" />

              <div className="space-y-12">
                {/* Timeline Node 1: Full Stack Developer Intern | TrippinPal Travels */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-zinc-800 bg-black" />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-medium text-lg sm:text-xl leading-tight">
                      Full Stack Developer Intern
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-400 font-normal">
                      TrippinPal Travels <span className="text-zinc-600 px-1 font-mono">//</span> 2025
                    </div>
                    <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                      Modernized the frontend UI using Figma-based designs and refactored legacy components to enhance platform responsiveness, with hands-on exposure to cloud deployment workflows on AWS EC2 and RDS.
                    </p>
                  </div>
                </div>

                {/* Timeline Node 2: AI Training and Evaluation Engineer | Xelron AI */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-zinc-800 bg-black" />
                  
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-medium text-lg sm:text-xl leading-tight">
                      AI Training and Evaluation Engineer
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-400 font-normal">
                      Xelron AI <span className="text-zinc-600 px-1 font-mono">//</span> 2025
                    </div>
                    <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                      Focusing on LLM alignment, evaluating complex reasoning, and working with preference-ranked data to train and fine-tune next-generation intelligence models.
                    </p>
                  </div>
                </div>

                {/* Timeline Node 3: Full Stack Developer Intern | 21CC Education */}
                <div className="relative pl-8 sm:pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-zinc-800 bg-black" />

                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-medium text-lg sm:text-xl leading-tight">
                      Full Stack Developer Intern
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-400 font-normal">
                      21CC Education <span className="text-zinc-600 px-1 font-mono">//</span> 2024
                    </div>
                    <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                      Built a Groovy/Grails JobSkill Extraction Service that reduced manual content tagging by 30%, and optimized PostgreSQL query indexing and REST API performance for a highly responsive candidate matching engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works / Projects Section */}
        <section id="projects" className="py-24 border-t border-charcoal-border relative overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -z-10 bg-gradient-to-tr from-cyan-900/30 to-emerald-900/20 blur-[150px] w-[600px] h-[600px] rounded-full" />

          <h2 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-16 flex items-start gap-4">
            <span>02 / Selected Works</span>
            <span className="h-[1px] flex-1 bg-charcoal-border" />
          </h2>

          <div className="space-y-24">
            {/* Block 1: Zigzag Layout (Text left, Image right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Text side */}
              <div className="order-1 md:col-span-5 flex flex-col gap-4">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  [ Project 01 ]
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-medium text-xl sm:text-2xl tracking-wide">
                    Research Paper Analysis Platform
                  </h3>
                  <a
                    href={siteConfig.projects.researchAssistant}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  An advanced AI-powered platform optimized for processing research literature. Integrated Next.js and FastAPI to build a high-performance stack, using pgvector for semantic search vector space embedding indexing. Successfully achieved a 60% reduction in document processing latency through a robust asynchronous task execution pipeline driven by Celery and Redis.
                </p>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "FastAPI", "pgvector", "Celery", "Redis", "PostgreSQL", "Asynchronous Pipelines"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-zinc-800 bg-transparent text-zinc-400 text-xs font-mono tracking-wider transition-colors duration-300 ease-out hover:border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="order-2 md:col-span-7 w-full aspect-[1024/490] bg-zinc-950 border border-zinc-900 relative overflow-hidden group">
                <img
                  src="/research_assistant.png"
                  alt="Research Paper Analysis Platform"
                  className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                
                <span className="absolute top-2 left-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                
                <div className="absolute top-2 left-8 z-10">
                  <div className="text-[9px] font-mono text-zinc-300 bg-black/70 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Fig.01 // Research Assistant
                  </div>
                </div>
                <div className="absolute top-2 right-8 z-10">
                  <div className="text-[9px] font-mono text-cyan-400 bg-black/70 border border-cyan-900/50 px-1.5 py-0.5 rounded">
                    LATENCY: -60%
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Zigzag Layout (Image left, Text right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Image side */}
              <div className="order-2 md:order-1 md:col-span-7 w-full aspect-[1024/467] bg-zinc-950 border border-zinc-900 relative overflow-hidden group">
                <img
                  src="/campusflow.png"
                  alt="CampusFlow - AI-Powered Academic Suite"
                  className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                
                <span className="absolute top-2 left-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>

                <div className="absolute top-2 left-8 z-10">
                  <div className="text-[9px] font-mono text-zinc-300 bg-black/70 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Fig.02 // CampusFlow
                  </div>
                </div>
                <div className="absolute top-2 right-8 z-10">
                  <div className="text-[9px] font-mono text-emerald-400 bg-black/70 border border-emerald-900/50 px-1.5 py-0.5 rounded">
                    USERS: 100+
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="order-1 md:order-2 md:col-span-5 flex flex-col gap-4">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  [ Project 02 ]
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-medium text-xl sm:text-2xl tracking-wide">
                    CampusFlow - AI-Powered Academic Suite
                  </h3>
                  <a
                    href={siteConfig.projects.campusFlow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  A comprehensive, scalable platform built on a MongoDB and React stack to automate university academic operations. Features a constraint satisfaction-based scheduling engine for course timetable generation. Integrates face-api.js to drive high-performance, real-time computer vision attendance capturing for 100+ active concurrent users.
                </p>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "MongoDB", "Node.js", "face-api.js", "Constraint Solving", "REST APIs", "Express"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-zinc-800 bg-transparent text-zinc-400 text-xs font-mono tracking-wider transition-colors duration-300 ease-out hover:border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 3: Zigzag Layout (Text left, Image right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Text side */}
              <div className="order-1 md:col-span-5 flex flex-col gap-4">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  [ Project 03 ]
                </div>
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-medium text-xl sm:text-2xl tracking-wide">
                    VoCrypt
                  </h3>
                  <a
                    href={siteConfig.projects.voCrypt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors duration-300 ease-out flex items-center justify-center"
                    aria-label="GitHub Repository"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  Engineered during an intense 36-hour hackathon, VoCrypt is a secure, audio-based encrypted communication system. Bypassing traditional heavy high-level setups, the core cryptographic engine is implemented using low-level, high-efficiency C++ libraries for high performance and low-overhead secure digital audio processing.
                </p>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["C++", "Audio DSP", "Cryptography", "Low-Level APIs", "Hackathon Project"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-zinc-800 bg-transparent text-zinc-400 text-xs font-mono tracking-wider transition-colors duration-300 ease-out hover:border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div className="order-2 md:col-span-7 w-full aspect-[1024/486] bg-zinc-950 border border-zinc-900 relative overflow-hidden group">
                <img
                  src="/vocrypt.png"
                  alt="VoCrypt"
                  className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                
                <span className="absolute top-2 left-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-400 bg-black/60 px-1 py-0.5 rounded font-light z-10">+</span>

                <div className="absolute top-2 left-8 z-10">
                  <div className="text-[9px] font-mono text-zinc-300 bg-black/70 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Fig.03 // VoCrypt
                  </div>
                </div>
                <div className="absolute top-2 right-8 z-10">
                  <div className="text-[9px] font-mono text-cyan-400 bg-black/70 border border-cyan-900/50 px-1.5 py-0.5 rounded">
                    36HR HACK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section (Technical Arsenal) */}
        <section id="skills" className="py-24 border-t border-charcoal-border">
          <h2 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-16 flex items-start gap-4">
            <span>03 / Technical Arsenal</span>
            <span className="h-[1px] flex-1 bg-charcoal-border" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="border border-zinc-800 bg-black p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col">
              <div className="text-[10px] font-mono text-zinc-600 mb-3 tracking-widest">
                [ SEC.01 ]
              </div>
              <h3 className="text-white font-medium text-lg mb-4">Languages</h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light leading-relaxed">
                <li>C</li>
                <li>C++</li>
                <li>JavaScript (ES6+)</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div className="border border-zinc-800 bg-black p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col">
              <div className="text-[10px] font-mono text-zinc-600 mb-3 tracking-widest">
                [ SEC.02 ]
              </div>
              <h3 className="text-white font-medium text-lg mb-4">Frameworks</h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light leading-relaxed">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>FastAPI</li>
                <li>RAG</li>
                <li>NumPy / Pandas</li>
                <li>face-api.js</li>
              </ul>
            </div>

            {/* Databases & Web */}
            <div className="border border-zinc-800 bg-black p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col">
              <div className="text-[10px] font-mono text-zinc-600 mb-3 tracking-widest">
                [ SEC.03 ]
              </div>
              <h3 className="text-white font-medium text-lg mb-4">Database &amp; Web</h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light leading-relaxed">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
                <li>WebSockets</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Tools & Infrastructure */}
            <div className="border border-zinc-800 bg-black p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col">
              <div className="text-[10px] font-mono text-zinc-600 mb-3 tracking-widest">
                [ SEC.04 ]
              </div>
              <h3 className="text-white font-medium text-lg mb-4">Infra &amp; Tools</h3>
              <ul className="space-y-2 text-zinc-400 text-sm font-light leading-relaxed">
                <li>Docker</li>
                <li>Git</li>
                <li>GitHub Actions</li>
                <li>CI/CD Pipelines</li>
                <li>Vercel</li>
                <li>Render</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section (Milestones & Metrics) */}
        <section id="achievements" className="py-24 border-t border-charcoal-border">
          <h2 className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-mono mb-16 flex items-start gap-4">
            <span>04 / Milestones &amp; Metrics</span>
            <span className="h-[1px] flex-1 bg-charcoal-border" />
          </h2>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="border-l border-zinc-800 pl-6 flex flex-col gap-2">
              <span className="text-4xl lg:text-5xl font-bold text-emerald-400 font-mono tracking-tight">700+</span>
              <span className="text-zinc-400 text-sm font-light">DSA Problems Solved</span>
            </div>
            <div className="border-l border-zinc-800 pl-6 flex flex-col gap-2">
              <span className="text-4xl lg:text-5xl font-bold text-emerald-400 font-mono tracking-tight">1704</span>
              <span className="text-zinc-400 text-sm font-light">Peak LeetCode Rating</span>
            </div>
            <div className="border-l border-zinc-800 pl-6 flex flex-col gap-2">
              <span className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-tight">1431</span>
              <span className="text-zinc-400 text-sm font-light">Peak Codeforces Rating</span>
            </div>
            <div className="border-l border-zinc-800 pl-6 flex flex-col gap-2">
              <span className="text-4xl lg:text-5xl font-bold text-white font-mono tracking-tight">3-Star</span>
              <span className="text-zinc-400 text-sm font-light">CodeChef</span>
            </div>
          </div>

          {/* Timeless Achievements List */}
          <div className="border-t border-zinc-900 pt-12">
            <ul className="space-y-4">
              {[
                "Selected for Amazon ML Summer School 2025 (3,000+ enrollment across India).",
                "Qualified for Specialist Programmer (L2) interview with Infosys.",
                "Secured 7th position at Coderush (IIITM Gwalior) and Top 4 in Code Debugging.",
                "Finished Top 20 in Hackatron and qualified for Round 1 of the Sheriyan Frontend Hackathon.",
              ].map((milestone, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base font-light leading-relaxed"
                >
                  <span className="text-zinc-600 select-none mt-1.5 font-mono text-xs">→</span>
                  <span>{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Coding Profiles Section */}
        <section id="profiles" className="py-24 border-t border-charcoal-border">
          <h2 className="text-3xl font-medium tracking-tight text-cyan-400 mb-16">
            Coding Profiles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* GitHub Card */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-800 bg-black p-6 rounded-lg flex flex-col justify-between h-40 hover:-translate-y-1 hover:border-white transition-all duration-300 ease-out group"
            >
              <div className="flex justify-between items-start">
                <svg
                  className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors duration-300 ease-out"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 ease-out">
                  LINK ↗
                </span>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg leading-snug">GitHub</h3>
                <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                  View repositories &amp; contributions
                </p>
              </div>
            </a>

            {/* LeetCode Card */}
            <a
              href={siteConfig.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-800 bg-black p-6 rounded-lg flex flex-col justify-between h-40 hover:-translate-y-1 hover:border-white transition-all duration-300 ease-out group"
            >
              <div className="flex justify-between items-start">
                <svg
                  className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors duration-300 ease-out"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LeetCode</title>
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
                <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 ease-out">
                  LINK ↗
                </span>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg leading-snug">LeetCode</h3>
                <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                  View algorithmic problem-solving
                </p>
              </div>
            </a>

            {/* Codeforces Card */}
            <a
              href={siteConfig.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-800 bg-black p-6 rounded-lg flex flex-col justify-between h-40 hover:-translate-y-1 hover:border-white transition-all duration-300 ease-out group"
            >
              <div className="flex justify-between items-start">
                <svg
                  className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors duration-300 ease-out"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Codeforces</title>
                  <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h-3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                </svg>
                <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 ease-out">
                  LINK ↗
                </span>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg leading-snug">Codeforces</h3>
                <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                  View competitive programming rank
                </p>
              </div>
            </a>

            {/* CodeChef Card */}
            <a
              href={siteConfig.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-800 bg-black p-6 rounded-lg flex flex-col justify-between h-40 hover:-translate-y-1 hover:border-white transition-all duration-300 ease-out group"
            >
              <div className="flex justify-between items-start">
                <svg
                  className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors duration-300 ease-out"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>CodeChef</title>
                  <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 10.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.1622 0 .3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.174 1.174 0 0 1 .3166.0681c.5796 1.0012-.4264 5.2791-.6786 8.1492.1559 1.0276.3138 1.9963.4628 2.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.8557 9.7244.4228 10.2111.3687zm3.1361.271c-.811 2.1088-.9184 6.1092-.9725 7.3528-.054.5407-.0001 1.73.054 2.5952 0 .2163.054.4325.054.6488 0-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.2704 2.1628-1.4047 3.191-1.7832 5.2998-.1081 1.6762-.325 3.6222-.379 5.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.6776 1.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.2553 3.0317.0398 4.6694.0763 1.5485.0717 3.1804.849 4.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.3777 0-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.013 1.013 0 0 1 .2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.034.3617.0339.5196.318-.1877.8916.4364 3.3685.4288 5.104.3124 1.8478.5496 3.8498 1.5716 5.1152C6.3723 11.5076 5.886 9.1286 5.5076 7.128 5.183 5.56 4.9125 4.2086 4.3718 3.776c-.054-.1081-.1079-.163-.1079-.2711 0-.1622-.0002-.3786.1079-.5949-.2772.6337-.4047 1.2673-.3706 1.901-.0445-.6487.0857-1.2905.3706-1.901 0-.054.054-.0538.054-.1079.012-.016.0314-.0349.044-.0511.0618-.0983.1308-.189.2257-.257.0557-.0615.0965-.1191.159-.1817-.0526.0555-.0872.1092-.1335.1647.0273-.018.0523-.0368.0838-.0525.1081-.1082.2154-.1633.3776-.1633zm-.3776.1633c-.0038.0075-.0076.0111-.0114.0184.0125-.0099.0242-.0208.037-.0298-.0074.0037-.0182.0077-.0256.0114zm14.7608 1.1343c-.0017.0052-.004.0104-.0057.0156.0378-.005.0751-.0173.1135-.0156-.0378-.0022-.0763.0103-.115.0199-.8634 2.6418-1.8874 5.2844-2.9118 7.9262a.0184.0184 0 0 1-.0015.0028c-.0874.4652-.234.8842-.5395 1.1898.4326-.4867.4854-1.1907.5395-2.0558.054-.811.0544-1.6761.487-2.5413 0-.0531.0012-.1058.0525-.159.0003-.0009.0012-.0019.0015-.0028.0973-.3524.202-.6885.3166-1.018.4183-1.2896 1.1396-3.1653 2.0131-3.3405.0163-.0052.034-.018.0497-.0213zM8.3726 16.2113l-.3238.1079c.1623.2163.2696.379.3777.433.1081.054.2168.108.379.108.0541 0 .1618 0 .2159-.054l.812-.2698c.0541 0 .1078-.054.1619-.054.1081 0 .1616 0 .2697.054l.2712.2698.2697-.054c-.1081-.1622-.2695-.3236-.3776-.3776-.1082-.0541-.2169-.1094-.379-.1094h-.108l-.866.3252h-.1618c-.1082 0-.2157 0-.2698-.054-.054-.054-.163-.1629-.2712-.3251zm-2.5953.541c-.2703.1621-.649.4324-1.1897.6487-.5407.2163-.9734.4325-1.1897.6488-.2163.2163-.3237.4326-.3237.6488 0 .1082.0537.1632.1618.2172.054.0541.1632.0539.2172.108.757.3244 1.5133.7019 2.2162 1.0803.1082.0541.2171.1632.2712.2173.054.054.1078.054.1618.054.1082 0 .2695-.0538.3777-.162.1081-.108.1632-.217.1632-.325 0-.1082-.055-.1618-.1632-.2158 0 0-.4328-.2165-1.1898-.541-.4866-.2162-.9179-.4326-1.1883-.5948.1623-.2704.486-.4865.9726-.7028.5407-.2163.9196-.4326 1.0818-.5948.054-.0541.054-.1078.054-.1619 0-.054-.0539-.1631-.108-.2172-.054-.054-.163-.1079-.2711-.1079zm11.247 0c-.054 0-.1618.0537-.2158.1078-.0541.1081-.1093.1632-.1093.2172v.054c.1622.1622.3797.2695.7041.3776.2704.054.5403.1632.8107.2172.3244.1082.5407.2693.6488.4856v.0553c0 .0541-.1088.1616-.3251.2698-.1082.054-.3245.2167-.5949.433-.2703.1622-.4326.3236-.5948.3776-.2163.1082-.3776.217-.4316.3252-.0541.054-.054.1077-.054.1618 0 .1081.0539.1077.108.2158.054.1081.1616.1093.2157.1093.054 0 .1078-.0554.1619-.0554.2703-.1622.6492-.3782 1.0818-.7567.4866-.3784.8655-.6484 1.0818-.8106.2163-.1082.3237-.2169.3237-.379 0-.0541.0002-.1618-.1079-.2159-.3785-.4325-.9185-.7022-1.5674-.9185-.1081-.0541-.2704-.1092-.5948-.1633-.1622-.054-.3249-.1079-.433-.1079zm-2.9743.8106c-.2704 0-.4866.055-.6488.2172-.2163.1622-.2699.4323-.2158.7567 0 .2703.1075.4865.2697.7027.1622.2163.3786.3252.5949.3252.1622 0 .2708-.0553.433-.1094.2703-.1622.379-.4319.379-.9185 0-.3785-.109-.6485-.2711-.8107-.1622-.1081-.3246-.1632-.541-.1632zm-4.4877.054c-.2704 0-.4866.055-.6488.2171-.2163.1622-.27.4323-.2158.7567 0 .2704.1075.4865.2697.7028s.3786.3251.5949.3251c.1622 0 .2708-.0552.433-.1093.2703-.1622.3776-.432.3776-.9186 0-.4325-.1075-.7025-.2697-.8106-.1622-.1082-.3247-.1633-.541-.1633zm0 .6501c.1622 0 .2711.1076.2711.2698 0 .1622-.163.2697-.2711.2697-.1622 0-.2698-.1075-.2698-.2697s.1076-.2698.2698-.2698zm4.3798.054c.1622 0 .2711.1075.2711.2697 0 .1082-.109.2698-.2711.2698-.1622 0-.2698-.1076-.2698-.2698 0-.1622.1076-.2697.2698-.2697zm-2.7032 2.1083l.1619.3237c.054.1081.1076.163.2158.2711.054.054.163.1619.2712.1619h.1078c.1082 0 .1618 0 .2158-.054.0541-.054.1632-.0538.2173-.1079l.1618-.1618c.054-.054.108-.1092.108-.1633.054-.054.0537-.1078.1078-.1618 0-.0541.054-.108.054-.108-.0541.1082-.1618.2156-.2158.3238-.1082.054-.1616.1632-.2698.1632-.1081.0541-.217.054-.3251.054s-.2157.0001-.2697-.054c-.1082 0-.1632-.0538-.2173-.1079l-.1618-.1632c-.054-.0541-.1078-.1618-.1619-.2158zm-.866 1.0278c-1.1355 0-1.8377 1.5136-3.4598.1619-.4326 2.6494 2.7583 2.866 4.11 1.7306.9192-.811.6475-1.9465-.6502-1.8925zm2.8664 0c-1.2977-.054-1.568 1.0815-.6488 1.8925 1.3518 1.1355 4.5412.9188 4.1087-1.7306-1.6221 1.3517-2.2703-.1619-3.4599-.1619z" />
                </svg>
                <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 ease-out">
                  LINK ↗
                </span>
              </div>
              <div>
                <h3 className="text-white font-medium text-lg leading-snug">CodeChef</h3>
                <p className="text-zinc-500 text-xs mt-1 font-light leading-relaxed">
                  View contest history
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 mt-20 bg-black">
        {/* Main Footer Grid (Top Half) */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1 (Brand & Socials) */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                {/* Subtle dot to signify status/active */}
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
                  Sparsh Saxena
                </span>
              </div>
              <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-light">
                Bridging the gap between scalable web architectures and AI model evaluation.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-lg text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 bg-transparent"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-lg text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 bg-transparent"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-lg text-zinc-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 bg-transparent"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 (Quick Links) */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Achievements", href: "#achievements" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-zinc-400 text-sm hover:text-cyan-400 transition-colors duration-300 ease-out font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (Quick Stats) */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base uppercase tracking-wider">
              Quick Stats
            </h4>
            <div className="flex flex-col gap-3 font-light">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Problems Solved</span>
                <span className="text-emerald-400 font-medium font-mono">700+</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">LeetCode Rating</span>
                <span className="text-cyan-400 font-medium font-mono">1704</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Codeforces Rating</span>
                <span className="text-cyan-400 font-medium font-mono">1431</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">CodeChef</span>
                <span className="text-cyan-400 font-medium font-mono">3-Star</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & To-Top Bar (Middle) */}
        <div className="border-t border-zinc-800 py-6 flex justify-between items-center">
          <p className="text-zinc-500 text-sm font-light">
            &copy; 2026 Sparsh Saxena. Built with 🤍
          </p>
          <a
            href="#home"
            aria-label="Back to Top"
            className="w-8 h-8 flex items-center justify-center rounded bg-cyan-400 text-black hover:bg-cyan-500 hover:scale-105 transition-all duration-300"
          >
            <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
            </svg>
          </a>
        </div>

        {/* Terminal Outro (Very Bottom) */}
        <div className="text-center font-mono text-xs pb-4 pt-2">
          <span className="text-zinc-500">root@portfolio:~$ </span>
          <span className="text-emerald-400">echo &quot;Thanks for visiting!&quot;</span>
        </div>
      </footer>
    </div>
  );
}
