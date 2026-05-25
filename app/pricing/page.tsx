import Link from "next/link";
import { Check, X, Minus } from "lucide-react";

const FEATURES: {
  label: string;
  basic: true | false | "Manual" | "Automated";
  pro: true | false | "Manual" | "Automated";
}[] = [
  {
    label: "Customized profile (sensory scales, diagnosis routines, activity preferences)",
    basic: true,
    pro: true,
  },
  {
    label: "Easy communication with therapist, routine check-ins",
    basic: true,
    pro: true,
  },
  {
    label: "Activity logging (notes, voice logs)",
    basic: true,
    pro: true,
  },
  {
    label: "Behavioral tracking and analysis of observations",
    basic: "Manual",
    pro: "Automated",
  },
  {
    label: "Weekly summary of therapy plan and reminders",
    basic: true,
    pro: true,
  },
  {
    label: "HIPAA-compliant, privacy secure, verified by professionals",
    basic: true,
    pro: true,
  },
  {
    label: "Personalized activity, music, and spatial suggestions",
    basic: false,
    pro: true,
  },
  {
    label: "Integration with smart devices and wearables",
    basic: false,
    pro: true,
  },
  {
    label: "AI-assisted SOS support",
    basic: false,
    pro: true,
  },
];

function FeatureCell({ value }: { value: true | false | "Manual" | "Automated" }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check size={16} className="text-therapist" strokeWidth={2.5} />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X size={14} className="text-ink-muted/40" strokeWidth={2} />
      </div>
    );
  }
  return (
    <p className="text-center text-small font-medium text-ink">{value}</p>
  );
}

export default function PricingPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding">

        {/* Header */}
        <div className="mb-14">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Pricing
          </p>
          <h1 className="font-serif text-display text-ink max-w-xl mb-4">
            Simple, honest pricing.
          </h1>
          <p className="text-body-lg text-ink-muted max-w-prose-tight">
            Both plans are built for families and therapists working together.
            Start with the data. Add the full care layer when you need it.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl">
          {/* Basic */}
          <div className="bg-surface rounded-2xl border border-border shadow-card p-8 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-caregiver-bg text-caregiver text-label font-semibold uppercase tracking-widest mb-4">
                Basic
              </span>
              <h2 className="font-serif text-h2 text-ink mb-1">
                $25
                <span className="text-h4 font-sans font-normal text-ink-muted">/month</span>
              </h2>
              <p className="text-small font-semibold text-ink mt-2">
                ABA Data Collection Plan
              </p>
              <p className="text-small text-ink-muted mt-1 leading-relaxed">
                Track behaviors, log daily routines, and stay connected with
                your therapist. All data, manually reviewed.
              </p>
            </div>
            <Link
              href="/contact#early-access"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-small font-semibold text-ink hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Get started
            </Link>
          </div>

          {/* Pro */}
          <div className="bg-dark rounded-2xl border border-dark shadow-card-hover p-8 flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cta/15 text-cta text-label font-semibold uppercase tracking-widest mb-4">
                Pro
              </span>
              <h2 className="font-serif text-h2 text-ink-inverse mb-1">
                $75
                <span className="text-h4 font-sans font-normal text-ink-inverse/50">/month</span>
              </h2>
              <p className="text-small font-semibold text-ink-inverse mt-2">
                ABA Home Care All-in-One Plan
              </p>
              <p className="text-small text-ink-inverse/60 mt-1 leading-relaxed">
                Everything in Basic, plus automated analysis, AI-assisted SOS
                support, and smart device integration.
              </p>
            </div>
            <Link
              href="/contact#early-access"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-cta text-white text-small font-semibold hover:bg-cta-hover transition-colors duration-200"
            >
              Get started
            </Link>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-border overflow-hidden shadow-card mb-16">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_120px_120px] bg-[#F0EBE5] border-b border-border">
            <div className="px-6 py-4">
              <p className="text-small font-semibold text-ink">Feature</p>
            </div>
            <div className="px-4 py-4 border-l border-border text-center">
              <p className="text-small font-semibold text-ink">Basic</p>
              <p className="text-label text-ink-muted">$25/mo</p>
            </div>
            <div className="px-4 py-4 border-l border-border text-center bg-dark/[0.03]">
              <p className="text-small font-semibold text-ink">Pro</p>
              <p className="text-label text-ink-muted">$75/mo</p>
            </div>
          </div>

          {/* Rows */}
          {FEATURES.map((feature, i) => (
            <div
              key={feature.label}
              className={`grid grid-cols-[1fr_120px_120px] border-b border-border last:border-b-0 ${
                i % 2 === 0 ? "bg-surface" : "bg-bg"
              }`}
            >
              <div className="px-6 py-4 flex items-center">
                <p className="text-small text-ink leading-relaxed">{feature.label}</p>
              </div>
              <div className="px-4 py-4 border-l border-border flex items-center justify-center">
                <FeatureCell value={feature.basic} />
              </div>
              <div className="px-4 py-4 border-l border-border flex items-center justify-center bg-dark/[0.02]">
                <FeatureCell value={feature.pro} />
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="rounded-2xl bg-surface border border-border shadow-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-admin-bg text-admin text-label font-semibold uppercase tracking-widest">
              Enterprise
            </span>
            <h2 className="font-serif text-h3 text-ink">
              Running a clinic or school network?
            </h2>
            <p className="text-small text-ink-muted leading-relaxed">
              Centralized dashboards, therapist roster management, compliance
              reporting, and role-based access across your entire team. Pricing
              based on clinic size.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1">
              {["Custom onboarding", "Dedicated support", "API access", "SLA agreement"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-small text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-admin shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-small font-semibold hover:bg-primary-hover transition-colors duration-200 whitespace-nowrap"
            >
              Book a call
            </Link>
            <p className="text-label text-ink-muted text-center">
              trisha.p@spectrablecare.com
            </p>
          </div>
        </div>

        {/* All plans note */}
        <div className="mt-8 px-6 py-4 rounded-xl bg-surface border border-border flex flex-wrap gap-x-8 gap-y-2">
          <p className="text-small font-semibold text-ink w-full">All plans include:</p>
          {["End-to-end encryption", "HIPAA compliance", "Multi-device access", "Therapist-reviewed AI"].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-small text-ink-muted">
              <Check size={12} className="text-therapist" strokeWidth={2.5} />
              {item}
            </span>
          ))}
        </div>

      </div>
    </main>
  );
}
