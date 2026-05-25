"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: "01",
    actor: "Caregiver",
    actorColor: "text-caregiver",
    title: "Log the day",
    desc: "Note a behavior, record a short voice memo, or upload a 30-second video. Takes under two minutes.",
  },
  {
    number: "02",
    actor: "SpectrAble AI",
    actorColor: "text-primary",
    title: "Spot the pattern",
    desc: "The platform reads across days and flags trends — what's improving, what's new, what needs attention.",
  },
  {
    number: "03",
    actor: "Therapist",
    actorColor: "text-therapist",
    title: "Review and act",
    desc: "Before the next session, the therapist sees a clear picture. Approve activities, add notes, or respond to an SOS.",
  },
  {
    number: "04",
    actor: "Everyone",
    actorColor: "text-admin",
    title: "Stay aligned",
    desc: "Progress reports update in real time. Caregivers see what's working. Therapists adjust the plan. Nothing falls through.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-surface border-t border-border">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            How it works
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-lg">
            Four steps. One shared picture.
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.1 }}
              className="relative"
            >
              {/* Connector line (desktop only, not on last item) */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-5 left-[calc(50%+24px)] right-0 h-px bg-border z-0"
                />
              )}

              <div className="relative z-10 lg:pr-8 flex flex-col gap-4">
                {/* Number circle */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shrink-0">
                    <span className="font-mono text-label font-bold text-ink-muted">
                      {step.number}
                    </span>
                  </div>
                  <div className="lg:hidden h-px flex-1 bg-border" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <p className={cn("text-label font-semibold uppercase tracking-widest", step.actorColor)}>
                    {step.actor}
                  </p>
                  <p className="font-serif text-h3 text-ink">{step.title}</p>
                  <p className="text-small text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
