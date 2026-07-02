import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparsh Saxena — Full Stack Developer & ECE Student",
  description: "Bridging the gap between scalable web architectures and AI model evaluation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth overflow-x-hidden`}
    >
      <body className="bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
        {/* Fixed Vertical Sidebar - Slide out on hover with visual indicator */}
        <nav className="fixed top-0 left-0 h-screen w-12 sm:w-16 hover:w-64 md:hover:w-72 bg-black/30 hover:bg-black/95 backdrop-blur-sm hover:backdrop-blur-2xl border-r border-white/[0.03] hover:border-zinc-800 z-50 flex flex-col justify-between items-center hover:items-start p-0 transition-all duration-300 ease-out group">
          
          {/* Collapsed View (shown only when NOT hovered) */}
          <div className="flex flex-col justify-between items-center h-full w-full py-8 opacity-100 group-hover:opacity-0 transition-opacity duration-200 pointer-events-auto group-hover:pointer-events-none select-none">
            {/* Top: Sleek Minimalist Menu Icon */}
            <div className="text-zinc-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>

            {/* Middle: Rotated Monospaced Indicator label */}
            <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-zinc-500 rotate-90 my-auto whitespace-nowrap">
              Menu
            </div>

            {/* Bottom: Pulsing Cyan Indicator Dot */}
            <div className="flex flex-col items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Expanded View (shown only when HOVERED) */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 overflow-hidden pointer-events-none group-hover:pointer-events-auto">
            {/* Top Section: Brand Identity */}
            <div className="w-full">
              <span className="text-xl font-bold tracking-wider font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Sparsh Saxena
              </span>

              {/* Middle Section: Navigation Links */}
              <div className="flex flex-col gap-6 w-full mt-12">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Projects", href: "#projects" },
                  { name: "Skills", href: "#skills" },
                  { name: "Achievements", href: "#achievements" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                     key={link.name}
                     href={link.href}
                     className="text-zinc-400 hover:text-cyan-400 font-mono text-sm tracking-wide transition-colors duration-300 w-full text-left"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Section: Action Hub */}
            <div className="w-full flex flex-col gap-6">
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-400 hover:text-black transition-all duration-300 py-2 rounded-lg text-xs font-mono uppercase tracking-wider block"
              >
                View Resume
              </a>

              <div className="flex items-center gap-6">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-500 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Email"
                  className="text-zinc-500 hover:text-white transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Global Main Content Wrapper with Symmetric Padding for Balance */}
        <main className="pl-12 sm:pl-16 pr-12 sm:pr-16 min-h-screen w-full transition-all duration-300 overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

