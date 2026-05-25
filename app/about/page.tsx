import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-small font-medium text-ink-muted hover:text-ink transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">
          {/* Founder story */}
          <div>
            <p className="text-label font-semibold uppercase tracking-widest text-primary mb-4">
              Why we built this
            </p>
            <h1 className="font-serif text-display text-ink mb-10">
              The story behind SpectrAble.
            </h1>

            <div className="flex flex-col gap-6 text-body text-ink-muted leading-relaxed max-w-prose-tight">
              <p>
                While babysitting a special child, I noticed he would often rub
                his hands together again and again. Over time, this caused scars
                on his skin.
              </p>
              <p>
                In therapy sessions, the therapist would gently guide him to do
                something else with his hands. One day, at home, I gave him a
                small piece of clay.
              </p>
              <p>
                He didn't stop moving his hands, but he started squeezing and
                shaping the clay instead. The movement stayed the same, but it
                became safer. The rubbing reduced. Slowly, his marks started to
                lighten.
              </p>
              <p>
                What resonated with me was how simple the solution was.
              </p>
              <p>
                It wasn't about stopping the behavior. It was about guiding it
                in the right way. At home, parents don't always know when to
                step in, what to offer instead, or how to track if things are
                improving.
              </p>
              <p>
                That's when I realized the real gap in support. And that's what
                led me to build SpectrAble.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-small font-semibold text-ink">Trisha P.</p>
              <p className="text-small text-ink-muted">Founder, SpectrAble</p>
              <p className="text-small text-ink-muted">Kokum Assist LLP</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6 lg:pt-36">
            {/* Mission */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
              <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
                Mission
              </p>
              <p className="text-small text-ink-muted leading-relaxed">
                Comprehensive, personalized care for children with ASD that
                extends far beyond the therapy session. Built to close the gap
                between clinic and home.
              </p>
            </div>

            {/* Recognition */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
              <p className="text-label font-semibold uppercase tracking-widest text-primary mb-4">
                Recognition
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "1st Prize, Startup Pitch — UW Information School",
                  "Best Marketing Strategy — UW SEBA",
                  "Google Cloud for Startups program member",
                  "Research published in Springer (ICORD 2025)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cta mt-1.5 shrink-0" />
                    <span className="text-small text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team placeholder */}
            <div className="bg-surface rounded-2xl border-2 border-dashed border-border p-6 text-center">
              <p className="text-small text-ink-muted">
                Team bios coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
