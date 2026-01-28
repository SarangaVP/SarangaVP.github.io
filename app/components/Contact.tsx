"use client";

import { personalInfo } from "@/lib/data";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with form service (FormSpree, EmailJS, etc.)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-2">
              Contact
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              I'm always open to discussing new projects, opportunities, or just having a chat about technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-medium hover-lift glow-effect"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8 animate-fade-in-up delay-200">
              {/* Email */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Email
                </h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors block"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Phone
                </h4>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors block"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* Location */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">
                  Location
                </h4>
                <p className="text-lg font-medium">{personalInfo.location}</p>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">
                  Connect
                </h4>
                <div className="flex gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all group"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform text-foreground group-hover:text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 transition-all group"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6 group-hover:scale-110 transition-transform text-foreground group-hover:text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}