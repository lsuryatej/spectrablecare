import { ExternalLink } from "lucide-react";

const TRUST_ITEMS = [
  {
    label: "Research accepted at ICORD + CHI",
    sub: "Springer, 2025",
    href: "https://link.springer.com/chapter/10.1007/978-981-96-5499-4_10",
    external: true,
  },
  {
    label: "MVP Tested at ABA Clinics",
    sub: "Beta validated",
    href: null,
  },
  {
    label: "HIPAA-Compliant",
    sub: "End-to-end encrypted",
    href: null,
  },
  {
    label: "Therapist-Approved",
    sub: "Validated with ABA clinicians",
    href: null,
  },
  {
    label: "1st Prize, UW Startup Pitch",
    sub: "Information School, 2024",
    href: null,
  },
];

function TrustItem({ item }: { item: (typeof TRUST_ITEMS)[number] }) {
  const content = (
    <>
      <span className="flex items-center gap-1.5 text-small font-semibold text-ink whitespace-nowrap">
        {item.label}
        {item.external && <ExternalLink size={10} className="text-ink-muted shrink-0" />}
      </span>
      <span className="text-label text-ink-muted whitespace-nowrap">{item.sub}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 group hover:opacity-70 transition-opacity duration-200 px-10"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center gap-0.5 px-10">
      {content}
    </div>
  );
}

export function TrustBar() {
  // Items are duplicated so the marquee loops seamlessly
  const allItems = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <section className="border-y border-border bg-surface overflow-hidden py-5">
      <div
        className="flex animate-marquee"
        style={{ width: "max-content" }}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <TrustItem item={item} />
            {/* Separator dot between items */}
            <span className="w-1 h-1 rounded-full bg-border shrink-0" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
