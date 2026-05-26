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
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const FEATURES = [
  {
    id: "capture",
    icon: FileText,
    title: "Capture, any format",
    desc: "The best log is the one that actually gets written. Families document in whatever way fits the moment.",
    persona: "caregiver",
    size: "large",
  },
  {
    id: "intelligence",
    icon: TrendingUp,
    title: "Intelligence between sessions",
    desc: "The platform does the analysis. Clinicians get the insight.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "urgency",
    icon: AlertTriangle,
    title: "When it can't wait",
    desc: "Critical moments don't get queued. They get acted on.",
    persona: "alert",
    size: "medium",
  },
  {
    id: "coordination",
    icon: CheckCircle,
    title: "Therapist stays current",
    desc: "Home data reaches the clinic in real time. Not at the next appointment.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "progress",
    icon: Target,
    title: "Progress over time",
    desc: "Goals tracked against reality. Not against a fixed schedule.",
    persona: "therapist",
    size: "small",
  },
  {
    id: "teams",
    icon: Shield,
    title: "Built for teams",
    desc: "Roles, permissions, and reporting structured for the way clinics actually work.",
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
            What we built
          </p>
          <h2 className="font-serif text-h2 text-ink max-w-xl">
            Care that doesn't stop when the session ends.
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
                    {["Any format", "Any moment", "Nothing lost"].map((mode) => (
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
