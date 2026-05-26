import Link from "next/link";

function PlayStoreLogo() {
  return (
    <svg width="18" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 23.76c.38.22.82.27 1.24.15L16.1 12 12 7.9 3.18 23.76z" fill="#EA4335"/>
      <path d="M20.82 10.33l-3.1-1.77L13.41 12l4.31 4.31 3.1-1.77a1.97 1.97 0 0 0 0-4.21z" fill="#FBBC04"/>
      <path d="M4.42.09A1.97 1.97 0 0 0 3.18.24v23.52c.38.22.82.27 1.24.15L16.1 12 4.42.09z" fill="#4285F4"/>
      <path d="M12 12l4.1-4.1L4.42.09A1.97 1.97 0 0 0 3.18.24L12 12z" fill="#34A853"/>
    </svg>
  );
}

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
            {/* Caretaker */}
            <div className="bg-dark-surface rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
              <p className="text-small font-semibold text-ink-inverse">
                Kokum Caretaker
              </p>
              <p className="text-small text-ink-inverse/60 leading-relaxed">
                For caregivers. Log daily behavior, receive activity
                suggestions, and send SOS alerts.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.corazortechnology.kokumcaretaker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-1 px-4 py-2.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-200 w-fit"
              >
                <PlayStoreLogo />
                <span className="flex flex-col leading-none">
                  <span className="text-[9px] text-ink-inverse/50 uppercase tracking-widest">Get it on</span>
                  <span className="text-small font-semibold text-ink-inverse mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
            {/* Therapist */}
            <div className="bg-dark-surface rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
              <p className="text-small font-semibold text-ink-inverse">
                Kokum Therapist
              </p>
              <p className="text-small text-ink-inverse/60 leading-relaxed">
                For therapists. Review behavior logs, approve activities, and
                stay connected with caregivers.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.corazortechnology.kokumtherapist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-1 px-4 py-2.5 rounded-xl bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-200 w-fit"
              >
                <PlayStoreLogo />
                <span className="flex flex-col leading-none">
                  <span className="text-[9px] text-ink-inverse/50 uppercase tracking-widest">Get it on</span>
                  <span className="text-small font-semibold text-ink-inverse mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
