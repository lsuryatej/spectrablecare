import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding max-w-3xl">

        <div className="mb-10">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">Legal</p>
          <h1 className="font-serif text-display text-ink mb-2">Shipping &amp; Delivery Policy</h1>
          <p className="text-small text-ink-muted">Effective Date: 09.09.2025</p>
        </div>

        <p className="text-small text-ink-muted leading-relaxed mb-8">
          SpectrAble, operated under Spectrable Inc., is a subscription-based digital service platform.
          We do not ship or deliver any physical products.
        </p>

        <div className="flex flex-col gap-8 text-small text-ink-muted leading-relaxed">

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">1. Digital Service Delivery</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Upon successful payment of subscription fees, users receive instant access to the SpectrAble platform via their registered login credentials.",
                "All features (journaling, AI suggestions, therapist interactions, reports) are delivered digitally through the app.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">2. No Physical Shipping</h2>
            <ul className="flex flex-col gap-2">
              {[
                "As no tangible goods are sold, no shipping, courier, or physical delivery is applicable to our services.",
                "Users should ensure they have a compatible device and stable internet connection to access services.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">3. Service Access Issues</h2>
            <ul className="flex flex-col gap-2">
              {[
                "If users experience access issues after payment, they must contact support immediately.",
                "Technical teams will assist in restoring access or validating subscription activation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">4. Contact</h2>
            <p className="mb-3">For queries regarding access to services:</p>
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
          <Link href="/refund-policy" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Cancellation &amp; Refunds
          </Link>
        </div>

      </div>
    </main>
  );
}
