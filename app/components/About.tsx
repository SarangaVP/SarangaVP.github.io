"use client";

import { about } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-sm font-medium text-primary mb-2">
                About Me
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Who I Am</span>
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{about.summary}</p>
            </div>
          </div>

          {/* Profile Image with gradient border */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative max-w-xs mx-auto">
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20" />
              
              {/* Gradient border */}
              <div className="relative gradient-border rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                <Image
                  src={about.image}
                  alt="Saranga Malshan"
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}