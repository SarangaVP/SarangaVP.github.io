"use client";

import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Certifications
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Continuous Learning</span>
            </h3>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-xl hover-lift border border-primary/10 hover:border-primary/30 transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-2">
                  {/* Certificate Icon with gradient */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-sm leading-tight">
                    {cert.title}
                  </h4>

                  {/* Issuer & Date */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}