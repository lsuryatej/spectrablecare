"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-bg">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Left: the gap visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <GapDiagram />
          </motion.div>

          {/* Right: copy */}
          <div className="flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-label font-semibold uppercase tracking-widest text-primary"
            >
              The gap we fill
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              className="font-serif text-h2 text-ink"
            >
              An hour a week in the clinic. 167 hours at home.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-body-lg text-ink-muted leading-relaxed max-w-prose-tight"
            >
              Therapy sessions are where the plan gets made. But most of a
              child&apos;s life happens outside that room. Caregivers notice things
              that don&apos;t make it back to the therapist in time. Therapists make
              decisions without the full picture.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              className="text-body-lg text-ink-muted leading-relaxed max-w-prose-tight"
            >
              SpectrAble lives in that gap. Daily logs from home reach the
              therapist before the next session. Patterns surface before they
              become problems. Everyone stays on the same page.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GapDiagram() {
  return (
    <div className="relative bg-surface rounded-3xl border border-border p-8 shadow-card overflow-hidden">
      {/* Timeline */}
      <div className="flex flex-col gap-0">
        {/* Clinic session block */}
        <div className="flex items-stretch gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-therapist mt-1 shrink-0" />
            <div className="w-0.5 bg-border flex-1 mt-1" />
          </div>
          <div className="pb-6">
            <p className="text-small font-semibold text-ink">Therapy session</p>
            <p className="text-label text-ink-muted mt-0.5">
              Mon, 9:00am &nbsp;&middot;&nbsp; 1 hour
            </p>
            <div className="mt-3 px-3 py-2 rounded-xl bg-therapist-bg border border-therapist/20 inline-block">
              <p className="text-label font-semibold text-therapist">
                Plan created
              </p>
            </div>
          </div>
        </div>

        {/* The gap */}
        <div className="flex items-stretch gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-border mt-1 shrink-0" />
            <div className="w-0.5 bg-border flex-1 mt-1" />
          </div>
          <div className="pb-6">
            <p className="text-small font-semibold text-ink-muted">
              The rest of the week
            </p>
            <p className="text-label text-ink-muted mt-0.5">
              167 hours &nbsp;&middot;&nbsp; No visibility
            </p>
            {/* What happens in the gap */}
            <div className="mt-3 flex flex-col gap-2">
              {[
                "Meltdown at school — caregiver unsure what triggered it",
                "New stim behavior noticed — no way to log it",
                "Routine change — therapist finds out next week",
              ].map((note) => (
                <div key={note} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-muted/40 mt-1.5 shrink-0" />
                  <p className="text-small text-ink-muted">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next session */}
        <div className="flex items-stretch gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-therapist mt-1 shrink-0" />
          </div>
          <div>
            <p className="text-small font-semibold text-ink">Next session</p>
            <p className="text-label text-ink-muted mt-0.5">
              Mon, 9:00am &nbsp;&middot;&nbsp; Starting from scratch
            </p>
          </div>
        </div>
      </div>

      {/* SpectrAble overlay badge */}
      <div className="absolute bottom-4 right-4 bg-primary rounded-xl px-4 py-3 shadow-card-hover max-w-[200px]">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60 mb-1">
          With SpectrAble
        </p>
        <p className="text-small font-semibold text-white leading-snug">
          Every day logged. Therapist notified. Nothing lost.
        </p>
      </div>
    </div>
  );
}
