"use client";

import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Education
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Academic Background</span>
            </h3>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-6 md:p-8 rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with degree and date */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg gradient-text font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium whitespace-nowrap">{edu.duration}</span>
                  </div>
                </div>

                {/* GPA or Result */}
                {edu.gpa && (
                  <div className="mb-4">
                    <p className="text-base">
                      <span className="text-muted-foreground">GPA: </span>
                      <span className="font-bold gradient-text text-lg">{edu.gpa}</span>
                    </p>
                  </div>
                )}
                
                {edu.result && (
                  <div className="mb-4">
                    <p className="text-base">
                      <span className="text-muted-foreground">Result: </span>
                      <span className="font-bold gradient-text text-lg">{edu.result}</span>
                    </p>
                  </div>
                )}

                {/* Honors/Achievements */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mb-6">
                    <ul className="list-disc list-inside space-y-2">
                      {edu.honors.map((honor, i) => (
                        <li key={i} className="text-sm md:text-base text-foreground">
                          {honor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-muted-foreground mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
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