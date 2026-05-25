"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const SLOTS = [
  { label: "Daily Log — Caregiver view", aspect: "portrait" },
  { label: "AI suggestion cards", aspect: "portrait" },
  { label: "Therapist review workflow", aspect: "landscape" },
];

export function ScreenshotPlaceholder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-surface border-t border-border">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            The platform
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-xl">
            See it in action.
          </h2>
          <p className="text-body text-ink-muted mt-4 max-w-prose-tight">
            Screenshots coming soon. Drop your images into{" "}
            <code className="text-small bg-bg border border-border px-1.5 py-0.5 rounded font-mono">
              public/screenshots/
            </code>{" "}
            and update this section.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SLOTS.map((slot, i) => (
            <motion.div
              key={slot.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.1 }}
              className={`bg-bg rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 ${
                slot.aspect === "landscape" ? "md:col-span-3 py-16" : "py-20"
              }`}
            >
              <ImageIcon size={24} className="text-ink-muted/40" strokeWidth={1.5} />
              <p className="text-small text-ink-muted text-center px-4">{slot.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
