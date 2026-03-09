"use client";

import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Experience</span>
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift glow-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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

                  {/* Description as bullet points */}
                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-baseline gap-2">
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

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