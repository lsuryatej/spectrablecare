"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const TRUST_ITEMS = [
  {
    label: "Research accepted at ICORD + CHI",
    sub: "Springer, 2025",
    href: "https://link.springer.com/chapter/10.1007/978-981-96-5499-4_10",
    external: true,
  },
  {
    label: "Google Cloud for Startups",
    sub: "Program member",
    href: null,
  },
  {
    label: "HIPAA-Compliant",
    sub: "End-to-end encrypted",
    href: null,
  },
  {
    label: "Therapist-Approved",
    sub: "Validated with ABA clinicians",
    href: null,
  },
  {
    label: "1st Prize, UW Startup Pitch",
    sub: "Information School, 2024",
    href: null,
  },
];

export function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-y border-border bg-surface"
    >
      <div className="container-width py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-12"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-0.5 group"
                >
                  <span className="flex items-center gap-1 text-small font-semibold text-ink group-hover:text-primary transition-colors duration-200">
                    {item.label}
                    <ExternalLink size={10} className="text-ink-muted" />
                  </span>
                  <span className="text-label text-ink-muted">{item.sub}</span>
                </a>
              ) : (
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-small font-semibold text-ink">
                    {item.label}
                  </span>
                  <span className="text-label text-ink-muted">{item.sub}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
