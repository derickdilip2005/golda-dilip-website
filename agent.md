# MASTER PROMPT — DR. GOLDA DILIP ACADEMIC PORTFOLIO WEBSITE

You are an expert senior frontend engineer, UI/UX designer, and creative web designer.

Build a **premium, modern, highly polished academic portfolio website** for:

**Dr. Golda Dilip**
Professor & Head
Department of Computer Science & Engineering
SRM Institute of Science and Technology, Vadapalani Campus

The website is a professional personal academic/research portfolio. It should showcase her academic career, research, publications, achievements, PhD supervision, certifications, events, and professional research profiles.

The final result should feel like a website designed by a **top-tier professional digital design studio**, not a generic university faculty template.

---

# 1. CORE TECHNOLOGY

Use:

* Next.js
* TypeScript
* App Router
* Tailwind CSS
* Motion / Framer Motion for animations
* Lucide React for icons

Use modern, clean React architecture.

The website must be fully responsive and optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

Use semantic HTML and accessible components.

Prioritize:

* Excellent performance
* Clean component architecture
* SEO
* Accessibility
* Responsive design
* Smooth animations
* High visual polish
* Maintainability

Do NOT introduce unnecessary libraries.

---

# 2. DESIGN DIRECTION

The design should be:

**Elegant + Academic + Contemporary + Intelligent + Premium**

Think:

* premium researcher portfolio
* modern editorial website
* sophisticated university professor profile
* high-end academic personal brand
* subtle technology aesthetic

The website should feel distinctive and memorable while remaining professional enough for an academic institution.

Do NOT make it look like:

* a generic Bootstrap website
* a typical university faculty page
* a resume dumped onto a webpage
* a generic portfolio template
* a cybersecurity/hacker website
* an overly futuristic neon website
* an over-animated template

The site should communicate:

**Credibility
Intelligence
Experience
Leadership
Research
Academic Excellence**

The design should have a strong visual identity while remaining restrained and sophisticated.

---

# 3. VISUAL STYLE

Use a sophisticated color system.

Primary direction:

* Deep navy / midnight blue
* Warm white / ivory
* Soft neutral gray
* Muted blue accent
* Optional restrained gold accent for premium details

Avoid excessive gradients.

If gradients are used, they must be extremely subtle.

Use generous whitespace.

Use large typography for important headings.

Use a refined typography hierarchy.

Suggested typography direction:

* Modern sans-serif for UI/body
* Elegant serif or sophisticated display font for selected major headings if appropriate

Do not use more than 2 font families.

Typography should feel editorial, premium, and highly readable.

---

# 4. HERO SECTION — PRIMARY VISUAL FOCUS

The hero section is the most important part of the website.

It should immediately establish who Dr. Golda Dilip is, her role, and her academic identity.

A professional portrait of Dr. Golda Dilip will be provided later by the user.

**Design the hero around this portrait from the beginning.**

Do NOT treat the photograph as an optional decoration.

The portrait should be one of the primary visual anchors of the hero.

## Hero layout

Use an elegant asymmetric two-column composition.

LEFT:

Small eyebrow label:

"PROFESSOR • RESEARCHER • ACADEMIC LEADER"

Large heading:

"Dr. Golda Dilip"

Then:

"Professor & Head"

"Department of Computer Science & Engineering"

"SRM Institute of Science and Technology, Vadapalani"

Add a concise professional introduction of approximately 2–4 lines.

Include CTA buttons:

"Explore My Research"

"View Publications"

And a smaller link:

"Research Profiles ↓"

RIGHT:

Large professional portrait.

The portrait should NOT be displayed as a basic circle/avatar.

Instead use a sophisticated editorial portrait composition:

* large image container
* subtle asymmetric shape or corner treatment
* refined border
* restrained shadow
* carefully controlled crop
* subtle decorative background elements
* optional small floating academic metadata card

The face should remain the focal point.

Possible small floating label:

"PROFESSOR & HEAD"

or

"CSE • SRMIST"

Do not overcrowd the image.

## Portrait requirements

The image will eventually be placed at:

`/public/images/profile.jpg`

Build the layout so that this file can simply be replaced later.

Use Next.js `Image`.

Use:

* responsive image sizing
* proper width/height
* `object-fit: cover`
* appropriate `object-position`
* priority loading for the hero image

The portrait must have an intentional crop on desktop and mobile.

On mobile, ensure the face remains visible and is not accidentally cropped.

Do NOT:

* make the portrait circular
* add artificial neon glow
* add fake AI backgrounds
* heavily blur the image
* apply aggressive filters
* distort the image
* use stock imagery

If the actual portrait is not yet available, create a tasteful placeholder with the correct dimensions and label it clearly so it can easily be replaced.

The page should still look polished before the actual image is uploaded.

## Hero background

Use subtle visual elements inspired by:

* data
* networks
* research
* connected nodes
* abstract computational structures

These should be extremely subtle.

They should support the academic/technology identity without becoming distracting.

Do NOT create a giant glowing neural network or hacker-style background.

Add a subtle scroll indicator at the bottom.

---

# 5. NAVIGATION

Create a premium sticky navigation bar.

Desktop:

Logo/name on the left:

"GD" or "GOLDA DILIP"

Navigation:

About
Research
Experience
Publications
Supervision
Achievements
Contact

Include a subtle:

"Download CV"

button.

The navbar should:

* start transparent over the hero
* transition into a blurred/glass or solid refined background when scrolling
* remain minimal
* have smooth hover animations
* remain readable against the hero

Mobile:

Use a polished hamburger menu.

The mobile navigation should animate smoothly.

Do not make the navigation oversized.

---

# 6. ABOUT SECTION

Create a sophisticated "About Me" section.

Use a two-column editorial layout.

Left:

Large section number:

"01"

Heading:

"About Me"

Right:

Professional biography.

The biography should communicate:

* current academic role
* teaching experience
* research background
* leadership role
* academic interests
* commitment to research and education

Do not make this a huge wall of text.

Break it into readable paragraphs.

Below it, add a compact academic statistics area.

Example:

"20+"
Years in Academia

"02"
PhD Scholars Completed

"XX"
Publications

"XX"
Research Scholars

IMPORTANT:

Do NOT invent statistics.

If exact values are not available, use clearly marked placeholders in the data configuration.

---

# 7. RESEARCH INTERESTS

Create a visually distinctive research section.

Heading:

"Research & Interests"

Subheading:

"Exploring intelligent technologies that shape the future of computing."

Show research areas as elegant interactive cards/tags:

* Artificial Intelligence
* Machine Learning
* Data Science
* Data Mining & Analytics
* Blockchain
* Network Security

Only display areas supported by the provided academic data.

Do not use cheesy icons for every item.

Instead use:

* refined typography
* subtle hover effects
* minimal abstract graphics
* carefully controlled spacing

Hovering a research area can produce a subtle animation or highlight.

---

# 8. RESEARCH PROFILES

Create a dedicated premium section.

Heading:

"Research Profiles"

Subtitle:

"Explore my academic work, publications and research contributions."

Create four prominent profile cards:

1. SCOPUS
2. GOOGLE SCHOLAR
3. VIDWAN
4. ORCID

Each card should contain:

* platform name
* short description
* external-link icon
* "Visit Profile" CTA

Use official brand styling carefully while keeping the overall design visually consistent.

IMPORTANT:

Do NOT invent URLs.

Create a centralized configuration object with:

`scopusUrl`
`googleScholarUrl`
`vidwanUrl`
`orcidUrl`

Use placeholders until the actual URLs are supplied.

External links should open in a new tab with appropriate security attributes.

---

# 9. ACADEMIC EXPERIENCE

Create a beautiful vertical timeline.

Heading:

"Academic Journey"

Show professional experience chronologically.

Each timeline item should contain:

* Year / duration
* Position
* Institution
* Optional short description

The timeline should visually communicate career progression.

Use subtle scroll-triggered animations.

Do not make the timeline overly complicated.

The experience data must come from a centralized data file so it can easily be edited later.

---

# 10. EDUCATION

Create an elegant education section.

Show qualifications such as:

Ph.D.
Computer Science & Engineering

M.Tech
Computer Science & Engineering

M.E.
Engineering Management

B.E.
Computer Science & Engineering

Each qualification can be displayed as a refined card or editorial row.

Include institution and year wherever available.

Use subtle academic visual motifs.

Do not invent missing information.

---

# 11. PUBLICATIONS

This is one of the most important sections of the website.

Create a highly polished publications browser.

Heading:

"Selected Publications"

Allow publications to be displayed by:

* year
* category
* research area

At minimum provide a year filter.

Each publication should display:

* Title
* Authors
* Journal / Conference / Book
* Year
* DOI or external link if available

Use expandable cards or a clean editorial list rather than huge generic cards.

Example visual structure:

2024

Publication Title

Authors...

Journal / Conference

[View Publication ↗]

Hovering should create a subtle interaction.

Include:

"View All Publications"

as a CTA linking to an appropriate research profile when available.

IMPORTANT:

Do NOT fabricate publications.

Use only supplied or verified information.

Create a structured TypeScript interface similar to:

Publication {
title
authors
year
venue
type
doi?
url?
category?
}

Store publication data separately from UI components.

---

# 12. PHD SUPERVISION

Create a dedicated research supervision section.

Heading:

"Research Supervision"

Highlight:

"02"

PhD Scholars Completed

Also include ongoing scholars if data is available.

For each scholar:

* Name
* Research Area
* Year
* Status

Use a refined research-card design.

Make this section feel prestigious and academic.

Do NOT invent scholar names, research areas, years, or statuses.

Use placeholders until confirmed information is available.

---

# 13. CERTIFICATIONS

Create a visually attractive certification gallery.

Each certification should be displayed as a premium card.

Each card can include:

* certificate image / thumbnail
* certificate title
* issuing organization
* year
* "View Certificate"

If certificate files are provided later, support:

* PDF
* image
* external URL

Clicking a certificate should open it elegantly in a modal or new tab.

Use a responsive grid.

Do not make certificate previews tiny.

If certificates are not yet provided, use clearly labeled placeholders in the data file rather than fake certificates.

---

# 14. EVENTS & ACADEMIC ENGAGEMENT

Create a section:

"Events & Academic Engagement"

Show:

* conferences
* workshops
* FDPs
* seminars
* invited talks
* academic events

Use an editorial timeline or sophisticated card layout.

If event photos are available later, incorporate them into the design.

Do not fabricate event information.

---

# 15. AWARDS & ACHIEVEMENTS

Create a visually strong section.

Heading:

"Recognition & Achievements"

Display verified achievements such as:

* Academic Excellence
* Awards
* Gold Medal / Rank
* Research achievements
* Professional recognition

Use elegant cards.

Possible layout:

A large featured achievement on one side.

Smaller achievements arranged around it.

Use restrained iconography.

Avoid trophy emojis.

---

# 16. BOOKS & ACADEMIC CONTRIBUTIONS

Create a section:

"Books & Contributions"

Display authored books and academic contributions.

Each book card should contain:

* Book title
* ISBN
* Publication information
* Year if available
* Optional cover image

Make book covers visually prominent.

Use an editorial book-shelf-inspired layout if it fits the design.

Do not fabricate missing details.

---

# 17. PROFESSIONAL MEMBERSHIPS

Create a clean section displaying professional memberships.

Examples may include:

IEEE
ACM
ISTE
IAENG
IET

Only use memberships confirmed in the supplied data.

Use restrained logo/text treatment.

Do not turn this into a giant logo wall.

---

# 18. CONTACT SECTION

Create a strong final CTA section.

Heading:

"Let's Connect"

Short copy:

"For academic collaborations, research discussions, professional engagements, and scholarly communication."

Display:

* Email
* Institution
* Department
* Location

Include research profile links:

* Google Scholar
* ORCID
* SCOPUS
* VIDWAN

Use a clean, elegant layout.

Do not invent contact information.

Use placeholders until confirmed.

---

# 19. FOOTER

Minimal premium footer.

Include:

Dr. Golda Dilip

Professor & Head

Department of Computer Science & Engineering

SRM Institute of Science and Technology, Vadapalani

Research profile links.

Copyright:

© 2026 Dr. Golda Dilip. All rights reserved.

---

# 20. ANIMATIONS

Animations are important but must be restrained.

Use Motion / Framer Motion.

Include:

* subtle hero entrance animations
* staggered text reveal
* scroll-triggered section reveals
* timeline animations
* card hover transitions
* image reveal
* smooth navigation
* subtle button interactions
* navbar transition on scroll

Animation principles:

**FAST
SUBTLE
PREMIUM**

Avoid:

* excessive bouncing
* huge parallax effects
* spinning objects
* distracting particles
* constant movement
* gimmicky animations

The user should notice the design, not the animation library.

Respect:

`prefers-reduced-motion`

---

# 21. MICRO-INTERACTIONS

Add refined interactions.

Buttons:

Arrow moves slightly on hover.

Cards:

Very subtle elevation / border transition.

Navigation:

Animated underline or highlight.

External links:

Arrow icon subtly moves.

Images:

Very subtle zoom on hover where appropriate.

Timeline:

Subtle progress/highlight animation.

Everything should feel intentional.

---

# 22. RESPONSIVENESS

The mobile version is extremely important.

Do NOT simply shrink the desktop version.

Design mobile layouts intentionally.

Hero:

* Stack portrait and text beautifully
* Ensure portrait remains visually prominent
* Keep the face correctly positioned

Navigation:

* Hamburger menu

Statistics:

* 2-column grid

Timeline:

* Single vertical column

Publications:

* Single-column list

Research profiles:

* 2-column or 1-column depending on width

Certificates:

* Responsive grid

Typography:

* Responsive font sizes

Make sure there is no:

* horizontal overflow
* clipped text
* oversized whitespace
* tiny buttons
* inaccessible navigation

Test common breakpoints carefully.

---

# 23. DATA ARCHITECTURE

Do NOT hardcode all content directly inside components.

Create a clean structure such as:

/data
profile.ts
experience.ts
publications.ts
education.ts
research.ts
certifications.ts
events.ts
achievements.ts
books.ts
memberships.ts

Centralize all editable content.

Components should consume structured data.

This is important because the academic information will be updated later.

A content update should NOT require restructuring the UI.

---

# 24. COMPONENT ARCHITECTURE

Create reusable components such as:

Navbar
Hero
SectionHeading
About
Stats
ResearchInterests
ResearchProfiles
ExperienceTimeline
Education
PublicationList
PublicationCard
PhDSupervision
CertificationGrid
EventTimeline
Achievements
Books
Memberships
Contact
Footer

Do not create one massive page component.

Keep components modular and maintainable.

Use Server Components wherever possible.

Only use Client Components where interaction is actually required.

---

# 25. IMAGE HANDLING

Use Next.js Image wherever appropriate.

Primary profile image:

`/public/images/profile.jpg`

Additional images can be organized under:

`/public/images/`

Suggested structure:

`/public/images/profile.jpg`

`/public/images/certifications/`

`/public/images/events/`

`/public/images/books/`

The hero portrait is a core design asset, not a secondary decoration.

Use:

* proper dimensions
* responsive sizing
* optimized loading
* appropriate alt text
* controlled object positioning

Avoid layout shifts.

Do not generate a fake portrait.

---

# 26. SEO

Implement proper metadata.

Title:

"Dr. Golda Dilip | Professor & Head | CSE"

Description should professionally describe her academic profile.

Add:

* Open Graph metadata
* Twitter metadata
* favicon
* semantic headings
* proper page structure

If appropriate, add Person structured data / JSON-LD.

Make the website discoverable for searches related to:

Dr. Golda Dilip
CSE Professor
SRM Vadapalani
Computer Science
Research
Artificial Intelligence
Machine Learning

Do not make unsupported claims in SEO content.

---

# 27. ACCESSIBILITY

Follow accessibility best practices.

Use:

* semantic HTML
* proper heading hierarchy
* descriptive alt text
* keyboard navigation
* visible focus states
* sufficient contrast
* accessible buttons
* accessible mobile navigation

Do not rely only on color to communicate information.

All interactive elements must be keyboard accessible.

---

# 28. PERFORMANCE

Optimize for excellent Lighthouse scores.

Avoid unnecessary Client Components.

Use Server Components wherever possible.

Only use client-side components when required for:

* animations
* filters
* interactive navigation
* modals

Optimize images.

Lazy-load content where appropriate.

Do not install huge libraries for tiny features.

---

# 29. CONTENT SOURCE

The existing SRM faculty profile can be used as a reference for publicly available academic information.

Reference:

https://srmistvdp.edu.in/faculty/dr-golda-dilip

Use it as a content/reference source where appropriate.

Also use any additional information supplied by the user.

However:

**DO NOT blindly copy the existing website's design.**

The goal is to create a significantly more polished personal academic portfolio.

---

# 30. IMPORTANT CONTENT RULE

Never invent information.

If information is unavailable, use a clearly marked placeholder.

Examples:

"[Publication details to be added]"

"[Scholar information to be added]"

"[Certificate to be uploaded]"

"[Google Scholar URL]"

"[Email address]"

Do NOT create:

* fake publications
* fake statistics
* fake awards
* fake credentials
* fake scholar names
* fake profile URLs
* fake certificates
* fake dates

It is better to show a clear placeholder than inaccurate academic information.

---

# 31. CONTENT TONE

The writing should be:

Professional
Confident
Academic
Concise
Warm
Credible

Avoid corporate buzzwords.

Avoid exaggerated claims.

Avoid phrases like:

"world-renowned"

"leading expert"

"revolutionary researcher"

unless explicitly supported by the supplied data.

---

# 32. DISTINCTIVE VISUAL LANGUAGE

The website should have a recognizable visual identity.

Use:

* oversized editorial typography
* generous whitespace
* subtle grid structures
* thin divider lines
* elegant section numbering
* restrained motion
* subtle research/data-inspired background graphics
* carefully designed cards
* asymmetric layouts where appropriate
* strong image treatment
* excellent spacing

Potential visual motif:

A subtle network/grid system running through selected sections, representing connections between:

Research
People
Knowledge
Technology

But keep it extremely subtle.

The site should feel:

**INTELLIGENT, NOT FLASHY.**

---

# 33. PAGE STRUCTURE

The final single-page experience should roughly follow:

1. Hero
2. About
3. Research Interests
4. Research Profiles
5. Academic Experience
6. Education
7. Publications
8. PhD Supervision
9. Certifications
10. Events & Academic Engagement
11. Awards & Achievements
12. Books & Contributions
13. Professional Memberships
14. Contact
15. Footer

However, improve the ordering if your design judgment suggests a stronger narrative flow.

The page should feel like one cohesive story rather than a collection of unrelated sections.

---

# 34. VISUAL HIERARCHY

Make sure each section has a clear hierarchy.

Every section should have:

* section number or small eyebrow
* strong heading
* optional short supporting statement
* clearly organized content

Do not make every element visually loud.

Use hierarchy to guide the visitor.

The hero should be the strongest visual moment.

Research and publications should be the strongest content sections.

Contact should be the final strong CTA.

---

# 35. DESKTOP EXPERIENCE

On large screens, take advantage of the available space.

Use:

* asymmetric layouts
* large typography
* generous margins
* carefully controlled content width
* sophisticated editorial composition

Avoid stretching content across the entire screen.

Use a maximum content width for readability.

---

# 36. MOBILE EXPERIENCE

Treat mobile as a first-class experience.

The website should feel just as premium on a phone.

Pay special attention to:

* portrait crop
* heading wrapping
* CTA stacking
* navbar
* publication cards
* timelines
* certificate grids
* spacing
* tap targets

Buttons should be easy to tap.

Text must remain highly readable.

---

# 37. NO TEMPLATE FEEL

This is extremely important.

Do not build every section as:

"heading + paragraph + 3 cards"

repeated over and over.

Vary the composition.

For example:

Hero → asymmetric editorial

About → editorial two-column

Research → interactive tags/cards

Profiles → four premium cards

Experience → timeline

Education → structured rows/cards

Publications → editorial list

Supervision → research cards

Certifications → visual gallery

Events → timeline

Achievements → featured composition

Books → editorial showcase

Memberships → minimal list

Contact → large final CTA

This variation should create a natural rhythm throughout the page.

---

# 38. PROFESSIONAL PHOTOGRAPH AS A DESIGN ANCHOR

The supplied portrait should visually connect the entire website.

Use the image's shape and composition to influence:

* hero layout
* accent shapes
* spacing
* visual balance

Do not repeat the same portrait unnecessarily throughout the page.

The hero should be the primary place for the portrait.

If a secondary portrait is ever used, it should serve a specific design purpose.

---

# 39. OPTIONAL PREMIUM DETAILS

If they genuinely improve the design, consider:

* subtle grain/noise texture
* refined page transitions
* thin animated divider lines
* subtle cursor interaction
* elegant hover states
* research-inspired decorative patterns
* subtle numerical counters
* scroll progress indicator

But only use these if they improve the experience.

Do not add effects simply because they are technically possible.

---

# 40. FINAL QUALITY BAR

Before considering the implementation complete, review the website as if you are a professional UI/UX designer.

Ask:

Does this look like a premium academic portfolio?

Does it immediately communicate who Dr. Golda Dilip is?

Does the hero feel impressive?

Does her photograph feel naturally integrated?

Does the site look significantly better than a normal university faculty page?

Is the hierarchy clear?

Are the sections visually connected?

Does the site feel cohesive?

Does mobile look intentionally designed?

Are animations subtle and polished?

Does the typography feel premium?

Is there excessive visual noise?

Can a visitor quickly find publications and research profiles?

Can the academic information be easily updated later?

Does anything feel like a generic template?

If any answer is no, refine the implementation.

---

# 41. DEVELOPMENT PROCESS

Do not rush directly into writing a giant amount of code.

First:

1. Inspect the existing project structure.
2. Determine whether Next.js/Tailwind is already configured.
3. Establish the design system.
4. Create the data architecture.
5. Create the image directory and profile-image placeholder.
6. Build the main page structure.
7. Implement the hero and navigation first.
8. Build the remaining sections consistently.
9. Add animations.
10. Optimize responsive behavior.
11. Run/build the project.
12. Fix all TypeScript/build/lint errors.
13. Review the visual consistency of every section.
14. Refine spacing, typography and responsive behavior.
15. Verify that all placeholders are obvious and easy to replace.
16. Verify that no academic information has been fabricated.

If browser preview tools are available, actually inspect the rendered page at desktop and mobile sizes rather than assuming the implementation looks good.

---

# 42. FINAL DESIGN PRINCIPLE

The website should feel like:

**"A distinguished professor and researcher with a modern digital presence."**

NOT:

**"A student made a faculty portfolio using a template."**

Prioritize:

* sophistication
* typography
* spacing
* composition
* content hierarchy
* restraint
* usability
* academic credibility

Make it memorable.

Make it elegant.

Make it feel expensive.

Make the portrait, typography, research identity and academic achievements feel like parts of one coherent personal brand.

---

# 43. IMPLEMENTATION INSTRUCTION

Now build the complete website.

Do not stop after creating a basic skeleton.

Implement the complete responsive UI with all major sections, reusable components, structured data files, placeholder content where necessary, responsive image handling, navigation, animations, SEO metadata, accessibility features, and polished styling.

The result should be immediately runnable.

Keep all academic content centralized in the data layer so the information can be replaced or expanded later without restructuring the UI.

Do not fabricate missing information.

Prioritize **visual quality and professional design** just as much as technical correctness.