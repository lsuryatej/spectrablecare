import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding">
        <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
          How it works
        </p>
        <h1 className="font-serif text-display text-ink max-w-2xl mb-6">
          From the daily log to the therapy session.
        </h1>
        <p className="text-body-lg text-ink-muted max-w-prose-tight mb-16">
          Detailed content for this page is coming soon. In the meantime, the
          overview below covers the core flow.
        </p>

        {/* Expanded steps — placeholder for detailed content */}
        <div className="flex flex-col gap-12 mb-16">
          {[
            {
              number: "01",
              actor: "Caregiver",
              actorColor: "text-caregiver",
              title: "Log the day",
              desc: "The SpectrAble caregiver app lets you record a behavior in under two minutes. Type a short note, record your voice, or upload a 30-second video. No forms. No clinical language required.",
              detail: "Every entry is timestamped and stored securely. The AI reads across entries to find patterns — you don't need to label or categorize anything.",
            },
            {
              number: "02",
              actor: "SpectrAble AI",
              actorColor: "text-primary",
              title: "Spot the pattern",
              desc: "The platform reads NLP sentiment from text notes, classifies tone from audio, and tracks behavioral data across days and weeks.",
              detail: "When a pattern is detected — a trigger that keeps appearing, a behavior that's improving, or something new — it surfaces to the therapist before the next session.",
            },
            {
              number: "03",
              actor: "Therapist",
              actorColor: "text-therapist",
              title: "Review and act",
              desc: "Before walking into the session room, the therapist has a clear behavioral summary: what happened at home, what the AI flagged, and any pending SOS alerts.",
              detail: "The therapist can approve AI-generated activity suggestions, add their own notes, or push a message back to the caregiver — all from within SpectrAble.",
            },
            {
              number: "04",
              actor: "Everyone",
              actorColor: "text-admin",
              title: "Stay aligned",
              desc: "Progress reports update in real time. The caregiver sees what the therapist noticed. The clinic admin sees aggregate progress across the caseload.",
              detail: "Nothing gets lost between sessions. The plan evolves with the child, not against a fixed schedule.",
            },
          ].map((step) => (
            <div key={step.number} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-surface border border-border flex items-center justify-center">
                <span className="font-mono text-small font-bold text-ink-muted">{step.number}</span>
              </div>
              <div>
                <p className={`text-label font-semibold uppercase tracking-widest mb-2 ${step.actorColor}`}>{step.actor}</p>
                <h2 className="font-serif text-h2 text-ink mb-3">{step.title}</h2>
                <p className="text-body-lg text-ink-muted leading-relaxed mb-3 max-w-prose-tight">{step.desc}</p>
                <p className="text-body text-ink-muted leading-relaxed max-w-prose-tight">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App download section — the ONE place Kokum app names appear */}
        <div className="rounded-3xl bg-dark p-10 flex flex-col gap-6">
          <p className="text-label font-semibold uppercase tracking-widest text-cta">
            Get started
          </p>
          <h2 className="font-serif text-h2 text-ink-inverse max-w-lg">
            Download the app for your role.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-surface rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
              <p className="text-small font-semibold text-ink-inverse">
                Kokum Caretaker
              </p>
              <p className="text-small text-ink-inverse/60 leading-relaxed">
                For caregivers. Log daily behavior, receive activity
                suggestions, and send SOS alerts.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-small font-semibold text-cta hover:text-cta-hover transition-colors"
              >
                Find on App Store
                <ArrowRight size={13} />
              </Link>
            </div>
            <div className="bg-dark-surface rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
              <p className="text-small font-semibold text-ink-inverse">
                Kokum Therapist
              </p>
              <p className="text-small text-ink-inverse/60 leading-relaxed">
                For therapists. Review behavior logs, approve activities, and
                stay connected with caregivers.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-small font-semibold text-cta hover:text-cta-hover transition-colors"
              >
                Find on App Store
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
