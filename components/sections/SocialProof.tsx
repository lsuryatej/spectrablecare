"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const KPIS = [
  { number: "7", label: "Participants in alpha testing", sub: "Special school study" },
  { number: "4", label: "Clinics agreed for pilots", sub: "Including 2 ABA centres" },
  { number: "1", label: "Peer-reviewed research paper", sub: "ICORD + CHI 2025" },
  { number: "2", label: "Awards at UW", sub: "Pitch + Marketing Strategy" },
];

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-bg border-t border-border">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Early results
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-lg">
            Tested with clinicians. Validated by research.
          </h2>
        </motion.div>

        {/* KPI grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.05 + i * 0.08 }}
              className="bg-surface rounded-2xl border border-border p-6 shadow-card"
            >
              <p className="font-mono text-kpi font-bold text-primary leading-none mb-3">
                {kpi.number}
              </p>
              <p className="text-small font-semibold text-ink leading-snug">
                {kpi.label}
              </p>
              <p className="text-label text-ink-muted mt-1">{kpi.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Research citation card */}
        <motion.a
          href="https://link.springer.com/chapter/10.1007/978-981-96-5499-4_10"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="group block bg-surface rounded-2xl border border-border shadow-card overflow-hidden hover:shadow-card-hover transition-shadow duration-300"
        >
          <div className="flex items-stretch">
            {/* Accent bar */}
            <div className="w-1 bg-primary shrink-0" />

            <div className="flex-1 px-8 py-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-label font-semibold uppercase tracking-widest text-ink-muted mb-2">
                    Research paper
                  </p>
                  <p className="font-serif text-h3 text-ink leading-snug mb-3">
                    SpectrAble: Designing a Digital Platform to Bridge the Gap
                    in Autism Care
                  </p>
                  <p className="text-small text-ink-muted">
                    Accepted at ICORD (International Conference on Research into
                    Design) &nbsp;&middot;&nbsp; Published in Springer, 2025
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Autism care",
                      "Digital health",
                      "ABA therapy",
                      "Caregiver support",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-bg border border-border text-label text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 text-small font-semibold text-primary group-hover:text-primary-hover transition-colors">
                  <span className="hidden sm:block">Read paper</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Validation partners */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.38 }}
          className="mt-8 pt-8 border-t border-border"
        >
          <p className="text-label text-ink-muted mb-4">
            Product value validated with
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "UW Medicine",
              "Hampton Roads ABA",
              "Managing Autism ABA",
              "1 Special School (7 participants)",
            ].map((org) => (
              <span
                key={org}
                className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-surface text-small font-medium text-ink"
              >
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
