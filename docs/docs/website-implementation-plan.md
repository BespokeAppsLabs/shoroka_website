# Shoroka Creations Website Implementation Specification

> **Document Type:** Dev-Ready Implementation Specification  
> **Version:** 2.0  
> **Last Updated:** 2026-01-05  
> **Status:** Awaiting Approval

---

## 1. Executive Summary

This specification defines the complete implementation requirements for the Shoroka Creations website. The goal is to transform the existing placeholder content into a production-ready marketing website that captures qualified leads from the mining, construction, and government sectors.

**Core Narrative:** *"Architects of Legacy"* — Building on the foundation of "Sons of the Soil" to engineer certainty for industrial stakeholders.

---

## 2. Information Architecture

### 2.1 Site Structure

```
/ (Home - Single Page Application)
├── #hero          → HeroSection
├── #mission       → MissionSection  
├── #trust         → TrustSection [NEW]
├── #services      → ServicesSection [NEW]
├── #about         → AboutSection [NEW]
├── #contact       → ContactSection [NEW]
└── Footer
```

### 2.2 Navigation Schema

| Nav Item | Target | Priority |
|:---------|:-------|:---------|
| Home | `#hero` | 1 |
| Our Mission | `#mission` | 2 |
| Why Shoroka | `#trust` | 3 |
| Services | `#services` | 4 |
| About Us | `#about` | 5 |
| Contact | `#contact` | 6 |

---

## 3. Component Specifications

### 3.1 HeroSection (MODIFY)

**Status:** Exists — needs content refinement  
**File:** `website/src/components/custom/HeroSection.tsx`

#### Current State
- ✅ Parallax image grid working
- ✅ Logo displayed
- ⚠️ Tagline is generic ("Forging digital legacies...")
- ⚠️ CTAs are placeholder buttons

#### Required Changes

| Element | Current | Target |
|:--------|:--------|:-------|
| H1 | "Shoroka Creations" | **"Architects of Legacy"** |
| Subheading | Generic | **"Born of the soil, driven by the mind. Building on our inheritance to engineer certainty for the giants of tomorrow."** |
| Primary CTA | "EXPLORE OUR FLEET" | **"REQUEST A QUOTE"** → scrolls to `#contact` |
| Secondary CTA | "OUR MISSION" | **"VIEW SERVICES"** → scrolls to `#services` |

#### Acceptance Criteria
- [ ] H1 displays "Architects of Legacy" with "Legacy" in gold italic
- [ ] Subheading matches target copy exactly
- [ ] Primary CTA scrolls smoothly to contact section
- [ ] Secondary CTA scrolls to services section
- [ ] All existing parallax functionality preserved

---

### 3.2 MissionSection (MODIFY)

**Status:** Exists — needs content expansion  
**File:** `website/src/components/custom/MissionSection.tsx`

#### Required Changes

**Primary Quote:**
> "Inheritance is the seed; architecture is the growth. We've evolved beyond the brute force of the behemoths to the calculated precision of the digital spine."

**Supporting Copy:**
> "Building on the inheritance. Engineering the legacy."

#### Acceptance Criteria
- [ ] Quote updates to new copy
- [ ] Gold accent on "seed" and "growth" keywords
- [ ] Supporting tagline appears below in smaller text
- [ ] Animation on scroll (fade-up) works correctly

---

### 3.3 TrustSection [NEW]

**Status:** New component required  
**File:** `website/src/components/custom/TrustSection.tsx`

#### Purpose
De-risk procurement decisions by showcasing B-BBEE credentials and trust factors.

#### Content

**Headline:** "Rooted in Excellence"

**Primary Copy:**
> "A Level 1 foundation isn't just a status—it's the bedrock. When the roots are deep, the structure we build together has no reason to fear the wind."

**Trust Badges (StatDisplay cards):**

| Metric | Value | Label |
|:-------|:------|:------|
| B-BBEE Level | 1 | Contributor |
| Procurement Recognition | 125% | Recognition Level |
| Black Youth Owned | 100% | Ownership |
| Years Operating | 12+ | Since 2012 |

#### Design Notes
- Use existing `StatDisplay` component for badges
- Dark purple/gold gradient background
- Centered layout with badges in a 2x2 or 4-column grid

#### Acceptance Criteria
- [ ] Component renders with all 4 trust badges
- [ ] StatDisplay animated counters work
- [ ] Responsive: 2x2 on mobile, 4-col on desktop
- [ ] Copy matches specification exactly
- [ ] Section has id="trust" for nav linking

---

### 3.4 ServicesSection [NEW]

**Status:** New component required  
**File:** `website/src/components/custom/ServicesSection.tsx`

#### Purpose
Replace generic `FeatureGrid` with Shoroka-specific service pillars.

#### Content

**Headline:** "Our Arsenals of Excellence"

**Subhead:** "We are the master-builders of industrial resilience. Our fleet is the instrument; our mind is the architect."

**Service Pillars:**

| Pillar | Icon | Description | Equipment List |
|:-------|:-----|:------------|:---------------|
| **Plant Hire** | 🏗️ (Crane) | Heavy machinery with experienced operators for mining and construction | ADTs, Excavators, Bobcats, Smooth Drum Rollers, Tractors & Trailers, Water Trucks |
| **Logistics & Transport** | 🚛 (Truck) | Strategic transport solutions for Limpopo & Gauteng corridors | Tipper Trucks (Various), Lowbeds |
| **Health & Safety** | 🛡️ (Shield) | Uncompromised safety as the commander of power | PPE Supply, Safety Training, Safety Consulting |
| **Construction** | 🔧 (Wrench) | Comprehensive construction and infrastructure maintenance | General Construction, Maintenance Services |

#### Design Notes
- Use `ShorokaCard` component for each pillar
- Cards should be expandable or link to detail anchors
- Grid: 2x2 on desktop, stacked on mobile
- Each card shows equipment list on hover or click

#### Acceptance Criteria
- [ ] 4 service pillar cards render correctly
- [ ] Each card contains icon, title, description, and equipment list
- [ ] Cards use theme-aware styling (dark/light)
- [ ] Responsive grid layout
- [ ] Section has id="services" for nav linking

---

### 3.5 AboutSection [NEW]

**Status:** New component required  
**File:** `website/src/components/custom/AboutSection.tsx`

#### Purpose
Build long-term trust by communicating vision and legacy.

#### Content

**Headline:** "Building an Inheritance"

**Primary Quote:**
> "A good man leaves an inheritance—but a great one builds it into an empire. We are expanding the legacy of the bushveld for our children's children."

**Company Info:**
- Founded: 2012
- Based: Shongoane 1 Village, Limpopo (Mogol/Lephalale area)
- Operations: Limpopo & Gauteng

**Management Team (Optional display):**
- Director: Mr. Lehlogonolo Lawrence Shongoane
- Operations: Mr. Phillip Mamabolo  
- Safety: Mr. Bonnywell Ramoroka

#### Acceptance Criteria
- [ ] Quote displays with appropriate styling
- [ ] Company founding info visible
- [ ] Section has id="about" for nav linking
- [ ] Optional: Management team photos/names if assets available

---

### 3.6 ContactSection [NEW]

**Status:** New component required  
**File:** `website/src/components/custom/ContactSection.tsx`

#### Purpose
Capture high-quality leads with strategic form fields.

#### Layout
Two-column on desktop:
- **Left:** Contact information + map placeholder
- **Right:** Lead capture form

#### Contact Information

| Detail | Value |
|:-------|:------|
| Phone | 061 083 5652 |
| Email | info@shoroka.co.za |
| Address | 20219 Greenside, Shongoane 1 Village, Villa Nora, Limpopo, 0607 |
| Branches | Limpopo & Gauteng |

#### Lead Form: "Architect Your Future"

**Required Fields:**

| Field | Type | Validation | Placeholder |
|:------|:-----|:-----------|:------------|
| Name / Company | Text | Required, min 2 chars | "Your Name or Company" |
| Email | Email | Required, valid email | "your@email.com" |
| Phone | Tel | Required, SA format | "061 083 5652" |
| Requirement | Select | Required | Options: Plant Hire, Logistics, Construction, Health & Safety, Other |
| Location | Select | Required | Options: Limpopo, Gauteng, Other |
| Message | Textarea | Optional | "Tell us about your project..." |

**Optional Fields:**

| Field | Type | Purpose |
|:------|:-----|:--------|
| Project Duration | Select | Qualify lead value (1 week, 1 month, 3+ months, Ongoing) |
| B-BBEE Points Needed | Checkbox | Flag high-value procurement leads |

#### Form Behavior

| Event | Action |
|:------|:-------|
| Submit (MVP) | `mailto:info@shoroka.co.za` with formatted body |
| Submit (Future) | POST to API endpoint |
| Success | Show confirmation message + clear form |
| Error | Show inline validation errors |

#### Acceptance Criteria
- [ ] Form renders with all required fields
- [ ] Validation works on all required fields
- [ ] Submit triggers mailto with formatted data
- [ ] Form clears on successful submission
- [ ] Contact details display correctly
- [ ] Section has id="contact" for nav linking
- [ ] Responsive: stacked on mobile, 2-col on desktop

---

### 3.7 Footer (MODIFY)

**Status:** Exists inline in `page.tsx` — extract to component  
**File:** `website/src/components/custom/Footer.tsx` [NEW]

#### Content Structure

| Column | Content |
|:-------|:--------|
| Left | Logo, Motto, "© 2024 Shoroka Creations" |
| Center | Quick Links: Home, Services, About, Contact |
| Right | Contact: Phone, Email, Address |

#### Acceptance Criteria
- [ ] Footer extracted to dedicated component
- [ ] Three-column layout on desktop
- [ ] All contact details visible
- [ ] Quick links scroll to correct sections
- [ ] Motto displays: "Sons of the soil, seed of the mind."

---

## 4. Deprecated Components

### 4.1 FeatureGrid (REPLACE)

**Current File:** `website/src/components/custom/FeatureGrid.tsx`

**Action:** Remove from `page.tsx` and replace with `ServicesSection`

**Reason:** Current content is generic tech-agency copy ("Tactical Resilience", "High Velocity"). This disconnects from Shoroka's actual service offerings.

---

## 5. Asset Requirements

### 5.1 Images Required

| Asset | Location | Purpose | Status |
|:------|:---------|:--------|:-------|
| Logo | `/images/hero/logo.png` | Hero, Footer | ✅ Exists |
| Fleet photos | `/images/hero/*.png` | Hero parallax | ✅ Exists (8 images) |
| Service icons | Component icons | Service cards | Use Lucide icons |
| Team photos | `/images/team/` | About section | ❌ Not required for MVP |

### 5.2 Copy Assets

All copy is defined in this specification. No external copywriting needed.

---

## 6. Technical Requirements

### 6.1 Smooth Scroll Navigation

All internal links (`#section`) should use smooth scroll behavior.

**Implementation:** CSS `scroll-behavior: smooth` on `html` element, or Framer Motion scroll.

### 6.2 Form Handling (MVP)

Use `mailto:` link with URL-encoded form data for initial implementation.

**Future:** Implement API route at `/api/contact` with email service integration.

### 6.3 Responsive Breakpoints

| Breakpoint | Description |
|:-----------|:------------|
| `sm` (640px) | Mobile landscape |
| `md` (768px) | Tablet |
| `lg` (1024px) | Desktop |
| `xl` (1280px) | Large desktop |

---

## 7. Success Metrics

| Metric | Target | Measurement |
|:-------|:-------|:------------|
| Form submission rate | > 2% of visitors | Form submissions / Unique visitors |
| Lead quality | > 50% company-level | Company name in form vs. individual |
| Engagement | > 2 min avg session | Analytics |
| B-BBEE section visibility | > 60% scroll depth | Scroll tracking |

---

## 8. Implementation Order

| Phase | Components | Priority |
|:------|:-----------|:---------|
| 1 | HeroSection (update copy + CTAs) | P0 |
| 2 | ContactSection (lead form) | P0 |
| 3 | ServicesSection (replace FeatureGrid) | P1 |
| 4 | TrustSection (B-BBEE badges) | P1 |
| 5 | AboutSection | P2 |
| 6 | MissionSection (update copy) | P2 |
| 7 | Footer (extract + enhance) | P2 |
| 8 | Navbar (update links) | P2 |

---

## 9. Verification Plan

### 9.1 Visual Verification

After implementation, capture screenshots of:
1. Hero section (desktop + mobile)
2. Each new section with correct content
3. Contact form with validation states
4. Dark mode and light mode comparison

### 9.2 Functional Testing

| Test | Method | Pass Criteria |
|:-----|:-------|:--------------|
| Nav links | Manual click each nav item | Smooth scroll to correct section |
| Form validation | Submit empty form | Inline errors appear |
| Form submission | Fill and submit | mailto opens with correct data |
| Responsive layout | Resize browser | All sections adapt correctly |
| Theme toggle | Click mode toggle | All sections switch correctly |

### 9.3 Content Verification

Cross-reference all displayed text against this specification. Every headline, subhead, and body copy should match exactly.

---

## Appendix A: Original Content Strategy

The following narrative elements informed this specification:

- **Brand Narrative:** "Architects of Legacy" — evolution from inheritance to active construction
- **Target Personas:** Mining Procurement, Construction PMs, Government Agencies
- **Design Language:** Red Limpopo soil vs. Polished Steel (Raw vs. Refined)
- **Typography:** Bold structural headings / Serif elegance
- **Motion:** Calculated, precise transitions (the "Digital Spine")

---

## Appendix B: Reference Documents

| Document | Purpose |
|:---------|:--------|
| [business-profile.md](file:///Users/lucas/Documents/Bespoke/shoroka-creation-project/docs/business-profile.md) | Company details, management, contact info |
| [color-theme.md](file:///Users/lucas/Documents/Bespoke/shoroka-creation-project/docs/color-theme.md) | Brand colors: Purple `#33206E`, Gold `#C7A963` |
| [ui-style-guide.md](file:///Users/lucas/Documents/Bespoke/shoroka-creation-project/docs/ui-style-guide.md) | Typography, interaction patterns, component rules |
| [Project_Context.md](file:///Users/lucas/Documents/Bespoke/shoroka-creation-project/docs/Project_Context.md) | Strategic context and core rules |
