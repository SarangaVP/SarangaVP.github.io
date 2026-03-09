"use client";

import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift glow-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with degree and date */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="gradient-text font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="text-sm text-muted-foreground font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                    {edu.duration}
                  </div>
                </div>

                {/* GPA or Result */}
                {edu.gpa && (
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground">
                      <span>GPA: </span>
                      <span className="font-semibold text-foreground">{edu.gpa}</span>
                    </p>
                  </div>
                )}
                
                {edu.result && (
                  <div className="mb-3">
                    <p className="text-sm text-muted-foreground">
                      <span>Result: </span>
                      <span className="font-semibold text-foreground">{edu.result}</span>
                    </p>
                  </div>
                )}

                {/* Honors/Achievements */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mb-4">
                    <ul className="space-y-2 text-muted-foreground leading-relaxed">
                      {edu.honors.map((honor, i) => (
                        <li key={i} className="flex items-baseline gap-2">
                          <span className="text-primary">•</span>
                          <span>{honor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-2">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-linear-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}