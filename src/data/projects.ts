export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  color: 'sky' | 'orange';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Project {
  id: number;
  slug: string;
  category: 'design' | 'talent';
  label: string;
  title: string;
  description: string;
  tags: string[];
  result: string;
  image: string;
  featured?: boolean;
  // Case study detail
  client: string;
  industry: string;
  duration: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  approachSteps: ApproachStep[];
  metrics: CaseStudyMetric[];
  deliverables: string[];
  testimonial?: Testimonial;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'fintech-mobile-app',
    category: 'design',
    label: 'Design',
    title: 'FinTech Mobile App',
    description: 'Complete UX/UI redesign of a financial services mobile application, improving user engagement by 65% and reducing drop-off by 40%.',
    tags: ['Mobile', 'UX/UI', 'FinTech'],
    result: '+65% engagement',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwJTIwZGFyayUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM0NzM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    client: 'FinServe Capital',
    industry: 'Financial Services',
    duration: '16 weeks',
    year: '2024',
    role: 'UX/UI Design Lead',
    overview: 'FinServe Capital came to us with an ageing mobile banking app that was losing users to challenger banks. The interface had accumulated years of feature additions without a coherent design philosophy, resulting in confusing navigation and a frustrating onboarding experience. We took the product apart from first principles and rebuilt it around the actual mental models of their users.',
    challenge: 'The existing app had a 62% onboarding drop-off rate and a 2.4-star App Store rating. Navigation was inconsistent across the 4 main tabs, key actions like bill pay were buried 4 levels deep, and the visual design felt dated compared to competitors. Users in research sessions repeatedly described the app as "intimidating" and "confusing", even after months of use.',
    approachSteps: [
      { step: '01', title: 'Discovery & Research', description: 'Conducted 18 user interviews, 3 competitive audits, and a full heuristic evaluation. Built a Jobs-to-be-Done map across 6 primary user archetypes, from first-time savers to active investors.' },
      { step: '02', title: 'Information Architecture', description: 'Redesigned the navigation from scratch using card sorting with 40 participants. Reduced primary navigation from 6 tabs to 4, surfaced the top 8 actions to the home screen dashboard.' },
      { step: '03', title: 'Design System', description: 'Built a token-based design system with 240+ components covering all platform states, accessibility guidelines, and dark/light themes. Documented usage rules and anti-patterns for the engineering team.' },
      { step: '04', title: 'Prototype & Test', description: 'Ran 3 rounds of moderated usability testing with interactive Figma prototypes. Iterated on the onboarding flow until first-session task completion reached 94%, up from 38%.' },
      { step: '05', title: 'Handoff & Launch', description: 'Delivered a 340-screen Figma file with complete dev specs, a motion guidelines document, and 6 weeks of embedded support during the engineering build phase.' },
    ],
    metrics: [
      { value: '+65%', label: 'User Engagement', color: 'sky' },
      { value: '-40%', label: 'Drop-off Rate', color: 'orange' },
      { value: '4.8★', label: 'App Store Rating', color: 'sky' },
      { value: '340+', label: 'Screens Delivered', color: 'orange' },
    ],
    deliverables: [
      'Full UX/UI design system (240+ components)',
      'Redesigned onboarding flow (7 screens)',
      'Dashboard & home screen layouts',
      'Transaction history & account management',
      'Bill pay & transfer flows',
      'Interactive Figma prototype for testing',
      'Developer handoff documentation',
      'Motion & animation guidelines',
    ],
    testimonial: {
      quote: 'Collabrix didn\'t just redesign our app — they helped us understand why users were leaving and built something that genuinely serves them. The improvement in ratings and engagement exceeded every target we set.',
      author: 'Priya Sharma',
      role: 'Head of Product',
      company: 'FinServe Capital',
    },
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    category: 'design',
    label: 'Design',
    title: 'E-Commerce Platform',
    description: 'End-to-end design system and interface design for a next-generation e-commerce platform serving 2M+ monthly users.',
    tags: ['Web', 'Design System', 'E-Commerce'],
    result: '2M+ users',
    image: 'https://images.unsplash.com/photo-1548524238-a971a4a3b523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzQ2NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'ShopFlow Commerce',
    industry: 'E-Commerce & Retail',
    duration: '6 months',
    year: '2024',
    role: 'Design System Lead & UX Strategy',
    overview: 'ShopFlow was scaling rapidly but their UI had become a patchwork of inconsistent components built by different teams over 4 years. With 2M+ monthly active users, any UI inconsistency translated directly to lost revenue. We were brought in to build a unified design system, redesign the core shopping flows, and embed a design culture that could scale with the business.',
    challenge: 'With over 800 unique UI components scattered across 6 engineering teams, the platform had become unmaintainable. Design debt was costing an estimated 40% of engineering sprint capacity. The checkout flow had a 68% abandonment rate, and the product pages lacked the persuasive structure needed to convert mobile visitors who made up 73% of traffic.',
    approachSteps: [
      { step: '01', title: 'Design Audit', description: 'Catalogued all 800+ existing UI components, identified 140 unique button variants, and mapped each screen against conversion data to prioritise which flows to address first.' },
      { step: '02', title: 'System Architecture', description: 'Designed a token system with 3 tiers: global tokens, semantic tokens, and component tokens. Built the system to support 6 storefronts simultaneously through a single token swap.' },
      { step: '03', title: 'Core Component Library', description: 'Built 280 components in Figma with full interactive states, responsive variants, and Storybook-ready annotations. Reduced unique button variants from 140 to 12.' },
      { step: '04', title: 'Checkout Redesign', description: 'Rebuilt the 6-step checkout into a streamlined 3-step flow with inline validation, address autocomplete, and a persistent order summary. A/B tested against the original.' },
      { step: '05', title: 'Mobile Optimisation', description: 'Redesigned the product discovery and PDP experience for mobile-first. Added swipe interactions, sticky add-to-cart, and a tabbed content structure for spec-heavy products.' },
    ],
    metrics: [
      { value: '2M+', label: 'Monthly Active Users', color: 'sky' },
      { value: '+28%', label: 'Checkout Conversion', color: 'orange' },
      { value: '-35%', label: 'Cart Abandonment', color: 'sky' },
      { value: '280', label: 'Components Delivered', color: 'orange' },
    ],
    deliverables: [
      'Design token system (3-tier architecture)',
      '280-component Figma library',
      'Checkout flow redesign (3-step)',
      'Mobile-first product detail pages',
      'Search & filter experience',
      'Email marketing template set (24 templates)',
      'Storybook documentation',
      'Design system governance guidelines',
    ],
    testimonial: {
      quote: 'The design system Collabrix delivered has transformed how our product teams work. We shipped a full rebrand to 6 storefronts in 3 weeks — that would have taken 6 months before.',
      author: 'Marcus Chen',
      role: 'VP of Engineering',
      company: 'ShopFlow Commerce',
    },
  },
  {
    id: 3,
    slug: 'tech-startup-team-build',
    category: 'talent',
    label: 'Talent',
    title: 'Tech Startup Team Build',
    description: 'Recruited and placed 15+ engineers, designers, and product managers for a Series A startup in under 60 days.',
    tags: ['Recruitment', 'Tech', 'Startup'],
    result: '15 hires in 60 days',
    image: 'https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Confide Health (Series A)',
    industry: 'HealthTech / SaaS',
    duration: '60 days',
    year: '2024',
    role: 'Talent Strategy & Full-Cycle Recruitment',
    overview: 'Confide Health closed their Series A and needed to scale from 8 to 25+ people in under 60 days to hit a board-mandated product milestone. Their founding team had no HR infrastructure, no interview processes, and no employer brand. We parachuted in as their embedded talent partner and built everything from the ground up while filling the team simultaneously.',
    challenge: 'The founders had a 60-day window to hit a technical milestone that required 15 new hires across engineering, design, and product. They had no ATS, no structured interview process, and were unknown in the market. Three generalist recruiters had already failed to find senior-level candidates. Compensation bands were undefined, and the engineering culture was not yet articulated.',
    approachSteps: [
      { step: '01', title: 'Talent Strategy Sprint', description: 'Ran a 3-day intensive with the founding team to define compensation philosophy, career ladders, culture anchors, and the employer value proposition. Produced a hiring brief document used across all 15 searches.' },
      { step: '02', title: 'Process Architecture', description: 'Built a full interview framework with role-specific scorecards, structured questions, and calibration guides. Set up an ATS, created job specs, and configured automated candidate communications.' },
      { step: '03', title: 'Targeted Sourcing', description: 'Used deep market mapping to identify 340+ qualified candidates across 8 cities. Focused on candidates from HealthTech and adjacent sectors with proven scale-up experience.' },
      { step: '04', title: 'Interview & Assessment', description: 'Ran initial screening for all candidates, coordinating founder involvement only for final-stage interviews. Delivered a 5-day SLA from application to offer for shortlisted candidates.' },
      { step: '05', title: 'Offer & Onboarding', description: 'Managed offer negotiation for all 15 placements. Achieved 100% offer acceptance. Designed a 30-60-90 day onboarding framework and supported the first month of new hire integration.' },
    ],
    metrics: [
      { value: '15', label: 'Hires in 60 Days', color: 'sky' },
      { value: '100%', label: 'Offer Acceptance', color: 'orange' },
      { value: '5 days', label: 'Avg. Time to Offer', color: 'sky' },
      { value: '340+', label: 'Candidates Mapped', color: 'orange' },
    ],
    deliverables: [
      '15 full-time placements (6 engineers, 4 designers, 3 PMs, 2 QA)',
      'Interview framework & role-specific scorecards',
      'Compensation benchmarking report',
      'ATS setup & workflow automation',
      'Employer brand guidelines',
      '30-60-90 onboarding framework',
      'Talent pipeline (150+ warm candidates) handed over',
    ],
    testimonial: {
      quote: 'We were skeptical anyone could move this fast without compromising quality. Collabrix proved us wrong. Every single hire has been exceptional and the processes they left behind are still running our team today.',
      author: 'Arjun Mehta',
      role: 'Co-founder & CTO',
      company: 'Confide Health',
    },
  },
  {
    id: 4,
    slug: 'healthcare-dashboard',
    category: 'design',
    label: 'Design',
    title: 'Healthcare Dashboard',
    description: 'Data visualization and dashboard design for healthcare providers to monitor patient outcomes and operational efficiency.',
    tags: ['Web App', 'Data Viz', 'Healthcare'],
    result: '3 hospitals launched',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGFzaGJvYXJkJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBVSXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'MediTrack Systems',
    industry: 'Healthcare Technology',
    duration: '14 weeks',
    year: '2023',
    role: 'UX Design & Data Visualization',
    overview: 'MediTrack Systems built a powerful patient outcomes platform, but clinical staff struggled to extract actionable insights from the data. Dense tables and static reports meant that busy hospital administrators were spending hours each week in spreadsheets instead of making decisions. We redesigned the entire reporting layer around how clinicians actually think, not how the database was structured.',
    challenge: 'The existing interface presented data in the same structure as the underlying database — 14 separate report screens, each requiring manual cross-referencing to understand patterns. Clinical directors were spending 3-4 hours weekly compiling their own summaries. The platform had near-zero adoption among ward-level staff despite being mandated by hospital management.',
    approachSteps: [
      { step: '01', title: 'Contextual Inquiry', description: 'Shadowed 12 clinical staff across 2 hospital sites for a total of 60 hours. Mapped every data touchpoint in their workflow and identified the 6 "moments of decision" where better data would most change outcomes.' },
      { step: '02', title: 'Data Architecture', description: 'Worked with the backend team to restructure API endpoints around user tasks rather than data tables. Identified 8 derived metrics that were more clinically relevant than the raw data being displayed.' },
      { step: '03', title: 'Visualization Design', description: 'Designed a custom chart library of 12 chart types optimized for clinical contexts, with strict accessibility compliance (WCAG AA). All charts designed to print cleanly for ward handover sheets.' },
      { step: '04', title: 'Progressive Disclosure', description: 'Built a 3-layer information architecture: summary card → trend chart → record table. Users can drill down to any individual patient record from a high-level KPI within 2 clicks.' },
    ],
    metrics: [
      { value: '3', label: 'Hospitals Launched', color: 'sky' },
      { value: '-45%', label: 'Time to Insight', color: 'orange' },
      { value: '92%', label: 'Staff Adoption Rate', color: 'sky' },
      { value: '12', label: 'Custom Chart Types', color: 'orange' },
    ],
    deliverables: [
      'Executive summary dashboard (real-time KPIs)',
      'Department-level performance views',
      'Patient outcome trend analytics',
      'Operational efficiency module',
      'Custom clinical chart component library',
      'Role-based access and view configurations',
      'Print-ready report templates',
      'Accessibility audit report (WCAG AA)',
    ],
  },
  {
    id: 5,
    slug: 'executive-leadership-search',
    category: 'talent',
    label: 'Talent',
    title: 'Executive Leadership Search',
    description: 'Placed C-suite executives for multiple Fortune 500 companies across various industries with a 100% retention rate at 18 months.',
    tags: ['Executive Search', 'Leadership', 'Corporate'],
    result: '100% retention',
    image: 'https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3MzQ3MzU0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
    client: 'Multiple Fortune 500 clients',
    industry: 'Cross-Industry (Tech, Finance, FMCG)',
    duration: '8 months',
    year: '2023',
    role: 'Executive Search Lead',
    overview: 'Over an 8-month retainer, we conducted C-suite searches for 4 different Fortune 500 companies simultaneously. Each search required deep market intelligence, careful candidate assessment against both technical capability and cultural fit, and the discretion demanded by high-stakes executive hiring. All 4 placements remain in post 18 months later — an industry-beating retention figure.',
    challenge: 'C-suite searches are among the most complex in talent acquisition. Candidates are not actively looking, expect a bespoke experience, and can withdraw at any point if the process feels transactional. Two of our client companies had specific DEI commitments that required actively developing a diverse shortlist, and one search was under confidentiality restrictions that prohibited market advertising entirely.',
    approachSteps: [
      { step: '01', title: 'Role Specification', description: 'Facilitated multi-day stakeholder workshops with each board to define role requirements, culture fit criteria, success metrics for year 1-3, and compensation framework. Produced a 12-page role specification for each search.' },
      { step: '02', title: 'Market Mapping', description: 'Built exhaustive long lists of 60-80 potential candidates per role using proprietary research, analyst reports, industry networks, and conference proceedings. Mapped each candidate against a 12-dimension competency framework.' },
      { step: '03', title: 'Candidate Development', description: 'Conducted confidential outreach and 90-minute structured assessment interviews with all longlisted candidates. Produced detailed written assessments covering capability, motivation, and cultural alignment.' },
      { step: '04', title: 'Shortlist & Selection', description: 'Presented a shortlist of 3-5 candidates per role with comparative analysis. Facilitated all client-candidate interactions, managed scheduling, and provided real-time coaching to both parties throughout.' },
      { step: '05', title: 'Offer & Integration', description: 'Managed complex offer negotiations involving equity, deferred compensation, and relocation packages. Provided executive integration coaching for the first 90 days post-hire.' },
    ],
    metrics: [
      { value: '100%', label: 'Retention at 18 Months', color: 'sky' },
      { value: '4', label: 'C-Suite Placements', color: 'orange' },
      { value: '78 days', label: 'Avg. Time to Placement', color: 'sky' },
      { value: '100%', label: 'Offer Acceptance Rate', color: 'orange' },
    ],
    deliverables: [
      '4 C-suite placements (2× CPO, 1× CFO, 1× CMO)',
      'Role specification documents for all 4 searches',
      'Market mapping reports (60-80 candidates each)',
      'Candidate assessment reports (written, 4-6 pages each)',
      'Comparative shortlist analysis',
      'Compensation benchmarking data',
      '90-day executive integration plans',
    ],
    testimonial: {
      quote: 'We\'ve worked with the biggest names in executive search. Collabrix matched the quality of research and candidate experience at a fraction of the cost and timeline. Their 100% retention record speaks for itself.',
      author: 'David Walsh',
      role: 'Chief People Officer',
      company: 'Fortune 500 Client (confidential)',
    },
  },
  {
    id: 6,
    slug: 'brand-identity-system',
    category: 'design',
    label: 'Design',
    title: 'Brand Identity System',
    description: 'Created a complete brand identity and visual guidelines for a modern sustainable fashion brand entering global markets.',
    tags: ['Branding', 'Identity', 'Fashion'],
    result: 'Global launch',
    image: 'https://images.unsplash.com/photo-1763705857736-2b4f16a33758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nbyUyMHZpc3VhbCUyMHN5c3RlbXxlbnwxfHx8fDE3NzM0NzM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Verdura Label',
    industry: 'Sustainable Fashion',
    duration: '10 weeks',
    year: '2024',
    role: 'Brand Strategy & Identity Design',
    overview: 'Verdura Label was a sustainable fashion brand founded by two designers with a clear ethical mission but no visual identity to match. They were entering 12 global markets simultaneously and needed a brand system that could speak to Gen Z consumers in both emerging and established markets, work across digital and physical touchpoints, and express their sustainability credentials without being preachy about it.',
    challenge: 'The founders had strong opinions about what the brand should feel like — premium but accessible, sustainable but not worthy — but their reference materials were contradictory. The brand needed to differentiate from a crowded space of greenwashed competitors, work in 12 languages across different cultural contexts, and be deployable immediately across a D2C website, retail packaging, social media, and pop-up store environments.',
    approachSteps: [
      { step: '01', title: 'Brand Strategy', description: 'Facilitated a 2-day brand workshop with the founders to define brand purpose, positioning, personality, and the specific territory of "premium sustainability" we wanted to own in the market. Produced a 20-page Brand Strategy Document.' },
      { step: '02', title: 'Visual Direction', description: 'Created 3 distinct visual directions, each with its own logic, aesthetic approach, and market positioning. Presented with moodboards, type pairings, and colour system explorations. The chosen direction was refined over 2 rounds.' },
      { step: '03', title: 'Logo & Identity System', description: 'Developed the primary mark, wordmark, and a suite of secondary graphic devices. Built a flexible system that works from app icons (16px) to billboard scale without losing integrity.' },
      { step: '04', title: 'Brand Guidelines', description: 'Produced a comprehensive 80-page brand guidelines document covering logo usage, typography, colour, photography style, illustration, iconography, tone of voice, and incorrect usage examples. Built for a global team to maintain consistently.' },
    ],
    metrics: [
      { value: '12', label: 'Markets Launched', color: 'sky' },
      { value: '+200%', label: 'Brand Recognition', color: 'orange' },
      { value: '80pp', label: 'Brand Guidelines', color: 'sky' },
      { value: '10wk', label: 'Delivery Timeline', color: 'orange' },
    ],
    deliverables: [
      'Brand strategy document (20 pages)',
      'Logo system (primary, secondary, icon variants)',
      'Full typography system (2 typefaces, 8 weights)',
      'Colour palette (12 primary + 6 supporting tones)',
      'Photography & art direction guidelines',
      'Packaging design (3 SKU types)',
      'Social media template suite (40 templates)',
      'Brand guidelines document (80 pages)',
    ],
    testimonial: {
      quote: 'We had a vision but no language for it. Collabrix found a way to make it real. The brand they gave us has opened doors with retailers and press we never expected to reach in year one.',
      author: 'Nadia Osei',
      role: 'Co-founder',
      company: 'Verdura Label',
    },
  },
  {
    id: 7,
    slug: 'design-team-expansion',
    category: 'talent',
    label: 'Talent',
    title: 'Design Team Expansion',
    description: 'Built a complete design team of 12 members for a rapidly scaling digital agency, including a Head of Design and 4 senior UX leads.',
    tags: ['Team Building', 'Design', 'Agency'],
    result: '12 designers placed',
    image: 'https://images.unsplash.com/photo-1764810815228-b7f9432eec5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM0NzM1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Axiom Digital Agency',
    industry: 'Digital Agency',
    duration: '3 months',
    year: '2023',
    role: 'Talent Lead & Team Architecture',
    overview: 'Axiom Digital won three major accounts simultaneously and needed to build a design capability from near-zero. With no existing design infrastructure, no hiring playbook, and a founder who had never managed a creative team, we built their entire design function: from defining what the team should look like, to finding and placing all 12 people in under 90 days.',
    challenge: 'Axiom had 3 accounts starting within 90 days and no design team to serve them. The Head of Design role had been filled and left twice in the previous year due to poor culture fit. The agency market was competitive for senior design talent, and Axiom\'s brand was not well known enough to attract passive candidates through job postings alone. The founder\'s lack of design hiring experience meant we needed to educate as well as recruit.',
    approachSteps: [
      { step: '01', title: 'Team Architecture', description: 'Designed the organisational structure of the design team before any recruiting began — roles, seniority levels, reporting lines, and how the team would interface with client services. Produced a Team Architecture Deck for the board.' },
      { step: '02', title: 'Head of Design Search', description: 'Ran a targeted executive search for the Head of Design role first, as all other placements depended on finding the right leader. Approached 45 candidates confidentially, presented a shortlist of 4, and placed within 4 weeks.' },
      { step: '03', title: 'Team Build-Out', description: 'Working in close partnership with the new HoD, sourced and screened candidates for the remaining 11 roles across UX research, UI design, motion, and brand. Used portfolio reviews as the primary assessment tool.' },
      { step: '04', title: 'Culture & Onboarding', description: 'Designed a 2-week induction programme that brought all 12 designers together before client work began. Built team rituals, critique frameworks, and a design principles document co-created by the new team.' },
    ],
    metrics: [
      { value: '12', label: 'Designers Placed', color: 'sky' },
      { value: '90', label: 'Day Build', color: 'orange' },
      { value: '5yr+', label: 'Avg. Experience', color: 'sky' },
      { value: '100%', label: 'Still Active at 12m', color: 'orange' },
    ],
    deliverables: [
      'Team architecture and org design document',
      'Head of Design placement (executive search)',
      '4 Senior UX Lead placements',
      '3 Mid-level UI Designer placements',
      '2 Brand & Motion Designer placements',
      '2 UX Researcher placements',
      'Interview frameworks & portfolio review criteria',
      '2-week team induction programme',
    ],
  },
  {
    id: 8,
    slug: 'saas-product-redesign',
    category: 'design',
    label: 'Design',
    title: 'SaaS Product Redesign',
    description: 'Comprehensive product redesign that increased user retention by 40%, reduced support tickets by 60%, and improved NPS by 35 points.',
    tags: ['SaaS', 'Product Design', 'B2B'],
    result: '+40% retention',
    image: 'https://images.unsplash.com/photo-1548524238-a971a4a3b523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwc2NyZWVufGVufDF8fHx8MTc3MzQ2NTQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Fieldwork (B2B SaaS)',
    industry: 'Project Management SaaS',
    duration: '20 weeks',
    year: '2024',
    role: 'Product Design & UX Strategy',
    overview: 'Fieldwork is a project management platform for architecture firms. Despite strong feature parity with competitors, they were losing users at a rate that threatened the business. The culprit was a UI built by engineers without design input — functional, but with no consideration for the cognitive demands of the professionals using it daily. We redesigned the product end-to-end with a focus on reducing friction and surfacing the right information at the right time.',
    challenge: 'Fieldwork had a churn rate of 8.5% per month — industry standard is 2-3%. User interviews revealed that people liked the features but found the interface exhausting to use. Support was overwhelmed with tickets for tasks that should have been self-explanatory. The codebase was tightly coupled to the UI, making incremental improvements slow and risky. The redesign needed to be modular enough to ship in phases without breaking existing users.',
    approachSteps: [
      { step: '01', title: 'Churn Analysis', description: 'Analysed 18 months of session recordings, support tickets, and exit survey data to map the exact moments where users gave up. Identified 6 high-friction zones accounting for 78% of all support volume.' },
      { step: '02', title: 'User Research', description: 'Conducted 22 in-depth interviews with active and churned users. Built an empathy map and 3 primary personas representing the actual diversity of Fieldwork\'s user base, from solo architects to project leads at 200-person firms.' },
      { step: '03', title: 'Navigation Redesign', description: 'Rebuilt the information architecture around "project context" rather than "feature modules". Users now have a single project workspace containing all relevant tools, rather than navigating between disconnected screens.' },
      { step: '04', title: 'Design System', description: 'Built a component library of 180 components designed for data density — the power users who needed Fieldwork most required information-rich views, not the empty-state minimalism common in consumer SaaS.' },
      { step: '05', title: 'Phased Rollout', description: 'Delivered the redesign in 4 phases, each independently deployable. This allowed Fieldwork to ship improvements on a 6-week cadence rather than waiting for a complete overhaul, reducing risk and maintaining user trust throughout.' },
    ],
    metrics: [
      { value: '+40%', label: 'User Retention', color: 'sky' },
      { value: '-60%', label: 'Support Tickets', color: 'orange' },
      { value: '+35', label: 'NPS Improvement', color: 'sky' },
      { value: '180', label: 'Components Built', color: 'orange' },
    ],
    deliverables: [
      'Full product redesign (180+ screens)',
      'Component library (180 components)',
      'Navigation & IA restructure',
      'Onboarding flow redesign',
      'Dashboard & project workspace redesign',
      'Reporting & analytics module',
      'Mobile-responsive breakpoint system',
      'Phased delivery roadmap (4 phases)',
    ],
    testimonial: {
      quote: 'We knew the product had problems but didn\'t know how to fix them. Collabrix gave us not just a beautiful redesign, but a complete understanding of why users were struggling. The impact on churn has been transformational for our business.',
      author: 'Tom Ashby',
      role: 'CEO',
      company: 'Fieldwork',
    },
  },
];
