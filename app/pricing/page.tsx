import Link from "next/link";

const TIERS = [
  {
    name: "Individual",
    desc: "For one caregiver and one therapist working together on a single child's care.",
    cta: "Request early access",
    href: "/contact#early-access",
    features: [
      "Daily behavior logging (text, audio, video)",
      "AI activity suggestions",
      "Therapist feedback loop",
      "SOS alert",
      "Smart goal tracker",
      "Progress reports",
    ],
    highlight: false,
  },
  {
    name: "Clinic",
    desc: "For ABA centres and therapy clinics managing multiple therapists and families.",
    cta: "Request early access",
    href: "/contact#early-access",
    features: [
      "Everything in Individual",
      "Centralized clinic dashboard",
      "Therapist roster management",
      "Role-based access controls",
      "Admin analytics panel",
      "Downloadable compliance reports",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "For school systems, hospital networks, and regional ABA providers.",
    cta: "Book a call",
    href: "/contact",
    features: [
      "Everything in Clinic",
      "Custom onboarding",
      "Dedicated support",
      "White-label option",
      "API access",
      "SLA agreement",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="mb-4">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Pricing
          </p>
          <h1 className="font-serif text-display text-ink max-w-xl mb-6">
            Transparent pricing. Contact us to start.
          </h1>
          <p className="text-body-lg text-ink-muted max-w-prose-tight">
            We're in early access. Pilot partners work with us directly to find
            the right fit before any commitment.
          </p>
        </div>

        {/* All plans include */}
        <div className="my-10 px-6 py-4 rounded-2xl bg-surface border border-border inline-flex flex-wrap gap-x-8 gap-y-2">
          <p className="text-small font-semibold text-ink w-full mb-1">All plans include:</p>
          {["End-to-end encryption", "HIPAA compliance", "Multi-device access", "Therapist-reviewed AI"].map((item) => (
            <span key={item} className="text-small text-ink-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-therapist inline-block" />
              {item}
            </span>
          ))}
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                tier.highlight
                  ? "bg-dark border-dark shadow-card-hover"
                  : "bg-surface border-border shadow-card"
              }`}
            >
              <div>
                <p className={`text-label font-semibold uppercase tracking-widest mb-2 ${tier.highlight ? "text-cta" : "text-primary"}`}>
                  {tier.name}
                </p>
                <p className={`text-small leading-relaxed ${tier.highlight ? "text-ink-inverse/60" : "text-ink-muted"}`}>
                  {tier.desc}
                </p>
              </div>

              <div className={`text-h3 font-serif ${tier.highlight ? "text-ink-inverse" : "text-ink"}`}>
                Contact for pricing
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${tier.highlight ? "bg-cta" : "bg-therapist"}`} />
                    <span className={`text-small ${tier.highlight ? "text-ink-inverse/70" : "text-ink-muted"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-small font-semibold transition-colors duration-200 ${
                  tier.highlight
                    ? "bg-cta text-white hover:bg-cta-hover"
                    : "border border-border text-ink hover:border-primary hover:text-primary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise quote */}
        <div className="mt-12 p-8 rounded-2xl bg-surface border border-border">
          <p className="text-small text-ink-muted italic leading-relaxed max-w-2xl">
            "The gap between clinical intervention and daily-life support is exactly where outcomes are won or lost.
            SpectrAble is building in the right place."
          </p>
          <p className="text-small font-semibold text-ink mt-4">Managing Director, Hampton Roads ABA</p>
        </div>
      </div>
    </main>
  );
}
