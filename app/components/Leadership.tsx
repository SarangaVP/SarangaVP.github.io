"use client";

import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Leadership
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Community & Leadership</span>
            </h3>
          </div>

          {/* Leadership Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((role, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-lift glow-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  {/* Icon with gradient */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors border border-primary/20">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold">
                    {role.title}
                  </h4>

                  {/* Organization */}
                  <p className="text-sm font-medium text-primary">
                    {role.organization}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}