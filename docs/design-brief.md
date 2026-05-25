# SpectrAble — Design Brief v1.0
## Product register: Brand (marketing/landing site)

---

## 1. Color System

All colors use OKLCH where possible in Tailwind v4. Hex values given for reference.

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F7F4F0` | Page background. Warm off-white, not paper-white. |
| `--color-surface` | `#FFFFFF` | Card/panel surfaces |
| `--color-border` | `#E8E3DC` | Dividers, card outlines |
| `--color-primary` | `#7A1E2E` | Brand maroon. Logo anchor. Headlines on dark BG, key labels. |
| `--color-primary-hover` | `#5E1622` | Maroon darkened ~15% for hover states |
| `--color-cta` | `#C8730A` | Amber action. Primary button fill. Warm, never neon. |
| `--color-cta-hover` | `#A65E08` | CTA darkened for hover |
| `--color-text-primary` | `#1A1410` | Near-black. Body copy, headings on light BG. Off-black with warm undertone. |
| `--color-text-muted` | `#7A6F65` | Captions, labels, secondary copy |
| `--color-text-inverse` | `#F7F4F0` | Text on dark sections |
| `--color-dark-bg` | `#1C1410` | Dark section background. Deep warm charcoal, not `#000`. |
| `--color-dark-surface` | `#261C17` | Slightly lighter for cards on dark BG |

### Persona Accent System

| Persona | Token | Hex | Rationale |
|---|---|---|---|
| Caregiver | `--color-caregiver` | `#C2570A` | Warm burnt orange. Familial, approachable. |
| Caregiver light | `--color-caregiver-bg` | `#FDF0E6` | Tinted card background |
| Therapist | `--color-therapist` | `#2D7A5F` | Clinical sage. Calm, professional, trustworthy. |
| Therapist light | `--color-therapist-bg` | `#EAF5F0` | Tinted card background |
| Clinic Admin | `--color-admin` | `#3B5C8A` | Slate blue. Institutional, reliable. |
| Clinic Admin light | `--color-admin-bg` | `#EBF0F8` | Tinted card background |

### Rule: No Purple
Any violet, indigo, or lavender is banned. They read as generic SaaS AI. The maroon is the brand color; amber is the action color. No exceptions.

### Rule: No Pure Black / White
Use `--color-text-primary` (`#1A1410`) and `--color-bg` (`#F7F4F0`) as the poles. Pure `#000000` and `#FFFFFF` are banned.

---

## 2. Typography

### Font Stack
- **Display / Headings:** DM Serif Display — warm, editorial, humanist. Conveys care and credibility without clinical coldness.
- **Body / UI:** DM Sans — clean, highly legible at small sizes. Pairs naturally with DM Serif Display.
- **Monospace (numbers in KPI blocks):** JetBrains Mono — clean, precise.

### Size Scale

| Role | Size | Line Height | Weight | Font |
|---|---|---|---|---|
| Display (hero H1) | 56px / 3.5rem | 1.05 | 400 (DM Serif is naturally bold at regular) | DM Serif Display |
| H2 (section title) | 40px / 2.5rem | 1.15 | 400 | DM Serif Display |
| H3 (card title) | 28px / 1.75rem | 1.25 | 400 | DM Serif Display |
| H4 (label heading) | 20px / 1.25rem | 1.35 | 600 | DM Sans |
| Body large | 18px / 1.125rem | 1.65 | 400 | DM Sans |
| Body | 16px / 1rem | 1.6 | 400 | DM Sans |
| Small / caption | 14px / 0.875rem | 1.5 | 400 | DM Sans |
| Label / badge | 12px / 0.75rem | 1.4 | 600 | DM Sans |
| KPI numeral | 56px / 3.5rem | 1.0 | 700 | JetBrains Mono |

### Weight Rules
- DM Serif Display: only weight 400 (its regular weight is visually bold). Never apply `font-bold` to it.
- DM Sans: 400 for body, 500 for nav links and subheadings, 600 for labels and button text, never heavier.
- Never use italic except for pull-quotes and citations.

### Tracking Rules
- Display / H2: `tracking-tight` (-0.02em)
- H3 and below: default tracking
- All-caps labels: `tracking-widest` (0.1em) with `font-size: 11px`

---

## 3. Spacing Scale

Using Tailwind's default scale with these semantic labels:

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon gaps, tight inline spacing |
| `space-2` | 8px | Compact inner padding |
| `space-3` | 12px | Badge padding, small gaps |
| `space-4` | 16px | Default gap in flex/grid |
| `space-6` | 24px | Card internal padding |
| `space-8` | 32px | Section internal padding |
| `space-12` | 48px | Component separation |
| `space-16` | 64px | Section padding top/bottom (mobile) |
| `space-24` | 96px | Section padding top/bottom (desktop) |
| `space-32` | 128px | Hero vertical breathing room |

**Max page width:** `max-w-7xl` (1280px) with `mx-auto px-6 md:px-8`

**Grid gutters:** `gap-6` standard, `gap-8` for section-level grids.

---

## 4. Animation Spec

All animations via Framer Motion. No GSAP (not needed for this product type).

### Core Principles
- Calm, not bouncy. This product serves families in difficult situations.
- Translate never more than 30px in any direction.
- Duration range: 0.4s to 0.7s. Nothing faster on scroll entry.
- `once: true` on all scroll-triggered reveals — they don't re-animate on scroll-up.

### Scroll Reveal (standard section entrance)
```js
// variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}
// trigger
const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
```

### Stagger Children (lists, feature rows, persona cards)
```js
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}
```

### Card Enter (all card components)
```js
const cardEnter = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}
```

### Hover States
- Cards: `whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(26,20,16,0.08)" }}` with `transition={{ type: "spring", stiffness: 300, damping: 28 }}`
- Buttons: `whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}`

### Nav (scroll-triggered background)
- On scroll past 60px: transition nav bg from `transparent` to `rgba(247, 244, 240, 0.95)` with `backdrop-blur-md` and a 1px bottom border.
- Duration: 0.3s ease.

### Never
- No Magnetic cursor effects (not appropriate for a healthcare product)
- No page-level parallax
- No infinite loops on any element (this is not a SaaS showcase, it serves caregivers)
- No spring bouncing past final position

---

## 5. Component System

### Button Variants

**Primary (CTA):** Amber fill `bg-[--color-cta]` + white text + `rounded-full` + `px-6 py-3` + `text-sm font-semibold`
Hover: darken bg. Focus: 2px amber ring offset 2px. Active: scale 0.98.

**Secondary:** Transparent + maroon border `border-[--color-primary]` + maroon text. Same sizing as Primary.
Hover: `bg-[--color-primary]` + white text.

**Ghost:** No border. Maroon text. Underline on hover. Used for inline text CTAs.

**Dark (on dark BG):** White outline + white text. Same sizing as Primary.

### Card Variants

**Standard card:** `bg-white rounded-2xl border border-[--color-border] p-8 shadow-[0_4px_24px_rgba(26,20,16,0.04)]`

**Persona card:** Standard card + top accent border `border-t-4` in persona color. Badge pill at top left.

**KPI card:** `bg-white rounded-2xl border border-[--color-border] p-8` with KPI numeral in JetBrains Mono and a warm label below.

**Bento large (featured feature):** `col-span-2 row-span-2` on desktop. Slightly deeper shadow.

**Bento alert (SOS feature):** Uses a soft red accent background `#FEF2F2` with red border to signal urgency without alarming.

**Citation card (research paper):** `bg-white rounded-xl border border-[--color-border] p-6`. Left accent bar in maroon (4px). Title in DM Serif. Journal name in small caps. Springer link as ghost button.

### Badge / Pill

`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase`
Filled variant per persona color. Outline variant for trust/compliance labels.

### Navigation States
- Default link: `text-[--color-text-primary] font-medium text-sm`
- Hover: underline via `after:` pseudo-element that grows from left, in maroon.
- Active/current: maroon text + maroon underline.
- CTA button: Primary variant at reduced padding (`px-5 py-2.5`).

### Accordion (FAQ)

- Border-bottom only. No card wrapper.
- Trigger: full-width button, DM Sans medium, left-aligned, `+` / `−` icon right-aligned.
- Content: slides down via Framer Motion `animate={{ height }}`. Body text in muted color.
- No shadow or elevation on open state.

### Tabs (Solutions persona switcher)

- Pill-style tab group: `flex gap-2 p-1 bg-[--color-bg] rounded-full border border-[--color-border]`
- Active tab: `bg-white rounded-full shadow-sm text-[--color-text-primary]`
- Tab text: DM Sans medium 14px.
- Content transition: crossfade via `AnimatePresence` mode="wait". Duration 0.25s.

---

## 6. Voice and Tone

### Who We're Writing For
A parent who got home at 7pm after taking their child to a therapy session. They're tired. They love their child fiercely. They are not a medical professional. They have heard a lot of vague promises. They need to understand, quickly, whether this is real and whether it will help.

### Rules

**Write specific, not inspiring.**
Not: "A platform that empowers families to unlock potential."
Yes: "Log your child's daily behaviors in 90 seconds. Your therapist sees it before the next session."

**Write calm, not excited.**
No exclamation points in headlines. No urgency language ("Don't miss out," "Transform today").
If a sentence would work in an ad, rewrite it.

**Write honest, not clinical.**
Avoid jargon: "multimodal data aggregation" becomes "track behavior through notes, photos, and short videos."
Avoid overclaiming: "AI that understands autism" becomes "AI that spots patterns your therapist can act on."

**Banned words and phrases:**
- Revolutionizing, revolutionary
- Cutting-edge, state-of-the-art
- Game-changing, innovative
- Empower / empowering
- Seamless, frictionless
- Next-gen, next-level
- Unlock potential
- Transform / transformative
- Leverage (as a verb)
- Stakeholders (in user-facing copy)
- AI-powered (in headlines — show what the AI does instead)
- Holistic (overused in healthcare copy)
- Robust

**Em dashes are banned.** Use a period, a colon, or restructure the sentence.

**Sentence structure:**
- Prefer short sentences for high-stakes claims.
- One idea per sentence in the hero.
- Body copy max 2–3 sentences per paragraph.
- Never open a section with "We believe" or "Our mission is."

**Headlines:**
- DM Serif Display naturally adds gravitas. Headlines do not need to shout.
- Under 10 words for hero headlines.
- Sentence case only. Never ALL CAPS headlines.
- Specific over broad: "Behavior logs your therapist can actually read" beats "Supporting your child's journey."

---

## Anti-Slop Checklist (taste-skill enforcement)

Before any copy or component ships:
- [ ] No centered hero layout (split-screen or left-aligned only)
- [ ] No 3-equal-column card grid as the primary features presentation
- [ ] No placeholder illustration-style images (product UI mockup only)
- [ ] No generic purple/blue gradient anywhere
- [ ] No Inter font (DM Sans and DM Serif Display only)
- [ ] No emoji in any UI element
- [ ] No lorem ipsum in any committed file
- [ ] All amber values have saturation < 80%
- [ ] All shadows are tinted to background hue (warm, not cool gray)
- [ ] Card borders are `border-[--color-border]` not `border-gray-200`
- [ ] Every CTA has a clear, specific label (not "Learn More" or "Click Here")
- [ ] Every section has been read aloud — does it sound like a person wrote it?
