"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const TABS = [
  {
    id: "caregivers",
    label: "Caregivers",
    accentClass: "text-caregiver",
    activeClass: "bg-caregiver-bg text-caregiver",
    content: {
      headline: "You know your child better than anyone.",
      sub: "SpectrAble gives you a simple way to document what you see, and makes sure your therapist gets the full picture before the next session.",
      features: [
        { title: "Daily behavior log", desc: "Log routines, emotions, and behaviors via text, voice memo, or short video. Under two minutes." },
        { title: "AI activity suggestions", desc: "Receive ideas tailored to what you logged today, reviewed and approved by your therapist." },
        { title: "SOS alert", desc: "One tap sends an urgent flag directly to your therapist when something needs immediate attention." },
        { title: "Progress visibility", desc: "See how your child is trending over time, in plain language — not clinical charts." },
      ],
    },
  },
  {
    id: "therapists",
    label: "Therapists",
    accentClass: "text-therapist",
    activeClass: "bg-therapist-bg text-therapist",
    content: {
      headline: "More time treating. Less time catching up.",
      sub: "SpectrAble surfaces what happened at home before you walk into the room, so every session starts with the full picture.",
      features: [
        { title: "Behavior trend view", desc: "See patterns across days and weeks before the session. No catch-up conversation needed." },
        { title: "Activity approval queue", desc: "Review AI-generated suggestions and approve, edit, or replace them before they reach caregivers." },
        { title: "Secure session notes", desc: "Keep notes linked to the child's ongoing behavioral record. Shareable with clinic admin." },
        { title: "SOS dashboard", desc: "Receive priority alerts when caregivers flag urgent situations between sessions." },
      ],
    },
  },
  {
    id: "clinics",
    label: "Clinics",
    accentClass: "text-admin",
    activeClass: "bg-admin-bg text-admin",
    content: {
      headline: "One view across your whole clinic.",
      sub: "SpectrAble gives clinic administrators visibility into therapist activity, client progress, and compliance — without chasing updates.",
      features: [
        { title: "Centralized clinic dashboard", desc: "Monitor all therapist-client interactions and system usage from a single, secure view." },
        { title: "Compliance reporting", desc: "Generate downloadable reports that meet clinical data protection and audit standards." },
        { title: "Therapist roster management", desc: "Manage caseloads, add or remove staff, and adjust permissions without IT." },
        { title: "Role-based secure access", desc: "Each user sees exactly what they need. Caregivers, therapists, and staff have separate views." },
      ],
    },
  },
];

export default function SolutionsPage() {
  const [active, setActive] = useState("caregivers");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="mb-12">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Solutions
          </p>
          <h1 className="font-serif text-display text-ink max-w-2xl">
            Built for every role in the circle of care.
          </h1>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 p-1.5 bg-surface rounded-full border border-border inline-flex mb-10 w-fit">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-small font-medium transition-all duration-200",
                active === t.id
                  ? t.activeClass + " shadow-sm"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-h2 text-ink mb-4">{tab.content.headline}</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed">{tab.content.sub}</p>
              </div>
              <ul className="flex flex-col gap-6">
                {tab.content.features.map((f, i) => (
                  <motion.li
                    key={f.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease, delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <div className={cn("w-2 h-2 rounded-full mt-2 shrink-0", tab.accentClass.replace("text-", "bg-"))} />
                    <div>
                      <p className="text-small font-semibold text-ink">{f.title}</p>
                      <p className="text-small text-ink-muted mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
