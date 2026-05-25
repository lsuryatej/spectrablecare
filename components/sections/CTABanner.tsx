"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Real form submission would go here.
    // For now, mailto fallback keeps it functional without a backend.
    window.location.href = `mailto:trisha.p@spectrablecare.com?subject=Early access request&body=Email: ${email}`;
    setSubmitted(true);
  }

  return (
    <section ref={ref} className="bg-dark">
      <div className="container-width py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="font-serif text-h2 text-ink-inverse mb-4"
            >
              Ready to close the gap?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-body-lg text-ink-inverse/60 max-w-prose-tight"
            >
              Join the clinics and families testing SpectrAble. Early access is
              free while we grow our pilot network.
            </motion.p>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              {submitted ? (
                <div className="flex items-center gap-2 text-small font-semibold text-therapist">
                  <CheckCircle size={16} />
                  We&apos;ll be in touch soon.
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3 rounded-full bg-dark-surface border border-white/10 text-ink-inverse text-small placeholder:text-ink-inverse/30 focus:outline-none focus:border-cta transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cta text-white text-small font-semibold hover:bg-cta-hover transition-colors duration-200 shrink-0"
                  >
                    Request access
                    <ArrowRight size={14} />
                  </button>
                </>
              )}
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="mt-4 text-label text-ink-inverse/40"
            >
              Or write directly:{" "}
              <a
                href="mailto:trisha.p@spectrablecare.com"
                className="text-ink-inverse/60 hover:text-ink-inverse transition-colors duration-200"
              >
                trisha.p@spectrablecare.com
              </a>
            </motion.p>
          </div>

          {/* Right: trust list */}
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="flex flex-col gap-4 lg:min-w-[220px]"
          >
            {[
              "HIPAA-compliant from day one",
              "End-to-end encrypted data",
              "Therapist review on every suggestion",
              "No long-term commitment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0" />
                <p className="text-small text-ink-inverse/60">{item}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
