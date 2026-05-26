# SpectrAble — Project Context for Claude

## What this is
A marketing and information website for SpectrAble, a digital platform that supports at-home care for children with Autism Spectrum Disorder. The site connects caregivers, therapists, and clinic administrators around shared behavioral data.

## Tech stack
- Next.js 14 App Router (RSC by default; "use client" only when needed)
- TypeScript
- Tailwind CSS v3 with custom design tokens (see tailwind.config.ts)
- Framer Motion for all animations
- DM Serif Display (headings) + DM Sans (body) + JetBrains Mono (KPI numbers) via next/font/google
- Radix UI primitives (accordion, dialog, tabs, slot)
- lucide-react for icons

## Project structure
- `app/` — Next.js App Router pages and layout
- `components/layout/` — Nav, Footer (global shells)
- `components/sections/` — One file per homepage section (Hero, TrustBar, etc.)
- `components/ui/` — Reusable primitives (Button, Card, Badge, etc.)
- `lib/utils.ts` — cn() helper
- `docs/` — Design brief and content extract. Read before writing copy or styling.

## Design system
Full spec at `docs/design-brief.md`. Key rules:
- Background: #F7F4F0 (warm off-white). Never pure white or pure black.
- Primary brand: #7A1E2E (maroon). CTA/action: #C8730A (amber).
- No purple, indigo, or lavender anywhere.
- Fonts: font-serif (DM Serif Display) for headings, font-sans (DM Sans) for body, font-mono (JetBrains Mono) for KPI numerals.
- Persona accents: caregiver (#C2570A), therapist (#2D7A5F), admin (#3B5C8A).
- Shadows: always warm-tinted. shadow-card for standard cards.

## Animation rules (Framer Motion)
- Scroll reveal: fade up 24px, 0.6s ease-out, once:true always.
- Stagger children: 0.1s per element.
- Max translate: 30px. No spring bouncing past final position.
- No infinite loops. No magnetic cursor effects.
- All scroll-triggered via useInView({ triggerOnce: true, threshold: 0.15 }).

## Copy rules
- No em dashes anywhere in user-facing text.
- No "revolutionizing," "cutting-edge," "empowering," "seamless," "game-changing," "next-gen."
- Write for a tired parent, not a conference audience.
- Specific and honest over vague and inspirational.
- Headlines under 10 words. Sentence case only.

## Brand
- Contact: admin@spectrablecare.com
- Legal: Spectrable Inc., a Delaware C-Corporation
- Trust signals: MVP Tested at ABA Clinics, HIPAA-Compliant, ICORD 2025, Therapist-Approved, 1st Prize UW Startup Pitch

## Build order (current progress)
Completed:
- [x] Design brief (docs/design-brief.md)
- [x] Content extract (docs/content-extract.md)
- [x] Project scaffold + Tailwind tokens
- [x] Nav shell
- [x] Footer shell

Next:
- [ ] Hero section
- [ ] Trust bar
- [ ] Problem statement section
- [ ] Persona cards
- [ ] KPI / social proof section
- [ ] How It Works flow
- [ ] Features bento grid
- [ ] Product screenshot placeholder
- [ ] Founder pull-quote
- [ ] CTA banner
- [ ] Homepage assembly + scroll animations
- [ ] Solutions page shell
- [ ] Pricing page
- [ ] About/Team page
- [ ] How It Works page
- [ ] Contact page
- [ ] Data Deletion page (legal requirement)
