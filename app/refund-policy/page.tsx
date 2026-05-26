import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding max-w-3xl">

        <div className="mb-10">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">Legal</p>
          <h1 className="font-serif text-display text-ink mb-2">Cancellation &amp; Refund Policy</h1>
          <p className="text-small text-ink-muted">Effective Date: 09.09.2025</p>
        </div>

        <p className="text-small text-ink-muted leading-relaxed mb-8">
          SpectrAble, operated under Spectrable Inc., provides a subscription-based digital platform for
          caregivers, therapists, and clinics. This policy governs cancellations and refunds for payments
          made through our platform.
        </p>

        <div className="flex flex-col gap-8 text-small text-ink-muted leading-relaxed">

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">1. Cancellation of Subscription</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Users (caregivers) may cancel their subscription at any time through account settings within the SpectrAble app or by contacting support at admin@spectrablecare.com.",
                "Cancellations stop all future auto-renewals.",
                "Users will continue to have access to the platform until the end of the current billing cycle.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">2. Refunds</h2>
            <p className="mb-3">All subscription payments are non-refundable once successfully charged.</p>
            <p className="mb-3 font-medium text-ink">Exceptions:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Duplicate transactions due to technical error.",
                "Erroneous or unauthorized charge confirmed after investigation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">In such cases, refunds will be initiated back to the original payment method.</p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">3. Refund Timeline</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Approved refunds will be processed within 7-10 business days.",
                "Timelines may vary depending on the user's bank or payment provider.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">4. No Pro-Rata Refunds</h2>
            <p>
              Mid-cycle cancellation does not entitle users to a pro-rata refund for unused days.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">5. Contact</h2>
            <p className="mb-3">For cancellations or refund-related queries:</p>
            <div className="flex flex-col gap-2">
              <p>
                Email:{" "}
                <a href="mailto:admin@spectrablecare.com" className="text-primary hover:text-primary-hover transition-colors">
                  admin@spectrablecare.com
                </a>
              </p>
              <p>Phone: +91-XXXXXXXXXX</p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6">
          <Link href="/privacy" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link href="/shipping-policy" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Shipping Policy
          </Link>
        </div>

      </div>
    </main>
  );
}
