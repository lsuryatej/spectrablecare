export default function DataDeletionPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding max-w-3xl">
        <p className="text-label font-semibold uppercase tracking-widest text-primary mb-4">
          Legal
        </p>
        <h1 className="font-serif text-display text-ink mb-4">
          Account & Data Deletion
        </h1>
        <p className="text-small text-ink-muted mb-10">
          Last updated: 11 December 2025
        </p>

        <div className="flex flex-col gap-8 text-body text-ink-muted leading-relaxed">
          <p>
            You can request deletion of your account and personal data for{" "}
            <strong className="text-ink font-semibold">Kokum Therapist</strong>{" "}
            or{" "}
            <strong className="text-ink font-semibold">Kokum Caretaker</strong>{" "}
            at any time. This includes all personal information, app activity,
            and autism-related or health-based data stored in your profile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* How to request */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
              <p className="text-small font-semibold text-ink mb-4">
                How to request account deletion
              </p>
              <p className="text-small text-ink-muted mb-3">
                Send an email request to:
              </p>
              <a
                href="mailto:admin@spectrablecare.com"
                className="text-small font-semibold text-primary block mb-4"
              >
                admin@spectrablecare.com
              </a>
              <p className="text-small text-ink-muted mb-2">
                Include the following in your message:
              </p>
              <ol className="flex flex-col gap-1.5 text-small text-ink-muted list-decimal list-inside">
                <li>The app you use (Kokum Therapist or Kokum Caretaker)</li>
                <li>Your registered email or phone number</li>
                <li>Your name (if applicable)</li>
                <li>A short statement requesting account deletion</li>
              </ol>
              <p className="text-small text-ink-muted mt-4">
                We may send a verification email to confirm ownership of the
                account before proceeding.
              </p>
            </div>

            {/* What gets deleted */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
              <p className="text-small font-semibold text-ink mb-4">
                What data will be deleted
              </p>
              <ul className="flex flex-col gap-2 text-small text-ink-muted">
                {[
                  "Profile details (name, email, phone number)",
                  "Therapy notes, assessments, and autism-related records",
                  "Session logs, progress data, and preferences",
                  "Uploaded files, documents, or attachments",
                  "Any personal identifiers linked to your account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-therapist mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-small font-semibold text-ink mt-5 mb-3">
                Data temporarily retained
              </p>
              <ul className="flex flex-col gap-2 text-small text-ink-muted">
                {[
                  "Payment and transaction records (up to 90 days)",
                  "Security and fraud-prevention logs (as legally required)",
                  "Aggregated, anonymized analytics (cannot identify you)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-muted/30 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
            <p className="text-small font-semibold text-ink mb-4">Timeline</p>
            <ul className="flex flex-col gap-3 text-small text-ink-muted">
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-ink shrink-0">3 days</span>
                <span>We confirm receipt of your request within 3 business days.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-ink shrink-0">7 days</span>
                <span>Your account and data will be fully deleted within 7 business days after verification.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-ink shrink-0">Notice</span>
                <span>If additional retention is legally required, we will inform you by email.</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <a
              href="mailto:admin@spectrablecare.com?subject=Account deletion request"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cta text-white text-small font-semibold hover:bg-cta-hover transition-colors"
            >
              Email to request deletion
            </a>
            <p className="text-small text-ink-muted">
              Developer: Spectrable Inc.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
