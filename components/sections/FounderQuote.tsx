"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function FounderQuote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-bg border-t border-border">
      <div className="container-width">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-label font-semibold uppercase tracking-widest text-primary mb-8"
          >
            Why we built this
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="font-serif text-h2 text-ink leading-snug"
          >
            "It wasn't about stopping the behavior. It was about guiding it in
            the right way."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-border max-w-[60px]" />
            <div>
              <p className="text-small font-semibold text-ink">Trisha P.</p>
              <p className="text-small text-ink-muted">Founder, SpectrAble</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-small font-semibold text-primary hover:text-primary-hover transition-colors duration-200"
            >
              Read the full story
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
