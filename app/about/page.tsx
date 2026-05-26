import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const TEAM = [
  {
    name: "Akshay Chintala",
    title: "Co-founder & CTO",
    photo: "/team/akshay.png",
    bio: "Data scientist and ML engineer. BS Mathematics & Computing, IIT Guwahati. Leads the AI infrastructure and behavioral analytics systems that make SpectrAble's predictive care features possible.",
  },
  {
    name: "Priti Pawar",
    title: "Co-founder & Head of Partnerships",
    photo: "/team/priti.png",
    bio: "Brings deep experience supporting families navigating ASD care. Guides clinical validity, caregiver onboarding, and the real-world care workflows SpectrAble is built around.",
  },
  {
    name: "Trisha Pawar",
    title: "Co-founder & CEO",
    photo: "/team/trisha.png",
    bio: "MS Human-Computer Interaction, University of Washington. BDes, IIT Guwahati. Published researcher at ICORD 2025. Built SpectrAble after seeing the gap between what therapists know and what families can act on at home.",
    featured: true,
  },
  {
    name: "Sathwika Gopala",
    title: "Front-end Engineer",
    photo: "/team/sathwika.png",
    bio: "BE Electrical Engineering, NIT Warangal. Builds the interfaces caregivers and therapists use every day. Focused on accessibility, clarity, and performance across every device.",
  },
  {
    name: "Khushi Agarwal",
    title: "Dev-Ops Lead",
    photo: "/team/khushi.png",
    bio: "BE Computer Engineering. Manages cloud infrastructure, deployment pipelines, and the reliability of SpectrAble's HIPAA-compliant platform.",
  },
];

const MENTORS = [
  {
    name: "Dr. Mike Teodorescu",
    role: "Mentor",
    roleColor: "text-therapist bg-therapist-bg",
    photo: "/team/mentor-mike.png",
    credentials: [
      "Assistant Professor, University of Washington",
      "MIT Technology Review 35 Innovators Under 35 Europe",
      "Co-Founder @ SurgiBox (TIME Best Inventions of 2023)",
      "Harvard Business School, Harvard Computer Science degrees",
    ],
  },
  {
    name: "April Vian",
    role: "Professional Mentor",
    roleColor: "text-admin bg-admin-bg",
    photo: "/team/mentor-april.png",
    credentials: [
      "CEO, Eastside ABA Therapy Centre",
      "Founder, Bridging the Gap Social Benefit Corporation",
      "Practicing Behavior Analyst for 15+ years",
      "Specialized care for children with Autism, ADHD, and Neurodivergencies",
    ],
  },
  {
    name: "Dr. Shiwangee Purandare",
    role: "Mentor",
    roleColor: "text-therapist bg-therapist-bg",
    photo: "/team/mentor-shiwangee.png",
    credentials: [
      "Director, SRCC Hospital Mumbai",
      "Founder, Hariti Global Foundation",
      "NeuroPhysiotherapist for 19 years",
      "Specialized care and education for children with Autism and ADHD",
    ],
  },
  {
    name: "Manva Bhagwat",
    role: "Advisor",
    roleColor: "text-caregiver bg-caregiver-bg",
    photo: "/team/mentor-manva.png",
    credentials: [
      "Founder, Manasvi Mental Health Services",
      "Autism Behaviour Analyst & Clinical Psychologist",
      "8+ years in Clinical Psychology and Special School programs",
    ],
  },
];

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div
      className={`bg-surface rounded-2xl border shadow-card p-6 flex flex-col items-center text-center gap-4 ${
        member.featured ? "border-primary/30 shadow-card-hover" : "border-border"
      }`}
    >
      <div
        className={`relative rounded-full overflow-hidden shrink-0 ${
          member.featured ? "w-28 h-28" : "w-24 h-24"
        }`}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 96px, 112px"
        />
      </div>
      <div>
        <p
          className={`font-semibold text-ink leading-tight ${
            member.featured ? "text-body-lg" : "text-small"
          }`}
        >
          {member.name}
        </p>
        <p
          className={`mt-0.5 font-medium ${
            member.featured ? "text-small text-primary" : "text-label text-ink-muted"
          }`}
        >
          {member.title}
        </p>
      </div>
      <p className="text-small text-ink-muted leading-relaxed">{member.bio}</p>
    </div>
  );
}

function MentorCard({ mentor }: { mentor: (typeof MENTORS)[number] }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      {/* Photo */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-border shadow-card">
        <Image
          src={mentor.photo}
          alt={mentor.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      {/* Name + role */}
      <div>
        <p className="text-small font-semibold text-ink leading-tight">
          {mentor.name}
        </p>
        <span
          className={`inline-flex items-center mt-1.5 px-2.5 py-0.5 rounded-full text-label font-semibold uppercase tracking-widest ${mentor.roleColor}`}
        >
          {mentor.role}
        </span>
      </div>

      {/* Credentials */}
      <ul className="flex flex-col gap-1.5 text-left w-full">
        {mentor.credentials.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-ink-muted mt-1 shrink-0 text-label leading-none">·</span>
            <span className="text-small text-ink-muted leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  const [akshay, priti, trisha, sathwika, khushi] = TEAM;

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

        {/* Founder story + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start mb-20">
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
                He didn&apos;t stop moving his hands, but he started squeezing and
                shaping the clay instead. The movement stayed the same, but it
                became safer. The rubbing reduced. Slowly, his marks started to
                lighten.
              </p>
              <p>What resonated with me was how simple the solution was.</p>
              <p>
                It wasn&apos;t about stopping the behavior. It was about guiding it
                in the right way. At home, parents don&apos;t always know when to
                step in, what to offer instead, or how to track if things are
                improving.
              </p>
              <p>
                That&apos;s when I realized the real gap in support. And that&apos;s what
                led me to build SpectrAble.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-small font-semibold text-ink">Trisha Pawar</p>
              <p className="text-small text-ink-muted">CEO & Co-founder, SpectrAble</p>
              <p className="text-small text-ink-muted">Spectrable Inc.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:pt-36">
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

            <div className="bg-surface rounded-2xl border border-border p-6 shadow-card">
              <p className="text-label font-semibold uppercase tracking-widest text-primary mb-4">
                Recognition
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "1st Prize, Startup Pitch — UW Information School",
                  "Best Marketing Strategy — UW SEBA",
                  "MVP tested at ABA clinics across the US",
                  "Research published in Springer (ICORD 2025)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cta mt-1.5 shrink-0" />
                    <span className="text-small text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-20">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            The team
          </p>
          <h2 className="font-serif text-h2 text-ink mb-10">
            The people building SpectrAble.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <TeamCard member={akshay} />
            <TeamCard member={priti} />
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-full sm:w-1/2">
              <TeamCard member={trisha} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TeamCard member={sathwika} />
            <TeamCard member={khushi} />
          </div>
        </div>

        {/* Mentors section */}
        <div className="mb-20">
          <p className="text-label font-semibold uppercase tracking-widest text-primary mb-3">
            Our mentors
          </p>
          <h2 className="font-serif text-h2 text-ink mb-3">
            Guided by people who have done it.
          </h2>
          <p className="text-body text-ink-muted mb-10 max-w-prose-tight">
            Clinicians, researchers, and founders who have spent careers working
            at the intersection of autism care and technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {MENTORS.map((mentor) => (
              <MentorCard key={mentor.name} mentor={mentor} />
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div className="rounded-2xl bg-surface border border-border shadow-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-small font-semibold text-ink mb-1">
              Want to work with us?
            </p>
            <p className="text-small text-ink-muted">
              We&apos;re a small team building something that matters. Reach out if
              you&apos;re interested in joining or partnering.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-small font-semibold hover:bg-primary-hover transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
