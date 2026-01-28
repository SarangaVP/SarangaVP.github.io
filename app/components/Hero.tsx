"use client";

import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 container-custom text-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting with gradient */}
          {/* <div className="inline-block">
            <p className="text-sm md:text-base text-muted-foreground font-medium mb-4 animate-fade-in">
              Hi, my name is
            </p>
          </div> */}

          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-3xl mx-auto">
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons with gradient */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium overflow-hidden hover-lift glow-effect"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-medium transition-all hover-lift hover:bg-primary hover:text-primary-foreground"
            >
              Download CV
            </a>

            <Link
              href="#contact"
              className="px-8 py-4 border border-border rounded-xl font-medium transition-all hover-lift hover:bg-secondary"
            >
              Contact Me
            </Link>
          </div>

          {/* Scroll indicator - Simple Arrow */}
          <div className="pt-16 animate-bounce">
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
    </section>
  );
}