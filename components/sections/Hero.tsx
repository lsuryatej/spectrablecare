"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUpProps(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  };
}

export function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center pt-16">
      <div className="container-width w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center py-16 lg:py-0">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8 lg:max-w-[540px]">
            <motion.div {...fadeUpProps(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-label font-semibold uppercase tracking-widest">
                Research-validated at ICORD 2025
              </span>
            </motion.div>

            <motion.h1
              {...fadeUpProps(0.1)}
              className="font-serif text-display text-ink text-balance leading-[1.05]"
            >
              What happens between sessions matters most.
            </motion.h1>

            <motion.p
              {...fadeUpProps(0.2)}
              className="text-body-lg text-ink-muted max-w-prose-tight leading-relaxed"
            >
              SpectrAble connects caregivers, therapists, and clinic teams
              around a child&apos;s daily behavioral data. What gets logged at home
              shapes what happens in the next session.
            </motion.p>

            <motion.div
              {...fadeUpProps(0.3)}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link
                href="/contact#early-access"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cta text-white text-small font-semibold hover:bg-cta-hover transition-colors duration-200"
              >
                Request Early Access
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-96-5499-4_10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-small font-semibold text-ink hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Read the Research
                <ExternalLink size={13} className="text-ink-muted" />
              </a>
            </motion.div>
          </div>

          {/* Right: Product UI mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:flex lg:justify-end"
          >
            <DailyLogMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DailyLogMockup() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto lg:mx-0">
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(122,30,46,0.12), transparent 70%)",
        }}
      />

      {/* Main card */}
      <div className="relative bg-surface rounded-3xl border border-border shadow-card overflow-hidden">
        {/* App bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div>
            <p className="text-label font-semibold uppercase tracking-widest text-ink-muted">
              Daily Log
            </p>
            <p className="text-small font-semibold text-ink mt-0.5">
              Arjun, age 7
            </p>
          </div>
          <div className="text-right">
            <p className="text-label text-ink-muted">Today</p>
            <p className="text-label font-semibold text-ink mt-0.5">
              Mon, 25 May
            </p>
          </div>
        </div>

        {/* Mood row */}
        <div className="px-5 py-4 border-b border-border">
          <p className="text-label font-semibold uppercase tracking-widest text-ink-muted mb-3">
            Today's mood
          </p>
          <div className="flex items-center gap-2">
            {[
              { label: "Morning", level: 2, color: "#C8730A" },
              { label: "Afternoon", level: 4, color: "#2D7A5F" },
              { label: "Evening", level: 3, color: "#3B5C8A" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="flex items-end gap-0.5 h-8">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <div
                      key={bar}
                      className="w-1.5 rounded-full transition-all"
                      style={{
                        height: `${bar <= item.level ? 8 + bar * 4 : 8}px`,
                        backgroundColor:
                          bar <= item.level ? item.color : "#DDD0BC",
                        opacity: bar <= item.level ? 1 : 1,
                      }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-ink-muted font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Behavior entries */}
        <div className="px-5 py-4 border-b border-border flex flex-col gap-3">
          <p className="text-label font-semibold uppercase tracking-widest text-ink-muted">
            Logged today
          </p>
          {[
            {
              time: "8:30am",
              activity: "Mealtime",
              note: "Some resistance, ate half",
              dot: "#C2570A",
            },
            {
              time: "11:00am",
              activity: "Sensory walk",
              note: "Calm, 15 min outdoors",
              dot: "#2D7A5F",
            },
            {
              time: "3:15pm",
              activity: "Homework",
              note: "Focused for 22 minutes",
              dot: "#3B5C8A",
            },
          ].map((entry) => (
            <div key={entry.time} className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: entry.dot }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-small font-semibold text-ink truncate">
                    {entry.activity}
                  </p>
                  <p className="text-label text-ink-muted shrink-0">
                    {entry.time}
                  </p>
                </div>
                <p className="text-small text-ink-muted mt-0.5">{entry.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div className="px-5 py-4 bg-[#FFFDF6]">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div>
              <p className="text-label font-semibold uppercase tracking-widest text-primary mb-1">
                AI Insight
              </p>
              <p className="text-small text-ink leading-relaxed">
                Arjun's focus is highest after outdoor activity. Therapist
                review pending for this week's session.
              </p>
              <button className="mt-2 text-label font-semibold text-cta hover:text-cta-hover transition-colors">
                Send to therapist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating therapist notification */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        className="absolute -right-4 top-6 bg-surface rounded-2xl border border-border shadow-card-hover px-4 py-3 flex items-center gap-3 max-w-[200px]"
      >
        <div className="w-8 h-8 rounded-full bg-therapist-bg flex items-center justify-center shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-therapist" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-ink leading-tight">
            Dr. Priya reviewed
          </p>
          <p className="text-[10px] text-ink-muted mt-0.5">Just now</p>
        </div>
      </motion.div>

      {/* Floating SOS resolved badge */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        className="absolute -left-4 bottom-12 bg-surface rounded-2xl border border-border shadow-card-hover px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-therapist animate-pulse" />
          <p className="text-[10px] font-semibold text-ink">
            3 clinics on SpectrAble
          </p>
        </div>
      </motion.div>
    </div>
  );
}
