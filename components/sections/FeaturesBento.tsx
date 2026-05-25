"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Target,
  Shield,
  Bell,
  BarChart2,
  Mic,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    id: "journaling",
    icon: FileText,
    title: "Multimodal journaling",
    desc: "Log behaviors through text, audio recordings, or short video clips — whichever is easiest in the moment.",
    persona: "caregiver",
    size: "large",
  },
  {
    id: "suggestions",
    icon: Mic,
    title: "Daily activity suggestions",
    desc: "AI reads your logs and surfaces activities your therapist has approved.",
    persona: "caregiver",
    size: "small",
  },
  {
    id: "trends",
    icon: TrendingUp,
    title: "Trend charts",
    desc: "Emotional and behavioral patterns across days, weeks, and months.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "sos",
    icon: AlertTriangle,
    title: "SOS alert dashboard",
    desc: "One tap from a caregiver triggers priority routing to the therapist. Urgent situations don't wait until Monday.",
    persona: "alert",
    size: "medium",
  },
  {
    id: "feedback",
    icon: CheckCircle,
    title: "Therapist feedback loop",
    desc: "Approve logs, leave comments, and tailor AI suggestions without scheduling a call.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "goals",
    icon: Target,
    title: "Smart goal tracker",
    desc: "Set therapy targets and track progress against them over time.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "access",
    icon: Shield,
    title: "Role-based access",
    desc: "Caregivers, therapists, and clinic staff each see exactly what they need. Nothing more.",
    persona: "admin",
    size: "small",
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Real-time notifications",
    desc: "Stay updated when logs are reviewed, activities are approved, or alerts are sent.",
    persona: "caregiver",
    size: "small",
  },
  {
    id: "analytics",
    icon: BarChart2,
    title: "Admin analytics panel",
    desc: "Clinic-wide usage, therapist activity, and compliance reporting in one place.",
    persona: "admin",
    size: "small",
  },
];

const PERSONA_STYLES: Record<string, { dot: string; bg: string; text: string }> = {
  caregiver: { dot: "bg-caregiver", bg: "bg-caregiver-bg", text: "text-caregiver" },
  therapist: { dot: "bg-therapist", bg: "bg-therapist-bg", text: "text-therapist" },
  admin: { dot: "bg-admin", bg: "bg-admin-bg", text: "text-admin" },
  alert: { dot: "bg-red-500", bg: "bg-red-50", text: "text-red-600" },
};

export function FeaturesBento() {
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
          className="mb-12"
        >
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Platform features
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-xl">
            Everything the circle of care needs.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {FEATURES.map((feature, i) => {
            const style = PERSONA_STYLES[feature.persona];
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            const isMedium = feature.size === "medium";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.05 + i * 0.06 }}
                className={cn(
                  "bg-surface rounded-2xl border border-border shadow-card p-6 flex flex-col gap-4",
                  isLarge && "lg:col-span-2 lg:row-span-2",
                  isMedium && "lg:col-span-2",
                  feature.id === "sos" && "border-red-100 bg-red-50/40"
                )}
              >
                {/* Icon + persona dot */}
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      style.bg
                    )}
                  >
                    <Icon
                      size={18}
                      className={cn(style.text)}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full mt-2",
                      style.dot
                    )}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <p
                    className={cn(
                      "font-semibold text-ink",
                      isLarge ? "font-serif text-h3" : "text-h4"
                    )}
                  >
                    {feature.title}
                  </p>
                  <p
                    className={cn(
                      "text-ink-muted leading-relaxed",
                      isLarge ? "text-body-lg" : "text-small"
                    )}
                  >
                    {feature.desc}
                  </p>
                </div>

                {/* Large card extra content */}
                {isLarge && (
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {["Text entry", "Voice memo", "Short video"].map((mode) => (
                      <div
                        key={mode}
                        className="px-3 py-2 rounded-xl bg-caregiver-bg border border-caregiver/10 text-center"
                      >
                        <p className="text-label font-semibold text-caregiver">
                          {mode}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
