# Website Layout Specification: Astrology Services Platform
## Professional, Multi-lingual, and AI-Integrated Astrology Portal

---

## Table of Contents
1. [Project Summary](#project-summary)
2. [High-Level Requirements](#high-level-requirements)
3. [Tech Stack & Architecture](#tech-stack--architecture)
4. [UI Style Guide](#ui-style-guide)
5. [Site Map](#site-map)
6. [Page-by-Page Specifications](#page-by-page-specifications)
7. [Component Inventory](#component-inventory)
8. [Booking System Architecture](#booking-system-architecture)
9. [Assist AI & n8n Integration](#assist-ai--n8n-integration)
10. [Translation & Localization Strategy](#translation--localization-strategy)
11. [SEO, AEO, & GEO Strategy](#seo-aeo--geo-strategy)
12. [Interaction & Animation Guidance](#interaction--animation-guidance)
13. [Responsive Breakpoints & Layout Rules](#responsive-breakpoints--layout-rules)
14. [Performance & Optimization](#performance--optimization)
15. [Security & Privacy](#security--privacy)
16. [Testing & QA Checklist](#testing--qa-checklist)
17. [Handoff & Implementation Timeline](#handoff--implementation-timeline)

---

## Project Summary
The goal of this project is to build a premium digital presence for a professional astrologer that bridges ancient wisdom with modern technology. The platform serves as a high-conversion lead generation tool and an automated service delivery hub. It must provide a seamless user experience for diverse audiences (English and Hindi speakers), offering automated booking, real-time AI assistance, and high-performance content delivery to establish authority in the astrology and wellness niche.

## High-Level Requirements
* **Core Pages:** Home, About Us, Services, Blog, Contact Us, Disclaimer, Terms of Service, Refund Policy, Privacy Policy.
* **Key Features:**
    * Dynamic Carousels and Service Cards using Material UI.
    * "Assist AI" floating icon integrated with n8n workflows for lead qualification.
    * Advanced Booking System: Date/Time/Location slots with unique Token Allocation.
    * Multi-lingual Support: Full site toggle between English and Hindi.
    * Visual Polish: Parallax scrolling, soft entrance animations, and social floating action buttons.
    * Mobile-First Design: Specific optimizations for small-viewport devices (320px–475px).
    * Comprehensive SEO/AEO/GEO: Schema markup for local business and FAQ-based Answer Engine Optimization.

## Tech Stack & Architecture
* **Frontend:** ReactJS (Functional components, Hooks).
* **UI Framework:** Material UI (MUI) v5 for core components and theming.
* **Icons:** Font Awesome (Pro/SVG) and MUI Icons.
* **Backend Integration:** n8n (Low-code automation for AI chat and form processing).
* **State Management:** React Context API or Redux Toolkit for localization and booking states.
* **MIUI Note:** While MUI is the primary framework, specific "MIUI" (Mobile Interactive User Interface) patterns should be adopted for the 320px-475px range, ensuring touch targets are ≥48px and navigation is thumb-accessible.

## UI Style Guide
* **Primary Theme Color:** Deep Midnight Blue (`#1A237E`) and Celestial Gold (`#D4AF37`).
    * *Rationale:* Blue conveys trust, depth, and the night sky; Gold adds a premium, spiritual, and "illuminated" feel.
* **Typography:**
    * Headings: *Playfair Display* (Serif) – elegant and authoritative.
    * Body: *Inter* (Sans-serif) – highly legible for both English and Hindi scripts.
* **Spacing Scale:** 8px base grid (8, 16, 24, 32, 48, 64).
* **Contrast Rules:** Minimum WCAG 2.1 AA compliance (4.5:1 ratio) for all informative text.

---

## Site Map
1.  **Global Header/Navigation** (Language Switcher, Booking CTA)
2.  **Home Page** (Hero, Featured Services, AI Trigger, Testimonials)
3.  **About Us** (Expertise, Philosophy, Lineage)
4.  **Services** (Catalog of Readings, Consultation Packages)
    * *Individual Service Pages* (Deep-dive content)
5.  **Booking Engine** (Multi-step widget)
6.  **Blog** (Educational content, transit updates)
7.  **Contact Us** (Validated form, Map integration)
8.  **Footer** (Legal links, Social handles, Newsletter)

---

## Page-by-Page Specifications

### Home Page
* **Purpose:** Instant credibility and conversion to booking/AI interaction.
* **Wireframe Structure:**
    1.  Announcement Bar (Current Astrological Events)
    2.  Hero Section (Value proposition + Primary CTA)
    3.  Service Carousel (Visual cards for 3-4 main categories)
    4.  "Why This Astrologer" (Icon-based trust pillars)
    5.  Review Widget (Social proof)
    6.  Latest Blog Preview
* **SEO Hooks:** Meta Title: `[Astrologer Name] | Expert Vedic Astrology & Life Consultations`.
* **Mobile Behavior:** Stack service cards vertically on 320px-425px; use horizontal swipe on 425px+.

### Services Page
* **Purpose:** Detailed breakdown of offerings to drive intent.
* **Wireframe Structure:**
    1.  Category Filters (Career, Marriage, Health, etc.)
    2.  Service Grid (Cards with price, duration, and "Book Now" button)
    3.  FAQ Section (AEO optimized)
* **Localization:** Ensure price formatting matches currency/region (₹ for Hindi/India, $ for English/Global).

---

## Component Inventory

### 1. Hero Section
* **Props:** `title` (String), `subtitle` (String), `ctaText` (String), `bgImage` (URL).
* **Behavior:** Parallax background movement on scroll.
* **Accessibility:** H1 tag must be present; high contrast text overlay.

### 2. Booking Widget
* **Props:** `serviceId` (UUID), `availableSlots` (Array), `tokenType` (Enum).
* **States:** `IDLE`, `SELECTING_SLOT`, `VALIDATING`, `SUCCESS_TOKEN_ISSUED`, `ERROR_SLOT_TAKEN`.
* **Animation:** Slide-in transition for mobile; Modal for desktop.

### 3. Review Widget
* **Data Contract:** `authorName` (String), `rating` (Number 1-5), `reviewText` (String), `date` (ISO Date).
* **SEO:** Implement `Review` and `AggregateRating` Schema.

---

## Booking System Architecture
### User Journey
1.  **Select Service:** User clicks "Book Now" on a service card.
2.  **Input Details:** Name, DOB, Time of Birth, Place of Birth (mandatory for charts).
3.  **Date/Time Picker:** Displays real-time availability from backend.
4.  **Slot Locking:** Upon time selection, the slot is locked for 10 minutes (Race-condition handling).
5.  **Token Allocation:** System generates a unique `booking_token` (e.g., AST-2024-X99).
6.  **Confirmation:** n8n workflow triggers email/WhatsApp with token and meeting link.

### Data Model
* `bookingId`: UUID
* `token`: String (Human-readable unique ID)
* `status`: Enum (Pending, Confirmed, Completed, Cancelled)
* `birthData`: Object { date, time, latitude, longitude }

---

## Assist AI & n8n Integration
* **UI:** Floating icon (bottom-right) with a pulsing notification dot for first-time visitors.
* **n8n Workflow Trigger:**
    * Event: `chat_init`
    * Payload: `{ sessionId, browserLang, currentURL }`
* **Lead Generation Flow:** AI asks 3 qualification questions -> Collects Email/Phone -> Pushes to CRM/Email List -> Provides generic advice/booking link.
* **Fallback:** If n8n service is unreachable, display a "Leave a Message" static contact form.

---

## Translation & Localization Strategy
* **Recommended Approach:** **Client-side i18n (react-i18next)** using JSON translation files.
    * *Justification:* Provides instant language switching without page reloads, essential for a seamless modern UX.
* **SEO Strategy:** Use subdirectories (`/hi/`) for Hindi content.
* **Hreflang Tags:** `<link rel="alternate" hreflang="en" href="url/en" />` and `<link rel="alternate" hreflang="hi" href="url/hi" />`.

---

## SEO, AEO, & GEO Strategy
* **Structured Data (JSON-LD):**
    * `LocalBusiness`: Name, Address, Geo-coordinates, Opening hours.
    * `FAQPage`: For Service FAQs to capture Google "People Also Ask" snippets.
    * `Service`: Specific metadata for each astrology consultation type.
* **AEO Focus:** Structure headers as questions (e.g., "What is a Saturn Return?") with concise, direct answer paragraphs immediately following.
* **GEO Signals:** Embed a Google Map; include city-specific keywords in footer and meta tags.

---

## Interaction & Animation Guidance
* **Entrance:** Fade-in-up for all section headers (Duration: 600ms, Easing: ease-out).
* **Hover States:** Subtle scale-up (1.02x) on service cards with box-shadow increase.
* **Scrolling:** Implement "Smooth Scroll" for anchor links and parallax effects for background stars/celestial elements.
* **Performance:** All animations must use CSS `transform` and `opacity` to avoid layout shifts.

---

## Responsive Breakpoints & Layout Rules
* **320px – 375px:** Single column; font size reduced by 10%; condensed header (hamburger only).
* **376px – 475px (Wide Mobile):** Standard mobile layout; full-width buttons for easy thumb tapping.
* **768px (Tablet):** 2-column grids for services; sticky header enabled.
* **1024px+ (Desktop):** 3-4 column grids; maximum content width of 1200px to maintain readability.

---

## Security & Privacy
* **Forms:** Implement reCAPTCHA v3 (invisible) on Contact and Booking forms.
* **Data Handling:** PI (Personal Information) such as birth charts must be encrypted at rest; retention period of 1 year unless requested otherwise.
* **Compliance:** Sticky Cookie Consent banner for GDPR/CCPA.

---

## Testing & QA Checklist
* [ ] **Responsive:** Test 320px (iPhone SE) vs 430px (iPhone Pro Max) for text wrapping.
* [ ] **Localization:** Verify that toggling to Hindi doesn't break layout (Hindi text is often 20% longer).
* [ ] **Booking:** Attempt to book the same slot in two different browser sessions simultaneously.
* [ ] **Accessibility:** Navigate the entire booking flow using only the keyboard (Tab + Enter).
* [ ] **Performance:** Lighthouse score > 90 for Mobile Performance.

---

## Handoff & Implementation Timeline
### Phase 1: MVP (Weeks 1-4)
* Static pages (Home, About, Contact).
* English/Hindi toggle.
* Basic validated contact form.

### Phase 2: Core Features (Weeks 5-8)
* Booking Engine integration.
* n8n "Assist AI" chat integration.
* Full SEO/Schema implementation.

### Phase 3: Polish (Weeks 9-10)
* Parallax and advanced animations.
* Blog system launch.
* Core Web Vitals optimization.
