"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Skills
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Technical Expertise</span>
            </h3>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                className="glass-card p-6 md:p-8 rounded-2xl hover-lift glow-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Title with gradient accent */}
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 rounded-full bg-linear-to-b from-primary to-accent" />
                  <span className="gradient-text">{category}</span>
                </h4>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="group px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/50 text-foreground border border-border hover:border-primary/40 hover:bg-linear-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}