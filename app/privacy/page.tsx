import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="pt-24 min-h-[100dvh]">
      <div className="container-width section-padding max-w-3xl">

        <div className="mb-10">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">Legal</p>
          <h1 className="font-serif text-display text-ink mb-2">Privacy Policy</h1>
          <p className="text-small text-ink-muted">Last modified: 09.09.2025</p>
        </div>

        <div className="flex flex-col gap-8 text-small text-ink-muted leading-relaxed">

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Introduction</h2>
            <p>
              Kokum Assist LLP (&ldquo;Company&rdquo; or &ldquo;We&rdquo;), with a registered address at 601 Gopal
              Vishnu CHS Ltd, Mahant Road, Opposite Ruia School, Vile Parle (East), Vile Parle Police Station,
              Mumbai-400057, Maharashtra, India, operates under the brand name Spectrable and provides a distinct
              feature with the Spectrable AI Chatbot for better healthcare management. We respect your privacy and
              are committed to protecting it through our compliance with this policy.
            </p>
            <p className="mt-4">
              This policy describes the types of information we may collect from you or that you may provide when
              you visit the website spectrablecare.com (our &ldquo;Website/App&rdquo;) and our practices for
              collecting, using, maintaining, protecting and disclosing that information. Any reference to the term
              &ldquo;Website&rdquo; shall be deemed to include the mobile application (&ldquo;App&rdquo;), and the
              two shall be read together, unless the context specifically requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Applicability</h2>
            <p className="mb-3">This Privacy Policy applies to:</p>
            <ul className="flex flex-col gap-2 mb-4">
              {[
                "Patients/Users receiving care through the Platform",
                "Caregivers inputting daily observations",
                "Therapists reviewing and customizing home care plans",
                "Any other individual whose data is processed through the Platform",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-3">This policy applies to the information we collect:</p>
            <ul className="flex flex-col gap-2 mb-4">
              {[
                "On this Website",
                "In email, text, and other electronic messages between you and this Website",
                "Through mobile and desktop applications you download from this Website",
                "When you interact with our advertising and applications on third-party websites and services if those applications include links to this policy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              It does not apply to information collected by us offline or through any other means, including on any
              other website operated by Company or any third party, including our affiliates and subsidiaries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Children Under the Age of 18</h2>
            <p>
              Our Website is not intended for children under 18 years of age. No one under age 18 may provide any
              personal information to or on the Website. We do not knowingly collect personal information from
              children under 18. If you are under 18, do not use or provide any information on this Website. If we
              learn we have collected information from a child under 18 without parental consent, we will delete it.
              Contact us at{" "}
              <a href="mailto:admin@spectrablecare.com" className="text-primary hover:text-primary-hover transition-colors">
                admin@spectrablecare.com
              </a>{" "}
              if needed.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Information We Collect About You</h2>
            <p className="mb-3">We collect several types of information from and about users of our Website, including:</p>
            <ul className="flex flex-col gap-2 mb-4">
              {[
                "Personal information like name, address, email, phone, social security number",
                "About your internet connection, device, and usage details",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              We collect this information directly from you, automatically as you navigate through the site/app,
              and from third parties such as business partners.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Information You Provide to Us</h2>
            <p>
              The information you provide may include registration data, caregiver logs, therapist notes, survey
              responses, support requests, feedback, transactions, and User Contributions (posted publicly at your
              own risk).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Automatic Data Collection</h2>
            <p>
              As you navigate our Website, we may use cookies, web beacons, and other tracking technologies to
              collect information about your equipment, browsing actions, and patterns.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Third-Party Use of Tracking Technologies</h2>
            <p>
              Some content or applications, including advertisements, on the Website are served by third parties
              who may collect information about you. We do not control these third-party tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">How We Use Your Information</h2>
            <ul className="flex flex-col gap-2">
              {[
                "To present our Website and its contents",
                "To provide requested products, services, or information",
                "To fulfill obligations and enforce rights from contracts",
                "To notify about changes, interactive features, advertising, and personalization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Disclosure of Your Information</h2>
            <ul className="flex flex-col gap-2">
              {[
                "To subsidiaries, affiliates, contractors, service providers",
                "To buyers/successors in mergers or asset transfers",
                "To comply with laws, courts, and regulators",
                "If disclosure is necessary to protect rights, property, or safety",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Choices About Your Information</h2>
            <p>
              You can control cookies, targeted ads, promotional offers, and third-party disclosures via opt-out
              methods, browser settings, or by emailing{" "}
              <a href="mailto:admin@spectrablecare.com" className="text-primary hover:text-primary-hover transition-colors">
                admin@spectrablecare.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Accessing and Correcting Your Information</h2>
            <p>
              You may review, correct, or delete your personal information via account settings or by emailing{" "}
              <a href="mailto:admin@spectrablecare.com" className="text-primary hover:text-primary-hover transition-colors">
                admin@spectrablecare.com
              </a>
              . Deleting personal data may require account deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Data Security</h2>
            <p>
              We secure data with firewalls, SSL encryption, and restricted access. Transmission over the internet
              is not 100% secure, so we cannot guarantee complete protection.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Changes to Our Privacy Policy</h2>
            <p>
              Updates will be posted on this page with the revised date. Continued use indicates acceptance of
              changes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-h4 text-ink mb-3">Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy, contact us at:{" "}
              <a href="mailto:kokumassist@kokumassist.com" className="text-primary hover:text-primary-hover transition-colors">
                kokumassist@kokumassist.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-6">
          <Link href="/terms" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link href="/refund-policy" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Cancellation &amp; Refunds
          </Link>
          <Link href="/data-deletion" className="text-small font-medium text-primary hover:text-primary-hover transition-colors">
            Data Deletion
          </Link>
        </div>

      </div>
    </main>
  );
}
