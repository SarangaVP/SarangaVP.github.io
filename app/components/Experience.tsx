"use client";

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Experience
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Where I've Worked</span>
            </h3>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift glow-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot with gradient */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent hidden md:flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-background" />
                </div>

                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-bold transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-linear-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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