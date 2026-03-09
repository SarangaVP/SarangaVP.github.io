"use client";

import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        {/* Content */}
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
          {/* Name with gradient - Responsive sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="block gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title - Responsive sizing */}
          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto px-4">
            {personalInfo.title}
          </h2>

          {/* Tagline - Same size as title, nowrap to keep in one line */}
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-full mx-auto px-4 whitespace-nowrap">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons with gradient - Stack on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 md:pt-8 px-4">
            <a
              href="/Saranga_Malshan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-xl font-medium transition-all hover-lift hover:bg-primary hover:text-primary-foreground text-center"
            >
              Download CV
            </a>

            <Link
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-xl font-medium transition-all hover-lift hover:bg-secondary text-center"
            >
              Contact Me
            </Link>
          </div>

          {/* Scroll indicator - Simple Arrow */}
          <div className="pt-12 md:pt-16 animate-bounce">
            <Link href="#about" className="inline-block text-primary hover:text-accent transition-colors">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Add bottom padding on mobile for bottom nav */}
      <div className="md:hidden h-20" />
    </section>
  );
}