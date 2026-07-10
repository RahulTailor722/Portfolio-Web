export const skills = [
  { name: "HTML5", level: 100, icon: "/images/tech/html5.svg" },
  { name: "CSS3", level: 100, icon: "/images/tech/css3.svg" },
  { name: "JavaScript", level: 90, icon: "/images/tech/javascript.svg" },
  { name: "React JS", level: 85, icon: "/images/tech/react.svg" },
  { name: "Tailwind CSS", level: 100, icon: "/images/tech/tailwindcss.svg" },
  { name: "Figma", level: 100, icon: "/images/tech/figma.svg" },
  { name: "Git", level: 85, icon: "/images/tech/git.svg" },
  { name: "GSAP", level: 80, icon: "/images/tech/greensock.svg" },
  { name: "HubSpot", level: 85, icon: "/images/tech/hubspot.svg" },
  { name: "WordPress", level: 80, icon: "/images/tech/wordpress.svg" },
]

export const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GSAP",
  "HubSpot",
  "WordPress",
  "Next.js",
  "TypeScript",
  "Framer Motion",
]

export const services = [
  {
    id: "01",
    slug: "user-research",
    title: "User Research",
    desc: "I analyze user behavior and needs to uncover insights that shape impactful experiences and guide design decisions.",
    longDesc:
      "Before a single pixel gets designed, I dig into who the product is actually for. That means talking to real users and stakeholders, mapping how people currently get the job done, and finding the friction points a redesign should remove — so every later decision traces back to evidence, not opinion.",
    tags: ["UX Research", "User Interviews", "Usability Testing"],
    deliverables: [
      "Stakeholder & user interviews",
      "Competitive & heuristic analysis",
      "User personas & journey maps",
      "Usability testing & findings reports",
    ],
  },
  {
    id: "02",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    desc: "I craft clean and intuitive interfaces that blend aesthetics with usability, ensuring seamless journeys across web and mobile.",
    longDesc:
      "I design interfaces that look premium and hold up under real use — clear hierarchy, accessible contrast, and interaction patterns people already understand. Wireframes and prototypes get tested early, so by the time development starts, the design has already been validated rather than guessed at.",
    tags: ["Wireframing", "Prototyping", "Interaction Design"],
    deliverables: [
      "Low & high-fidelity wireframes",
      "Interactive Figma prototypes",
      "Design systems & component libraries",
      "Motion & micro-interaction specs",
    ],
  },
  {
    id: "03",
    slug: "frontend-development",
    title: "Frontend Development",
    desc: "I transform designs into fast, responsive, and accessible digital products using modern frontend frameworks and best practices.",
    longDesc:
      "Design only matters if it ships fast and works everywhere. I build with componentized, semantic markup, keep bundles lean, and treat Core Web Vitals as a requirement rather than an afterthought — so the finished site feels as fast as it looks, on every device.",
    tags: ["React JS", "Next JS", "Tailwind"],
    deliverables: [
      "Responsive, accessible markup",
      "Component-driven React/Gatsby/Next.js builds",
      "Performance & Core Web Vitals tuning",
      "Cross-browser & cross-device QA",
    ],
  },
  {
    id: "04",
    slug: "deployment",
    title: "Deployment",
    desc: "I ensure smooth deployment of applications with optimized performance, scalability, and seamless integration across environments.",
    longDesc:
      "Launch day shouldn't be stressful. I set up the build pipeline, hosting, caching, and monitoring ahead of time, so shipping is a routine push rather than a fire drill — with a clear handover so the site stays easy to maintain long after launch.",
    tags: ["Vercel", "Netlify", "CI/CD"],
    deliverables: [
      "CI/CD pipeline setup",
      "Netlify/Vercel environment configuration",
      "Pre-launch performance & SEO audit",
      "Post-launch monitoring handover",
    ],
  },
]

export const projects = [
  {
    slug: "guided-lxp",
    title: "Guided LXP",
    client: "Guided LXP",
    category: "SaaS / Learning Platform",
    industry: "EdTech / SaaS",
    year: "2025",
    liveUrl: "https://www.guidedlxp.com/",
    image: "/images/projects/guided-lxp-cover.png",
    imageSm: "/images/projects/guided-lxp-cover.png",
    desc: "The marketing site for an all-in-one, white-label Learning Experience Platform that helps growing teams onboard, upskill, and retain talent without building from scratch.",
    tags: ["SaaS", "UI/UX", "Landing Page", "Motion"],
    overview:
      "Guided LXP is a white-label learning platform sold to growing teams that want a branded training experience without engineering one in-house. The marketing site had to make an abstract SaaS product feel tangible and trustworthy — leading with a product dashboard preview, clear outcomes, and social proof rather than feature jargon.\n\nThe build is a conversion-focused single page: a bold centered hero with playful floating cursor cues, a four-column benefits grid, a client-logo marquee, a testimonials carousel, three-tier pricing, and an FAQ accordion — all funnelling toward a single \"Book a Demo\" action.",
    approach: [
      {
        title: "Narrative & Layout",
        desc: "Structured the page around outcomes (onboard faster, upskill smarter, retain talent) with a dashboard preview as the hero anchor to make the product concrete.",
      },
      {
        title: "Interaction & Motion",
        desc: "Added floating cursor tags around the hero and subtle scroll reveals to give an otherwise clean SaaS layout a sense of movement and interactivity.",
      },
      {
        title: "Conversion Structure",
        desc: "Designed the benefits grid, testimonials carousel, three-tier pricing, and FAQ to pre-answer objections and drive toward the single Book-a-Demo CTA.",
      },
    ],
    challenge:
      "Selling a white-label platform means the product itself is intentionally generic — the site had to create desire and trust through presentation, proof, and clarity rather than a distinctive product UI.",
    outcome: [
      "Conversion-focused single-page site anchored by a product dashboard preview",
      "Playful floating-cursor hero and scroll motion layered over a clean SaaS layout",
      "Benefits grid, testimonials, three-tier pricing, and FAQ funnelling to one primary CTA",
    ],
  },
  {
    slug: "arms-of-eve",
    title: "Arms of Eve",
    client: "Arms of Eve",
    category: "Jewelry E-commerce",
    industry: "Fashion & Jewelry",
    year: "2024",
    liveUrl: "https://us.armsofeve.com/",
    image: "/images/projects/arms-of-eve-cover-1600.webp",
    imageSm: "/images/projects/arms-of-eve-cover-800.webp",
    desc: "The US storefront for a tarnish-free, waterproof jewellery brand, built for fast product discovery and a premium unboxing-driven checkout journey.",
    tags: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
    overview:
      "Arms of Eve sells tarnish-free, waterproof jewellery shipped worldwide in signature ribbon-wrapped packaging. The US storefront needed to carry that same premium, gift-ready feel online while handling a large, fast-moving catalogue across earrings, bracelets, necklaces, rings, and seasonal gifting collections.\n\nThe build focused on merchandising flexibility — collection and \"Shop By\" navigation that scales as new drops launch — paired with clear trust signals (free shipping thresholds, a 1-year guarantee, Afterpay) placed exactly where shoppers hesitate at checkout.",
    approach: [
      {
        title: "Research & Merchandising Audit",
        desc: "Mapped the product catalogue and gifting flows to design a navigation and collection structure that stays clear as SKUs and seasonal drops multiply.",
      },
      {
        title: "Theme Build & Componentization",
        desc: "Built reusable Shopify Liquid sections and JavaScript-driven components for collection grids, gift bundling, and quick-add interactions.",
      },
      {
        title: "Conversion & Performance Pass",
        desc: "Tuned page speed, image loading, and checkout trust messaging (shipping, guarantee, Afterpay) to reduce friction at the point of purchase.",
      },
    ],
    challenge:
      "Jewellery e-commerce lives or dies on product photography — the theme had to stay visually light while still rendering large image-heavy collection and gift-bundle pages quickly on mobile, where most of the brand's traffic converts.",
    outcome: [
      "Shipped a scalable Shopify theme covering the full catalogue: earrings, bracelets, necklaces, rings, accessories, and gifting",
      "Streamlined \"Shop By\" navigation and gift-bundle merchandising for faster product discovery",
      "Checkout-adjacent trust signals (shipping threshold, guarantee, Afterpay) integrated without adding page weight",
    ],
  },
  {
    slug: "aussie-chef",
    title: "Aussie Chef",
    client: "Aussie Chef Clothing Company",
    category: "Hospitality Workwear E-commerce",
    industry: "Retail & Hospitality",
    year: "2023",
    liveUrl: "https://www.aussiechef.com.au/",
    image: "/images/projects/aussie-chef-cover-1600.webp",
    imageSm: "/images/projects/aussie-chef-cover-800.webp",
    desc: "An e-commerce rebuild for Australia's leading supplier of professional chef uniforms, covering jackets, aprons, pants, and hospitality footwear.",
    tags: ["Shopify", "E-commerce", "UI/UX"],
    overview:
      "Aussie Chef has outfitted hospitality professionals for over 40 years, selling chef jackets, pants, aprons, shoes, hats, and accessories across a large catalogue of colours and styles. The storefront needed clean, product-first browsing for both individual shoppers and bulk hospitality buyers.\n\nThe work centred on a professional, catalogue-style layout: hero banners for seasonal ranges, category-led navigation for jackets/pants/aprons/shoes, and a \"Favourites\" merchandising rail to surface bestsellers like the ARLO, ALEX, and TOMY aprons.",
    approach: [
      {
        title: "Catalogue Structuring",
        desc: "Organised chef jackets, pants, aprons, shoes, and accessories into a category system built to handle high colour/size variant counts cleanly.",
      },
      {
        title: "UI & Component Design",
        desc: "Designed and built the hero carousel, favourites rail, and partner-logo trust section shown across the homepage.",
      },
      {
        title: "Launch & Optimisation",
        desc: "Implemented shipping-threshold and returns messaging, then optimised imagery and layout for fast mobile browsing.",
      },
    ],
    challenge:
      "With a decades-old catalogue spanning dozens of styles and colourways, the challenge was presenting that breadth without overwhelming shoppers — while keeping load times fast on product-photo-heavy category pages.",
    outcome: [
      "Rebuilt category browsing across jackets, pants, aprons, shoes, and accessories",
      "Added a bestseller \"Favourites\" merchandising rail and partner trust-logo section",
      "Implemented free-shipping-threshold and 30-day-returns messaging at key decision points",
    ],
  },
  {
    slug: "sardes",
    title: "Sardes",
    client: "Sardes (Stichting CAOP)",
    category: "Corporate & Education Consultancy",
    industry: "Education / Public Sector",
    year: "2024",
    liveUrl: "https://sardes.nl/",
    image: "/images/projects/sardes-cover-1600.webp",
    imageSm: "/images/projects/sardes-cover-800.webp",
    desc: "A corporate site for a 30-year-old Dutch education research and advisory organisation, built around six thematic focus areas and ongoing project showcases.",
    tags: ["WordPress", "Content Strategy", "Accessibility"],
    overview:
      "Sardes advises schools, childcare organisations, and government bodies on equal opportunities in education — spanning inclusive education, language development, and early-childhood quality. The site needed to present dense research and advisory content in a way that stays approachable for policymakers, schools, and parents alike.\n\nThe structure organises the organisation's work into six thematic pillars, with dedicated space for client project showcases, a training/event calendar, and ongoing publications — all on a clean, accessible, whitespace-driven layout.",
    approach: [
      {
        title: "Content Architecture",
        desc: "Restructured dense advisory and research content into six clear thematic pillars for easier navigation.",
      },
      {
        title: "Accessible Component Design",
        desc: "Built card-based layouts for project showcases, training calendars, and publications with accessibility as a first-class requirement.",
      },
      {
        title: "Editorial Rollout",
        desc: "Set up the CMS structure so the team can publish news, training dates, and publications without developer involvement.",
      },
    ],
    challenge:
      "Education-policy content is naturally text-heavy and technical; the goal was to keep the site scannable and welcoming for non-specialist visitors without flattening the nuance of the organisation's research.",
    outcome: [
      "Six thematic focus areas restructured into clear, navigable sections",
      "Card-based system built for client project showcases and the training/event calendar",
      "Editorial workflow set up for ongoing news and publication updates",
    ],
  },
  {
    slug: "buro-koorts",
    title: "Buro Koorts",
    client: "Buro Koorts",
    category: "Marketing Agency Website",
    industry: "Marketing & Advertising",
    year: "2023",
    liveUrl: "https://www.burokoorts.nl/",
    image: "/images/projects/buro-koorts-cover-1600.webp",
    imageSm: "/images/projects/buro-koorts-cover-800.webp",
    desc: "A results-driven marketing site for a Dutch full-service agency, built to convert visiting SMBs into qualified leads through client proof and clear service tiers.",
    tags: ["WordPress", "SEO", "Lead Generation"],
    overview:
      "Buro Koorts positions itself as an outsourced marketing team for mid-market companies, covering strategy, lead generation, branding, SEO, and content. The site needed to sell that promise through credibility — real client references, a transparent process, and clear subscription tiers — rather than generic agency copy.\n\nThe build leans on a four-step process narrative (goal-setting, execution, reporting, continuous growth), a team-introduction section, and a detailed FAQ to pre-answer objections before a prospect ever reaches the contact form.",
    approach: [
      {
        title: "Positioning & Proof",
        desc: "Structured the homepage around client references and a transparent four-step process instead of generic service copy.",
      },
      {
        title: "Service Tier Presentation",
        desc: "Designed clear subscription-tier comparisons (Groeiprogramma, Goed, Best) to help prospects self-select the right engagement.",
      },
      {
        title: "SEO & Lead-Path Optimisation",
        desc: "Implemented on-page SEO fundamentals and a focused FAQ section to reduce drop-off before the contact step.",
      },
    ],
    challenge:
      "Agency websites are a crowded, skeptical market — the site had to earn trust fast with concrete client proof and a legible process, rather than relying on broad claims.",
    outcome: [
      "Homepage rebuilt around real client references and a four-step process narrative",
      "Clear subscription-tier comparison for self-service prospect qualification",
      "On-page SEO and FAQ section implemented to support organic lead generation",
    ],
  },
  {
    slug: "werken-bij-hubo",
    title: "Werken bij Hubo",
    client: "Hubo",
    category: "Careers / Recruitment Portal",
    industry: "Retail / DIY",
    year: "2022",
    liveUrl: "https://werkenbijhubo.nl/",
    image: "/images/projects/werken-bij-hubo-cover-1600.webp",
    imageSm: "/images/projects/werken-bij-hubo-cover-800.webp",
    desc: "A dedicated careers portal for Hubo's 160+ Dutch DIY stores, built around live vacancy search and franchise-opportunity discovery.",
    tags: ["WordPress", "Careers Portal", "Vacancy Search"],
    overview:
      "Hubo runs 160+ home-improvement stores across the Netherlands and needed a recruitment site separate from its main retail brand — one focused entirely on getting candidates from \"browsing roles\" to \"applying\" as quickly as possible.\n\nThe portal centres on a searchable vacancy listing (cashier, store assistant, and helper roles across locations), supported by a short company-story section and a clear path into franchise-opportunity enquiries.",
    approach: [
      {
        title: "Candidate-Journey Mapping",
        desc: "Prioritised the vacancy search and application path above brand storytelling, based on how retail candidates actually browse job sites.",
      },
      {
        title: "Search & Listing UI",
        desc: "Built the job search/filter experience and featured-vacancy cards for cashier, assistant, and helper roles.",
      },
      {
        title: "Franchise & Contact Funnels",
        desc: "Added a distinct path for franchise-opportunity enquiries alongside the standard vacancy-application flow.",
      },
    ],
    challenge:
      "Retail recruitment sites need to serve two very different visitors — hourly-role candidates and prospective franchisees — without either group getting lost in the other's journey.",
    outcome: [
      "Searchable vacancy portal shipped across cashier, assistant, and helper roles",
      "Featured-vacancy and company-value sections built to reinforce employer brand",
      "Separate franchise-enquiry path added alongside the core application flow",
    ],
  },
  {
    slug: "swati-procon",
    title: "Swati Procon",
    client: "Swati Procon",
    category: "Real Estate Developer",
    industry: "Real Estate & Construction",
    year: "2022",
    liveUrl: "https://www.swatiprocon.com/",
    image: "/images/projects/swati-procon-cover-1600.webp",
    imageSm: "/images/projects/swati-procon-cover-800.webp",
    desc: "A project-showcase site for an Ahmedabad-based luxury real estate developer, spanning residential and commercial developments.",
    tags: ["Custom CMS", "React", "Project Showcase"],
    overview:
      "Swati Procon develops residential apartments and commercial office/retail spaces across Ahmedabad, with a portfolio spanning ongoing landmark projects to completed developments. The site needed to present that scale — 50L+ sq. ft. constructed, 25+ landmarks — while making it easy to browse individual residential and commercial projects.\n\nNavigation splits cleanly between Residential and Offices & Retail, with dedicated project pages for flagship developments (Swati Signia, Swati 18, Swati Premier, Swati Trinity) alongside a completed-projects archive.",
    approach: [
      {
        title: "Portfolio Structuring",
        desc: "Split the project catalogue into Residential and Offices & Retail categories, with ongoing vs. completed status per development.",
      },
      {
        title: "Project Page Templates",
        desc: "Designed reusable project-detail templates covering flagship developments like Swati Signia and Swati Trinity.",
      },
      {
        title: "Trust & Scale Signals",
        desc: "Surfaced company statistics (sq. ft. constructed, landmarks delivered, families housed) prominently on the homepage.",
      },
    ],
    challenge:
      "Real estate buyers need to trust the developer before trusting the property — the site had to convey scale and track record credibly, without turning the homepage into a wall of statistics.",
    outcome: [
      "Portfolio reorganised into clear Residential and Offices & Retail categories",
      "Reusable project-detail template shipped across flagship developments",
      "Company-scale statistics (sq. ft. built, landmarks, families housed) integrated into the homepage narrative",
    ],
  },
]

export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Pixelforge Studio",
    period: "2022 — Present",
    desc: "Leading frontend for flagship client products, building design systems and mentoring a team of 5 developers.",
  },
  {
    role: "Frontend Developer",
    company: "Brightwave Digital",
    period: "2020 — 2022",
    desc: "Delivered high-performance marketing sites and web apps with React, Next.js and HubSpot CMS.",
  },
  {
    role: "UI Developer",
    company: "Nimbus Labs",
    period: "2019 — 2020",
    desc: "Translated Figma designs into responsive, accessible interfaces and reusable component libraries.",
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    period: "2018 — 2019",
    desc: "Built websites for local businesses and startups while sharpening core web fundamentals.",
  },
]

// NOTE: attributions below are realistic placeholders — swap in the real
// client names/roles (with their permission) before publishing.
export const testimonials = [
  {
    quote:
      "We sell a white-label platform, which is genuinely hard to make look exciting. Rahul made it feel tangible — the dashboard hero, the playful cursor touches, the way every section funnels to one demo button. It's the best-converting page we've ever run.",
    name: "Daniel Whitmore",
    role: "Co-founder",
    company: "Guided LXP",
    project: "SaaS Marketing Site",
    sector: "EdTech · SaaS",
  },
  {
    quote:
      "Our catalogue is huge and photography-heavy, and mobile speed was hurting us. Rahul rebuilt the storefront so it loads fast without losing the premium, gift-ready feel our brand depends on — and the gifting flows he built still convert beautifully a year on.",
    name: "Sophie Callahan",
    role: "E-commerce Manager",
    company: "Arms of Eve",
    project: "Shopify Storefront",
    sector: "Fashion & Jewellery",
  },
  {
    quote:
      "Working across time zones with a developer usually means slow feedback loops. Not with Rahul. Communication was sharp, deadlines were never a question, and he pushed back with better ideas whenever our brief was vague.",
    name: "Mark Vermeulen",
    role: "Founder",
    company: "Buro Koorts",
    project: "Agency Website",
    sector: "Marketing & Advertising",
  },
  {
    quote:
      "Our research content is dense and technical, and every agency before had flattened it. Rahul restructured thirty years of work into six clear themes and made the site genuinely approachable — with accessibility as his starting point, not an afterthought.",
    name: "Annemieke de Boer",
    role: "Communications Lead",
    company: "Sardes",
    project: "Corporate Website",
    sector: "Education & Public Sector",
  },
  {
    quote:
      "We needed candidates across 160+ stores to get from browsing to applying in as few steps as possible. The vacancy search Rahul built did exactly that — applications rose noticeably within the first quarter of launch.",
    name: "Peter Janssen",
    role: "Recruitment Manager",
    company: "Hubo",
    project: "Careers Portal",
    sector: "Retail · DIY",
  },
  {
    quote:
      "Forty years of catalogue is a lot of product to untangle. Rahul organised it so a single chef and a hotel buying in bulk can both find what they need in seconds. Clean, fast, and delivered ahead of schedule.",
    name: "James Hartley",
    role: "Managing Director",
    company: "Aussie Chef",
    project: "E-commerce Rebuild",
    sector: "Hospitality Workwear",
  },
]

export const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 60, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 14, suffix: "", label: "Technologies mastered" },
]
