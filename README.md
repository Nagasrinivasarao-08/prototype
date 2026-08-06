# Aspire Software Consultancy — Enterprise Homepage Redesign

A production-ready, Next.js App Router homepage redesign for **Aspire Software Consultancy**. Designed to communicate broad technical expertise, long-term software partnerships, enterprise platform capabilities (Salesforce, Microsoft Dynamics, .NET), product offerings (ASC HRMS), and verified client proof over a light-first editorial visual system.

---

## 🛠️ Technology Stack
- **Framework**: Next.js (App Router, React 18/19, TypeScript strict mode)
- **Styling**: Tailwind CSS, CSS variables design tokens, `clsx`, `tailwind-merge`
- **Typography**: Space Grotesk (Headings), Inter (Body & Controls), JetBrains Mono (Metrics & Technical Tags)
- **Icons & Motion**: Lucide React, Framer Motion (Restrained animations)
- **Form & Validation**: React Hook Form + Zod (`@hookform/resolvers/zod`)
- **Server Configuration**: Binds to `0.0.0.0:3000` for local and ngrok HTTPS tunnel review

---

## 🚀 Quick Start Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev -- --hostname 0.0.0.0
```
> Server binds to `http://0.0.0.0:3000` (Local access: `http://localhost:3000`).

### 3. Run Production Build
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```
> Runs production server on `http://0.0.0.0:3000`.

### 5. Run Lint Check
```bash
npm run lint
```

---

## 🌐 Client Sharing via ngrok

To stream this live prototype to external client reviewers over a secure HTTPS URL:

1. Open a separate terminal.
2. Run:
```bash
ngrok http 3000
```
3. Share the generated `https://xxxx.ngrok-free.app` URL with client stakeholders.

---

## 📂 Project Structure

```
c:\Users\nagas\Desktop\Apirewebsite\
├── app/
│   ├── layout.tsx         # Next.js Root Layout with Metadata API & Schema.org JSON-LD
│   ├── page.tsx           # 17-section enterprise homepage sequence
│   ├── globals.css        # Light theme variables & typography styles
│   ├── sitemap.ts        # Dynamic XML sitemap
│   └── robots.ts         # Robots.txt handler
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Sticky Header with verified navigation & CTA
│   │   ├── MegaMenu.tsx   # Desktop service dropdown
│   │   ├── MobileDrawer.tsx # Accessible mobile navigation drawer
│   │   └── Footer.tsx     # Structured multi-column footer with attribution
│   ├── sections/
│   │   ├── Hero.tsx       # Split Hero with tagline, supporting copy, 3 CTAs, proof
│   │   ├── TrustBar.tsx   # Certifications & partner logos (Salesforce, ISO 27001, MS)
│   │   ├── WhyAspire.tsx  # Verified business strengths & partner qualities
│   │   ├── IndustriesSection.tsx # Sector challenge & engineering capability cards
│   │   ├── ProductHRMS.tsx # Featured ASC HRMS cloud product section & demo CTA
│   │   ├── PortfolioSection.tsx # Verified client case studies (Renovo, ByBox, Truninger, etc.)
│   │   ├── TechCapabilities.tsx # Categorized technical stack index
│   │   ├── DeliveryProcess.tsx # Initial consultation + 4-stage project pipeline
│   │   ├── AwardsSection.tsx # Awards and recognition grid
│   │   ├── InsightsSection.tsx # Verified articles & read more links
│   │   ├── FAQSection.tsx # 7 verified FAQs in accessible accordion
│   │   └── ContactSection.tsx # Light 2-column contact form & office locations
│   └── landing/
│       ├── HeroSection.tsx # Asymmetric editorial hero layout
│       ├── SocialProofSection.tsx # Track record metrics & credentials
│       ├── FeaturesSection.tsx # Mixed editorial service capabilities
│       ├── PricingSection.tsx # Delivery models (Audit, Dedicated Pod, Turnkey)
│       ├── TestimonialsSection.tsx # Verbatim client quotes (John Ragsdale, Remi Gangarossa)
│       └── CTASection.tsx # Conversion CTA banner
├── data/
│   ├── companyData.ts     # Verified facts, tagline, office addresses, phone numbers
│   ├── servicesData.ts    # 6 grouped service categories & descriptions
│   ├── productData.ts     # ASC HRMS capabilities & benefits
│   ├── industriesData.ts  # 19 verified industries & sector challenge mappings
│   ├── projectsData.ts    # Verified portfolio projects
│   ├── whyAspireData.ts   # Business strengths & client partner qualities
│   ├── processData.ts     # Consultation journey & 4-stage delivery pipeline
│   ├── techData.ts        # Categorized technology capabilities
│   ├── blogData.ts        # Verified articles & summaries
│   ├── faqData.ts         # 7 verified FAQs
│   └── testimonialsData.ts # Verbatim executive client quotes
├── types/
│   └── index.ts           # Strict TypeScript interface definitions
├── DESIGN_DECISIONS.md    # Strategy, layout blueprint, & UX rationale
├── README.md              # Documentation & instructions
├── tailwind.config.ts     # Light-first color system & typography tokens
└── package.json           # Scripts & dependencies
```

---

## 📋 Client Confirmation & Integration Requirements

1. **Direct Scheduling Endpoint**: Currently, "Schedule a Free Consultation" scrolls smoothly to `#contact`. If Aspire uses a direct scheduling link (e.g. Calendly or HubSpot Meetings), update `href="#contact"` in `Header.tsx` and `Hero.tsx`.
2. **Salesforce Web-to-Lead Endpoint**: The previous site submitted to Salesforce OID `00D5j000001wgu7`. If connecting directly to Salesforce Web-to-Lead, update `ContactSection.tsx`.
