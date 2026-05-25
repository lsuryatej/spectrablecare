"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const PERSONAS = [
  {
    id: "caregiver",
    label: "Caregivers",
    accentClass: "border-t-caregiver",
    badgeClass: "bg-caregiver-bg text-caregiver",
    dotColor: "bg-caregiver",
    pain: "You notice things between sessions that never make it to your child's therapist in time.",
    features: [
      {
        title: "Daily behavior log",
        desc: "Log routines, moods, and behaviors in under 90 seconds. Text, audio, or short video.",
      },
      {
        title: "AI activity suggestions",
        desc: "Receive ideas your therapist has approved, tailored to what you logged today.",
      },
      {
        title: "SOS alert",
        desc: "One tap sends an urgent flag to your therapist when something needs immediate attention.",
      },
    ],
  },
  {
    id: "therapist",
    label: "Therapists",
    accentClass: "border-t-therapist",
    badgeClass: "bg-therapist-bg text-therapist",
    dotColor: "bg-therapist",
    pain: "You make session plans without knowing what happened at home the other six days.",
    features: [
      {
        title: "Behavior trend view",
        desc: "See patterns across days and weeks before the session starts. No catch-up needed.",
      },
      {
        title: "Activity approval queue",
        desc: "Review AI-generated suggestions and approve, edit, or replace them before they reach caregivers.",
      },
      {
        title: "Secure session notes",
        desc: "Keep session summaries linked to the child's ongoing behavioral record.",
      },
    ],
  },
  {
    id: "admin",
    label: "Clinic Admins",
    accentClass: "border-t-admin",
    badgeClass: "bg-admin-bg text-admin",
    dotColor: "bg-admin",
    pain: "You manage multiple therapists and families with no shared view of what's happening across your clinic.",
    features: [
      {
        title: "Centralized clinic dashboard",
        desc: "Monitor all therapist-client activity and system usage from a single view.",
      },
      {
        title: "Compliance reporting",
        desc: "Generate downloadable progress and audit reports that meet clinical data standards.",
      },
      {
        title: "Role-based access",
        desc: "Control exactly what each therapist, caregiver, and staff member can see and do.",
      },
    ],
  },
];

export function PersonaCards() {
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
          className="mb-12"
        >
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Built for everyone in the room
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-xl">
            The circle of care, connected.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.1 }}
              className={cn(
                "bg-bg rounded-2xl border border-border border-t-4 p-8 flex flex-col gap-6",
                persona.accentClass
              )}
            >
              {/* Badge + label */}
              <div>
                <span
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-label font-semibold uppercase tracking-widest mb-4",
                    persona.badgeClass
                  )}
                >
                  {persona.label}
                </span>
                <p className="text-body text-ink-muted leading-relaxed">
                  {persona.pain}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Features */}
              <ul className="flex flex-col gap-5">
                {persona.features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full mt-1.5 shrink-0",
                        persona.dotColor
                      )}
                    />
                    <div>
                      <p className="text-small font-semibold text-ink">
                        {feature.title}
                      </p>
                      <p className="text-small text-ink-muted mt-0.5 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
