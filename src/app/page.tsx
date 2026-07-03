import React from "react";
import ContactSection from "./components/ContactSection";
import { siteConfig } from "./config";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-background text-text-primary pb-8 sm:pb-12 md:pb-16 selection:bg-text-primary selection:text-background antialiased font-sans flex flex-col justify-between">

      {/* Main Page Container */}
      <div className="flex-1 w-full">
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] pt-14 sm:pt-20 pb-16 sm:pb-24 relative flex items-center overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -z-10 bg-accent-primary/5 dark:bg-accent-primary/10 blur-[120px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Text and links */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              {/* SDE Role Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary text-xs font-mono mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                Available for Software Engineering Roles
              </div>

              {/* Name and Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-none">
                Sparsh Saxena
              </h1>
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-text-secondary leading-tight max-w-2xl">
                Building scalable software systems, high-performance backends, and AI-powered products.
              </p>

              {/* Supporting Description */}
              <p className="mt-6 max-w-lg text-sm sm:text-base text-text-secondary font-light leading-relaxed tracking-wide">
                I design robust full-stack architectures and scalable backend services, integrating advanced AI engineering workflows to build production-ready products that perform at scale.
              </p>

              {/* Credentials Highlight Strip */}
              <div className="flex flex-wrap gap-2.5 mt-8 w-full">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-card-bg text-text-secondary text-xs font-mono shadow-sm">
                  <span>🏫</span> IIIT Surat
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-card-bg text-text-secondary text-xs font-mono shadow-sm">
                  <span>💼</span> 3 Software Internships
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-card-bg text-text-secondary text-xs font-mono shadow-sm">
                  <span>🧠</span> 700+ DSA Problems
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-subtle bg-card-bg text-text-secondary text-xs font-mono shadow-sm">
                  <span>🚀</span> Amazon ML Summer School
                </div>
              </div>

              {/* Call to Actions */}
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                <a
                  href="#projects"
                  className="flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase bg-text-primary text-background border border-text-primary hover:bg-transparent hover:text-text-primary hover:border-border-subtle transition-all duration-300 ease-out"
                >
                  Explore Projects
                </a>
                <a
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase border border-border-subtle bg-transparent text-text-primary hover:bg-text-primary hover:text-background hover:border-text-primary transition-all duration-300 ease-out"
                >
                  Download Resume
                </a>
              </div>

              {/* Competitive Programming Credentials */}
              <div className="mt-6 flex items-center gap-1 text-[11px] font-mono text-text-secondary">
                <span className="uppercase tracking-widest text-[9px] text-text-secondary/60 mr-2">CP</span>
                <a
                  href={siteConfig.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode profile (opens in new tab)"
                  className="hover:text-accent-primary transition-colors duration-300"
                >
                  LeetCode ↗
                </a>
                <span className="mx-2 text-border-subtle select-none">·</span>
                <a
                  href={siteConfig.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Codeforces profile (opens in new tab)"
                  className="hover:text-accent-primary transition-colors duration-300"
                >
                  Codeforces ↗
                </a>
              </div>
            </div>

            {/* Right Column: Premium Engineering Snapshot Card */}
            <div className="md:col-span-5 hidden md:block">
              <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl flex flex-col gap-6 shadow-sm">
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-text-secondary">[ ENG.SNAPSHOT ]</span>
                  <span className="flex items-center gap-1.5 text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    ACTIVE_PROCESS
                  </span>
                </div>

                {/* Metric Blocks */}
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider">01 / CURRENT FOCUS</span>
                    <span className="text-sm font-medium text-text-primary">Building Scalable Full-Stack &amp; AI-Powered Applications</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider">02 / ARCHITECTURE STACK</span>
                    <span className="text-sm font-medium text-text-primary">React · Next.js · Node.js · FastAPI · PostgreSQL</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-mono text-text-secondary uppercase tracking-wider">03 / AI ENGINEERING</span>
                    <span className="text-sm font-medium text-text-primary">LLM Evaluation · RAG Systems · AI Agents · Model Alignment</span>
                  </div>
                </div>

                {/* Footer section inside the card */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-[9px] text-text-secondary">
                  <span>LOC: Surat, IN</span>
                  <span>PING: 12ms</span>
                  <span>SYS: stable</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section featuring Experience Timeline */}
        <section id="about" className="py-24 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            {/* Header and description on top */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent-primary font-mono">
                01 / Experience
              </h2>
              <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed">
                I collaborate with remote product teams and AI startups to build scalable web architectures and train reasoning-based intelligent models. By combining robust full-stack engineering with low-latency backend systems, I focus on shipping production-ready applications that deliver clean user experiences and high performance.
              </p>
            </div>

            {/* Timeline track centered below */}
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-border-subtle/50" />

              <div className="space-y-16">
                {/* Timeline Node 1: TrippinPal Travels */}
                <div className="relative pl-8 sm:pl-10">
                  {/* Timeline indicator node */}
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-border-subtle bg-background flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Header: Company Name & Type Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-text-primary font-bold text-lg sm:text-xl leading-none">
                        TrippinPal Travels
                      </h3>
                      <span className="text-[9px] font-mono text-text-secondary bg-card-bg border border-border-subtle px-2 py-0.5 rounded-full">
                        Travel Tech
                      </span>
                    </div>

                    {/* Role & Duration */}
                    <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-text-secondary font-mono">
                      <span>Full Stack Developer Intern</span>
                      <span className="text-border-subtle">{"//"}</span>
                      <span>Mar 2026 – May 2026</span>
                    </div>

                    {/* Impact Indicators */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ Product Delivery
                      </span>
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ Workflow Optimization
                      </span>
                    </div>

                    {/* Engineering Summary */}
                    <p className="text-text-primary text-sm font-medium leading-relaxed max-w-2xl">
                      Contributed to the core user platform at TrippinPal Travels, focusing on modernizing user interfaces, refining component architectures, and streamlining cloud deployments.
                    </p>

                    {/* Technical Contributions */}
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-sm font-light leading-relaxed max-w-2xl">
                      <li>Built and optimized responsive front-end layouts from Figma mockups, enhancing UX consistency and component modularity.</li>
                      <li>Refactored legacy UI components to improve interface load speeds and client-side maintainability.</li>
                      <li>Streamlined application deployment workflows using AWS EC2 and RDS cloud infrastructure.</li>
                    </ul>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["React", "Node.js", "AWS EC2", "AWS RDS", "Figma"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node 2: Xelron AI */}
                <div className="relative pl-8 sm:pl-10">
                  {/* Timeline indicator node */}
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-border-subtle bg-background flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Header: Company Name & Type Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-text-primary font-bold text-lg sm:text-xl leading-none">
                        Xelron AI
                      </h3>
                      <span className="text-[9px] font-mono text-text-secondary bg-card-bg border border-border-subtle px-2 py-0.5 rounded-full">
                        AI Startup
                      </span>
                    </div>

                    {/* Role & Duration */}
                    <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-text-secondary font-mono">
                      <span>AI Training and Evaluation Engineer</span>
                      <span className="text-border-subtle">//</span>
                      <span>Feb 2026 – Mar 2026</span>
                    </div>

                    {/* Impact Indicators */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ AI Evaluation
                      </span>
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ Performance Improvement
                      </span>
                    </div>

                    {/* Engineering Summary */}
                    <p className="text-text-primary text-sm font-medium leading-relaxed max-w-2xl">
                      Focused on reinforcement learning and model alignment at Xelron AI, evaluating complex reasoning capabilities and engineering datasets for preference training.
                    </p>

                    {/* Technical Contributions */}
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-sm font-light leading-relaxed max-w-2xl">
                      <li>Designed and conducted comprehensive evaluation sets to benchmark complex reasoning and code generation capabilities in LLMs.</li>
                      <li>Managed RLHF (Reinforcement Learning from Human Feedback) training data pipelines to align model outputs with intent.</li>
                      <li>Audited preference-ranked data to train next-generation deep learning architectures.</li>
                    </ul>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Python", "LLM Alignment", "RLHF Pipelines", "Dataset Curation"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node 3: 21CC Education */}
                <div className="relative pl-8 sm:pl-10">
                  {/* Timeline indicator node */}
                  <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-border-subtle bg-background flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Header: Company Name & Type Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-text-primary font-bold text-lg sm:text-xl leading-none">
                        21CC Education
                      </h3>
                      <span className="text-[9px] font-mono text-text-secondary bg-card-bg border border-border-subtle px-2 py-0.5 rounded-full">
                        EdTech
                      </span>
                    </div>

                    {/* Role & Duration */}
                    <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-text-secondary font-mono">
                      <span>Full Stack Developer Intern</span>
                      <span className="text-border-subtle">//</span>
                      <span>Dec 2025 – Jan 2026</span>
                    </div>

                    {/* Impact Indicators */}
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ Production Feature
                      </span>
                      <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full">
                        ⚡ Performance Improvement
                      </span>
                    </div>

                    {/* Engineering Summary */}
                    <p className="text-text-primary text-sm font-medium leading-relaxed max-w-2xl">
                      Engineered automation services for candidate matching and skills extraction at 21CC Education, optimizing relational databases and API response runtimes.
                    </p>

                    {/* Technical Contributions */}
                    <ul className="list-disc list-outside ml-4 space-y-1.5 text-text-secondary text-sm font-light leading-relaxed max-w-2xl">
                      <li>Designed and implemented a JobSkill Extraction microservice using Groovy/Grails, automating manual content tagging.</li>
                      <li>Optimized PostgreSQL database performance by implementing indexing strategies, accelerating search queries.</li>
                      <li>Designed and refactored REST APIs to handle high-concurrency candidate routing and profile matching.</li>
                    </ul>

                    {/* Technology Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {["Groovy", "Grails", "PostgreSQL", "REST APIs", "Java"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Works / Projects Section */}
        <section id="projects" className="py-24 border-t border-border-subtle relative overflow-hidden">
          {/* Ambient background glow */}
          <div className="absolute -z-10 bg-accent-primary/5 dark:bg-accent-primary/10 blur-[120px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full" />

          <h2 className="text-xs uppercase tracking-[0.2em] text-accent-primary font-mono mb-16 flex items-start gap-4">
            <span>02 / Selected Works</span>
            <span className="h-[1px] flex-1 bg-border-subtle" />
          </h2>

          <div className="space-y-24">
            {/* Block 1: Zigzag Layout (Text left, Image right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Text side */}
              <div className="order-1 md:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">[ Project 01 ]</span>
                  <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">AI Powered</span>
                </div>
                <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight">
                  Research Paper Analysis Platform
                </h3>
                <p className="text-sm font-medium text-accent-primary font-mono">
                  AI-powered research literature processing and analysis engine.
                </p>

                {/* Project Snapshot Panel */}
                <div className="border-t border-b border-border-subtle py-4 my-2 flex flex-col gap-2.5 font-mono text-xs text-text-secondary">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">📅 Duration</span>
                    <span className="text-text-primary font-medium">Sep 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">👥 Scale</span>
                    <span className="text-text-primary font-medium">Vector Index</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-accent-primary">
                    <span className="flex items-center gap-2">⚡ Impact</span>
                    <span>-60% Latency</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">🛠 Role</span>
                    <span className="text-text-primary font-medium">AI &amp; Backend</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  Optimized processing of research literature by building a high-performance Next.js and FastAPI stack, leveraging pgvector for semantic search vector space embedding indexing. Integrated Celery and Redis to handle robust asynchronous task execution.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Next.js", "FastAPI", "pgvector", "Celery", "Redis", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={siteConfig.projects.researchAssistant}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider bg-text-primary text-background border border-text-primary hover:bg-transparent hover:text-text-primary hover:border-border-subtle transition-all duration-300 ease-out"
                  >
                    Live Demo
                  </a>
                  <a
                    href={siteConfig.projects.researchAssistant}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider border border-border-subtle bg-transparent text-text-primary hover:bg-text-primary hover:text-background hover:border-text-primary transition-all duration-300 ease-out"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image side with refined framing */}
              <div className="order-2 md:col-span-7 bg-card-bg/60 border border-border-subtle shadow-sm rounded-2xl p-3 sm:p-4 overflow-hidden group">
                <div className="w-full aspect-[1024/490] relative overflow-hidden rounded-xl bg-card-bg">
                  <img
                    src="/research_assistant.png"
                    alt="Research Paper Analysis Platform"
                    className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                  
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  
                  <div className="absolute top-2 left-8 z-10">
                    <div className="text-[9px] font-mono text-text-primary bg-card-bg/70 border border-border-subtle px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Fig.01 // Research Assistant
                    </div>
                  </div>
                  <div className="absolute top-2 right-8 z-10">
                    <div className="text-[9px] font-mono text-accent-primary bg-card-bg/70 border border-accent-primary/30 px-1.5 py-0.5 rounded">
                      LATENCY: -60%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Zigzag Layout (Image left, Text right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Image side with refined framing */}
              <div className="order-2 md:order-1 md:col-span-7 bg-card-bg/60 border border-border-subtle shadow-sm rounded-2xl p-3 sm:p-4 overflow-hidden group">
                <div className="w-full aspect-[1024/467] relative overflow-hidden rounded-xl bg-card-bg">
                  <img
                    src="/campusflow.png"
                    alt="CampusFlow - AI-Powered Academic Suite"
                    className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                  
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>

                  <div className="absolute top-2 left-8 z-10">
                    <div className="text-[9px] font-mono text-text-primary bg-card-bg/70 border border-border-subtle px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Fig.02 // CampusFlow
                    </div>
                  </div>
                  <div className="absolute top-2 right-8 z-10">
                    <div className="text-[9px] font-mono text-accent-primary bg-card-bg/70 border border-accent-primary/30 px-1.5 py-0.5 rounded">
                      CONFLICTS: -90%
                    </div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className="order-1 md:order-2 md:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">[ Project 02 ]</span>
                  <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Production Ready</span>
                </div>
                <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight">
                  CampusFlow - AI-Powered Academic Suite
                </h3>
                <p className="text-sm font-medium text-accent-primary font-mono">
                  Constraint-based timetable solver and computer vision attendance platform.
                </p>

                {/* Project Snapshot Panel */}
                <div className="border-t border-b border-border-subtle py-4 my-2 flex flex-col gap-2.5 font-mono text-xs text-text-secondary">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">📅 Duration</span>
                    <span className="text-text-primary font-medium">Jul 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">👥 Scale</span>
                    <span className="text-text-primary font-medium">100+ Students</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-accent-primary">
                    <span className="flex items-center gap-2">⚡ Impact</span>
                    <span>-90% Conflicts</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">🛠 Role</span>
                    <span className="text-text-primary font-medium">Full Stack Developer</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  A comprehensive, scalable platform built on a MongoDB and React stack to automate university academic operations. Features a constraint satisfaction-based scheduling engine for course timetable generation. Integrates face-api.js to drive high-performance, real-time computer vision attendance capturing.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["React", "MongoDB", "Node.js", "face-api.js", "Constraint Solving"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={siteConfig.projects.campusFlow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider bg-text-primary text-background border border-text-primary hover:bg-transparent hover:text-text-primary hover:border-border-subtle transition-all duration-300 ease-out"
                  >
                    Live Demo
                  </a>
                  <a
                    href={siteConfig.projects.campusFlow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider border border-border-subtle bg-transparent text-text-primary hover:bg-text-primary hover:text-background hover:border-text-primary transition-all duration-300 ease-out"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Block 3: Zigzag Layout (Text left, Image right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Text side */}
              <div className="order-1 md:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">[ Project 03 ]</span>
                  <span className="text-[9px] font-mono text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">Hackathon Project</span>
                </div>
                <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight">
                  VoCrypt
                </h3>
                <p className="text-sm font-medium text-accent-primary font-mono">
                  Low-level DSP secure digital audio encryption system.
                </p>

                {/* Project Snapshot Panel */}
                <div className="border-t border-b border-border-subtle py-4 my-2 flex flex-col gap-2.5 font-mono text-xs text-text-secondary">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">📅 Duration</span>
                    <span className="text-text-primary font-medium">Nov 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">👥 Scale</span>
                    <span className="text-text-primary font-medium">36HR Hackathon</span>
                  </div>
                  <div className="flex justify-between items-center font-medium text-accent-primary">
                    <span className="flex items-center gap-2">⚡ Impact</span>
                    <span>Low-overhead DSP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">🛠 Role</span>
                    <span className="text-text-primary font-medium">Systems Developer</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm font-light leading-relaxed">
                  Engineered during an intense 36-hour hackathon, VoCrypt is a secure, audio-based encrypted communication system. Bypassing traditional heavy high-level setups, the core cryptographic engine is implemented using low-level, high-efficiency C++ libraries for high performance and low-overhead secure digital audio processing.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {["C++", "Audio DSP", "Cryptography", "Low-Level APIs"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md border border-border-subtle bg-card-bg text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-4">
                  <a
                    href={siteConfig.projects.voCrypt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider bg-text-primary text-background border border-text-primary hover:bg-transparent hover:text-text-primary hover:border-border-subtle transition-all duration-300 ease-out"
                  >
                    Live Demo
                  </a>
                  <a
                    href={siteConfig.projects.voCrypt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 px-5 text-xs font-mono uppercase tracking-wider border border-border-subtle bg-transparent text-text-primary hover:bg-text-primary hover:text-background hover:border-text-primary transition-all duration-300 ease-out"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Image side with refined framing */}
              <div className="order-2 md:col-span-7 bg-card-bg/60 border border-border-subtle shadow-sm rounded-2xl p-3 sm:p-4 overflow-hidden group">
                <div className="w-full aspect-[1024/486] relative overflow-hidden rounded-xl bg-card-bg">
                  <img
                    src="/vocrypt.png"
                    alt="VoCrypt"
                    className="w-full h-full object-contain object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Tech overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                  
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-text-secondary bg-card-bg/60 px-1 py-0.5 rounded font-light z-10">+</span>

                  <div className="absolute top-2 left-8 z-10">
                    <div className="text-[9px] font-mono text-text-primary bg-card-bg/70 border border-border-subtle px-1.5 py-0.5 rounded uppercase tracking-wider">
                      Fig.03 // VoCrypt
                    </div>
                  </div>
                  <div className="absolute top-2 right-8 z-10">
                    <div className="text-[9px] font-mono text-accent-primary bg-card-bg/70 border border-accent-primary/30 px-1.5 py-0.5 rounded">
                      36HR HACK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section (Technical Arsenal) */}
        <section id="skills" className="py-24 border-t border-border-subtle">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent-primary font-mono mb-16 flex items-start gap-4">
            <span>03 / Technical Arsenal</span>
            <span className="h-[1px] flex-1 bg-border-subtle" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Domain 1: Programming Languages */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.01 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">Programming Languages</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Writing clean, typed, and low-latency algorithmic solutions.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["C", "C++", "Python", "JavaScript (ES6+)", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 2: Backend Engineering */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.02 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">Backend Engineering</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Designing decoupled APIs, task queues, and asynchronous microservices.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["Node.js", "Express.js", "FastAPI", "RESTful APIs", "WebSockets"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 3: Frontend Engineering */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.03 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">Frontend Engineering</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Building high-fidelity, optimized, and responsive user experiences.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["React.js", "Next.js", "Tailwind CSS", "face-api.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 4: AI & Machine Learning */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.04 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">AI &amp; Machine Learning</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Structuring semantic index vector search and aligning reasoning models.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["RAG", "NumPy / Pandas"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 5: Databases */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.05 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">Databases</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Optimizing relational and document data layers with index scaling.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["PostgreSQL", "MongoDB", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Domain 6: DevOps & Cloud Tools */}
            <div className="border border-border-subtle bg-card-bg p-6 rounded-2xl hover:border-accent-primary hover:shadow-md transition-all duration-300 flex flex-col gap-3 group">
              <div className="text-[10px] font-mono text-text-secondary tracking-widest">
                [ DOMAIN.06 ]
              </div>
              <h3 className="text-text-primary font-bold text-lg leading-none">DevOps &amp; Cloud Tools</h3>
              <p className="text-xs text-text-secondary font-light leading-relaxed">
                Automating pipeline workflows and orchestrating container environments.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {["Docker", "Git", "GitHub Actions", "CI/CD Pipelines", "Vercel", "Render", "Postman"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md border border-border-subtle bg-transparent text-text-secondary text-[10px] font-mono tracking-wider transition-all duration-300 hover:border-accent-primary hover:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Highlights Section */}
        <section id="achievements" className="py-24 border-t border-border-subtle">
          <div className="flex flex-col gap-4 mb-16">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent-primary font-mono">
              04 / Professional Highlights
            </h2>
            <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              A selection of engineering credentials, competitive achievements, and professional recognitions that reflect depth of practice.
            </p>
          </div>

          <div className="flex flex-col gap-5">

            {/* Panel 1: Competitive Programming — large, prominent */}
            <div className="border border-border-subtle bg-card-bg rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Left: Title + Context */}
                <div className="md:col-span-3 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-text-secondary tracking-widest">[ 01 ]</span>
                  <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                    Competitive Programming
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-lg">
                    Competitive programming is my primary vehicle for developing algorithmic intuition. Solving complex problems under strict time and memory constraints has sharpened my ability to reason about data structures, edge cases, and runtime performance at a level that transfers directly into the design of production backend systems.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <a
                      href={siteConfig.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase tracking-wider text-accent-primary border border-accent-primary/30 px-4 py-2 rounded hover:bg-accent-primary hover:text-white dark:hover:text-black transition-all duration-300"
                    >
                      LeetCode ↗
                    </a>
                    <a
                      href={siteConfig.codeforces}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase tracking-wider text-text-secondary border border-border-subtle px-4 py-2 rounded hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                    >
                      Codeforces ↗
                    </a>
                    <a
                      href={siteConfig.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase tracking-wider text-text-secondary border border-border-subtle px-4 py-2 rounded hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                    >
                      CodeChef ↗
                    </a>
                  </div>
                </div>

                {/* Right: Supporting data */}
                <div className="md:col-span-2 flex flex-col gap-5 md:border-l border-border-subtle md:pl-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Platform</span>
                    <span className="text-text-primary font-medium text-sm">LeetCode</span>
                    <span className="text-text-secondary text-xs font-mono">Peak 1704 · Top 8%</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Platform</span>
                    <span className="text-text-primary font-medium text-sm">Codeforces</span>
                    <span className="text-text-secondary text-xs font-mono">Peak 1431 · Pupil</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Platform</span>
                    <span className="text-text-primary font-medium text-sm">CodeChef</span>
                    <span className="text-text-secondary text-xs font-mono">3-Star Rated</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Volume</span>
                    <span className="text-text-primary font-medium text-sm">1,000+ Problems</span>
                    <span className="text-text-secondary text-xs font-mono">Across all platforms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Amazon ML Summer School — hero panel, largest */}
            <div className="border border-accent-primary/25 bg-card-bg rounded-2xl p-10 md:p-16 hover:border-accent-primary/60 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              {/* Ambient glow in top-right */}
              <div className="absolute -right-24 -top-24 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-accent-primary/3 rounded-full blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start relative">
                {/* Left: Title + Context */}
                <div className="md:col-span-3 flex flex-col gap-6">
                  <span className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-primary tracking-widest bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-full w-fit">
                    <span className="w-1 h-1 rounded-full bg-accent-primary" />
                    [ 02 ] · DISTINCTION
                  </span>
                  <h3 className="text-text-primary font-bold text-3xl sm:text-4xl tracking-tight leading-tight">
                    Amazon ML<br />Summer School
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-lg">
                    Selected as one of the top candidates from a nationwide cohort of 3,000+ applicants, I participated in Amazon&apos;s intensive machine learning program led by Amazon ML Research Scientists. The curriculum spanned applied deep learning, generative AI architectures, and supervised learning systems — bridging theoretical foundations through to production deployment considerations.
                  </p>
                  <div className="pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent-primary border border-accent-primary/30 px-4 py-2 rounded inline-block">
                      2025 · Amazon India
                    </span>
                  </div>
                </div>

                {/* Right: Supporting data */}
                <div className="md:col-span-2 flex flex-col gap-5 md:border-l border-border-subtle md:pl-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Selectivity</span>
                    <span className="text-text-primary font-medium text-sm">Top Cohort</span>
                    <span className="text-text-secondary text-xs font-mono">3,000+ applicants · India-wide</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Curriculum</span>
                    <span className="text-text-primary font-medium text-sm">Applied Deep Learning</span>
                    <span className="text-text-secondary text-xs font-mono">Generative AI · Supervised Learning</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Instruction</span>
                    <span className="text-text-primary font-medium text-sm">Amazon Research Scientists</span>
                    <span className="text-text-secondary text-xs font-mono">Industry-led · intensive format</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Year</span>
                    <span className="text-text-primary font-medium text-sm">2025</span>
                    <span className="text-text-secondary text-xs font-mono">Cohort Program</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Engineering Hackathons — standard */}
            <div className="border border-border-subtle bg-card-bg rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Left: Title + Context */}
                <div className="md:col-span-3 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-text-secondary tracking-widest">[ 03 ]</span>
                  <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                    Engineering Hackathons
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-lg">
                    Hackathons have been an important testing ground for building real products under pressure. Competing in team environments forced me to make architectural decisions quickly, coordinate across frontend and backend boundaries, and deliver working prototypes to technical judges. The skills developed — speed, pragmatism, and focused execution — transfer directly into early-stage product development.
                  </p>
                </div>

                {/* Right: Supporting data */}
                <div className="md:col-span-2 flex flex-col gap-5 md:border-l border-border-subtle md:pl-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Event</span>
                    <span className="text-text-primary font-medium text-sm">Hackatron</span>
                    <span className="text-text-secondary text-xs font-mono">Top 20 Finalist</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Event</span>
                    <span className="text-text-primary font-medium text-sm">Sheriyan Frontend Hackathon</span>
                    <span className="text-text-secondary text-xs font-mono">Qualifier</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Event</span>
                    <span className="text-text-primary font-medium text-sm">G-Coderush · IIITM Gwalior</span>
                    <span className="text-text-secondary text-xs font-mono">7th Place · Code Debugging Top 4</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Focus</span>
                    <span className="text-text-primary font-medium text-sm">Rapid Prototyping</span>
                    <span className="text-text-secondary text-xs font-mono">Full-stack · Collaborative</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: Technical Assessments — standard */}
            <div className="border border-border-subtle bg-card-bg rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Left: Title + Context */}
                <div className="md:col-span-3 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-text-secondary tracking-widest">[ 04 ]</span>
                  <h3 className="text-text-primary font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                    Technical Assessments
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base font-light leading-relaxed max-w-lg">
                    Qualifying for the Infosys Specialist Programmer L2 interview pipeline required demonstrating advanced algorithmic proficiency across dynamic programming, graph theory, and data structure design. These standardised assessments reflect the ability to solve structured engineering problems at a high level of precision and under examination conditions.
                  </p>
                </div>

                {/* Right: Supporting data */}
                <div className="md:col-span-2 flex flex-col gap-5 md:border-l border-border-subtle md:pl-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Credential</span>
                    <span className="text-text-primary font-medium text-sm">Specialist Programmer · L2</span>
                    <span className="text-text-secondary text-xs font-mono">Infosys</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Assessment Areas</span>
                    <span className="text-text-primary font-medium text-sm">Advanced Algorithms</span>
                    <span className="text-text-secondary text-xs font-mono">DP · Graph Traversals · Trees</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">Track</span>
                    <span className="text-text-primary font-medium text-sm">Interview Pipeline</span>
                    <span className="text-text-secondary text-xs font-mono">Qualified · L2 criteria</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-border-subtle mt-20 bg-background">
        {/* Top Row: Name + Socials */}
        <div className="py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-text-primary font-semibold text-sm tracking-wide">
              Sparsh Saxena
            </span>
            <p className="text-text-secondary text-xs font-light">
              Full Stack Developer · AI Engineering · IIIT Surat
            </p>
          </div>

          {/* Social Icon Links */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center border border-border-subtle rounded text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-border-subtle rounded text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center border border-border-subtle rounded text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>

            {/* Resume */}
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="h-9 flex items-center px-4 border border-border-subtle rounded text-text-secondary text-[10px] font-mono uppercase tracking-widest hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright + Closing Statement */}
        <div className="border-t border-border-subtle py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-text-secondary text-xs font-light font-mono">
            &copy; 2026 Sparsh Saxena
          </p>
          <div className="flex items-center gap-4">
            <p className="text-text-secondary text-xs font-light">
              Designed and developed with attention to detail.
            </p>
            <a
              href="#home"
              aria-label="Back to Top"
              className="w-7 h-7 flex items-center justify-center border border-border-subtle rounded text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300 flex-shrink-0"
            >
              <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
