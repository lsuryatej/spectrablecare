"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const ROLES = ["Caregiver", "Therapist", "Clinic", "Researcher", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    window.location.href = `mailto:trisha.p@spectrablecare.com?subject=SpectrAble contact: ${role}&body=Name: ${name}%0AEmail: ${email}%0ARole: ${role}%0A%0A${message}`;
    setSubmitted(true);
  }

  return (
    <main className="pt-24 min-h-[100dvh]" id="early-access">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
              Contact
            </p>
            <h1 className="font-serif text-display text-ink mb-6">
              Let's talk.
            </h1>
            <p className="text-body-lg text-ink-muted leading-relaxed max-w-prose-tight mb-8">
              Whether you're a caregiver looking for early access, a clinic
              exploring a pilot, or a researcher interested in the data — we'd
              like to hear from you.
            </p>
            <a
              href="mailto:trisha.p@spectrablecare.com"
              className="text-small font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              trisha.p@spectrablecare.com
            </a>
          </div>

          {/* Form */}
          <div className="bg-surface rounded-3xl border border-border shadow-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle size={32} className="text-therapist" strokeWidth={1.5} />
                <p className="font-serif text-h3 text-ink">Message sent.</p>
                <p className="text-small text-ink-muted">
                  We'll get back to you within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-semibold text-ink" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-small text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-semibold text-ink" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-small text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-semibold text-ink">
                    Role
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`px-4 py-2 rounded-full text-small font-medium border transition-all duration-200 ${
                          role === r
                            ? "bg-primary text-white border-primary"
                            : "bg-bg border-border text-ink-muted hover:border-primary hover:text-ink"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-small font-semibold text-ink" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-small text-ink placeholder:text-ink-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us a bit about what you're looking for."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-cta text-white text-small font-semibold hover:bg-cta-hover transition-colors duration-200"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
