/**
 * Single source of truth for all portfolio content.
 * Edit the values here to update the site — no component changes needed.
 * Placeholders marked with TODO are safe to replace with your real links/assets.
 */

export const profile = {
  name: "Nur Aina Saipulismi",
  role: "Frontend Developer",
  discipline: "Data Visualization & Interactive Systems",
  location: "Malaysia",
  email: "nuraina@intekma.net",
  // TODO: replace with your real profile links
  links: {
    resume: "/resume.pdf",
    linkedin: "https://www.linkedin.com/in/nuraina",
    github: "https://github.com/nuraina",
  },
  availability: "Open to Product / Frontend Engineering roles",
};

export const hero = {
  headline:
    "Building enterprise software that transforms complex workflows into intuitive digital experiences.",
  subhead:
    "I'm a frontend developer specializing in data-dense dashboards, reporting systems, and intelligent interfaces. I care less about writing code and more about the product it becomes — clarity, flow, and the business outcome on the other side.",
  metrics: [
    { value: "5+", label: "Enterprise products shipped" },
    { value: "40+", label: "Reusable UI components built" },
    { value: "AI", label: "Assistants integrated into workflows" },
  ],
};

export const about = {
  intro:
    "I design and build the surface where people actually do their work — the dashboards they check every morning, the reports they send to leadership, the forms that move a claim forward. My goal is to make software that feels obvious.",
  principles: [
    {
      title: "Product before pixels",
      body: "I start from the business problem and the user's day, not the component library. The best interface is the one nobody has to think about.",
    },
    {
      title: "Complexity, made calm",
      body: "Enterprise data is messy. My job is to give it structure — hierarchy, defaults, and progressive disclosure — so the screen never overwhelms.",
    },
    {
      title: "Systems, not screens",
      body: "I build reusable, documented component systems so products stay consistent and teams move faster as they scale.",
    },
    {
      title: "AI as an assistant, not a gimmick",
      body: "I integrate AI where it removes real friction — grammar assistance, drafting, summarization — inside the flow people already use.",
    },
  ],
  journey: [
    {
      year: "Foundation",
      title: "Multimedia Computing background",
      body: "Studied Multimedia Computing — a blend of design, interaction, and engineering. This is where product thinking and visual craft became the same instinct.",
    },
    {
      year: "Craft",
      title: "The frontend journey",
      body: "Moved from static sites into React and TypeScript, and fell for the discipline of building interfaces that stay maintainable as they grow.",
    },
    {
      year: "Scale",
      title: "Enterprise software experience",
      body: "Shipped dashboards, editable reporting modules, and workflow tools used inside real organizations — where reliability and clarity are non-negotiable.",
    },
    {
      year: "Frontier",
      title: "Interest in AI & data",
      body: "Now integrating AI features and data visualization into enterprise products, and exploring how intelligent interfaces reshape everyday workflows.",
    },
  ],
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  summary: string;
  accent: string; // hex used for subtle per-project theming
  stack: string[];
  problem: string;
  role: string;
  responsibilities: string[];
  challenges: { title: string; body: string }[];
  designDecisions: { title: string; body: string }[];
  implementation: string;
  results: { value: string; label: string }[];
  lessons: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "vector",
    index: "01",
    name: "VECTOR",
    tagline: "Industrial Equipment Monitoring Platform",
    category: "Enterprise SaaS · Dashboards & Reporting",
    year: "2024–2025",
    accent: "#4f46e5",
    summary:
      "A monitoring and reporting platform for industrial equipment — combining live dashboards, an editable report module, collaborative review, and an AI grammar assistant into one workflow.",
    stack: ["React", "TypeScript", "shadcn/ui", "Django REST API", "ECharts", "Tailwind CSS"],
    problem:
      "Engineers monitoring industrial equipment lived across spreadsheets, disconnected charts, and email threads. Turning raw sensor and inspection data into a report that leadership could act on took days, and feedback got lost across tools. The business needed a single place to see equipment health, write the report, and review it together.",
    role:
      "Frontend Developer — owned the dashboard, reporting, and collaboration UI end to end, and shaped the frontend architecture the team built on.",
    responsibilities: [
      "Built enterprise dashboards that visualize equipment health and inspection metrics at a glance",
      "Developed an editable report module — a structured, document-style editor for engineers",
      "Implemented collaborative comments so reviewers can leave feedback in-context",
      "Integrated an AI Grammar Assistant to polish report language inside the editor",
      "Designed and built a library of reusable React components",
      "Integrated the Django REST API and modeled the frontend data layer",
      "Owned data visualization with ECharts across the dashboard surface",
    ],
    challenges: [
      {
        title: "Data density without overwhelm",
        body: "Equipment monitoring generates a firehose of metrics. The dashboard had to surface what matters now while keeping detail one click away — solved with a hierarchy of summary tiles, trend charts, and drill-downs.",
      },
      {
        title: "An editor that feels like a document",
        body: "Engineers expected a report to behave like a document, not a form. Building an editable module with structured sections, live data, and inline editing meant carefully managing state and autosave.",
      },
      {
        title: "Collaboration without chaos",
        body: "Threaded, in-context comments needed to attach to specific report regions and stay in sync as content changed — a subtle problem of anchoring feedback to living content.",
      },
    ],
    designDecisions: [
      {
        title: "Summary-first dashboard layout",
        body: "The top row answers 'is anything wrong?' in under three seconds. Everything else is progressive disclosure. This mirrors how engineers actually triage.",
      },
      {
        title: "Neutral canvas, purposeful color",
        body: "Charts use a restrained palette so a single alert color reads instantly. Color carries meaning, never decoration.",
      },
      {
        title: "AI inside the flow",
        body: "The grammar assistant lives in the editor's margin, not a separate tab — suggestions appear where the writing happens, so it assists rather than interrupts.",
      },
      {
        title: "A component system, not one-offs",
        body: "Every card, chart frame, and panel is a documented, reusable component — so new report types and dashboard views compose in hours, not weeks.",
      },
    ],
    implementation:
      "Built in React + TypeScript with a shadcn/ui foundation and Tailwind for styling. Dashboards render with ECharts wrapped in typed, reusable chart components with shared theming. The report module is a controlled, section-based editor with autosave and an AI grammar layer. Data flows from a Django REST API through a typed client with normalized caching, and the comment system anchors threads to report regions.",
    results: [
      { value: "1", label: "Unified surface replacing spreadsheets + email" },
      { value: "Days → mins", label: "Report drafting time collapsed" },
      { value: "40+", label: "Reusable components in the design system" },
    ],
    lessons:
      "The hardest part of enterprise UI isn't the framework — it's deciding what not to show. Ruthless hierarchy and a real component system did more for velocity and trust than any single feature. And AI lands best when it's quiet and in-context.",
    featured: true,
  },
  {
    slug: "igear",
    index: "02",
    name: "iGEAR",
    tagline: "Asset & Workflow Management Platform",
    category: "Enterprise SaaS · Workflow",
    year: "2024",
    accent: "#0ea5e9",
    summary:
      "An asset and workflow management platform where I focused on the claims workflow, an activity stream, and a series of UI and workflow optimizations that made everyday tasks faster.",
    stack: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    problem:
      "Teams managing assets were losing time in a claims process with too many steps and too little visibility into what changed and when. Users couldn't easily tell the status of a claim or the history behind an asset.",
    role:
      "Frontend Developer — improved core workflow surfaces and shipped UX refinements across the platform.",
    responsibilities: [
      "Rebuilt the claims workflow into clearer, guided steps",
      "Designed and implemented an Activity Stream for full change history",
      "Delivered UI improvements across key screens for consistency and clarity",
      "Optimized workflows to remove redundant steps and clicks",
    ],
    challenges: [
      {
        title: "A workflow with hidden state",
        body: "Claims moved through stages users couldn't see. The fix was making status and next-actions explicit at every step, so nobody had to guess what came next.",
      },
      {
        title: "Answering 'what changed?'",
        body: "Without history, trust erodes. The Activity Stream had to present a readable, chronological narrative of events without becoming noise.",
      },
    ],
    designDecisions: [
      {
        title: "Guided over open-ended",
        body: "Reframed the claims flow as a guided sequence with a clear primary action per step — reducing errors and hesitation.",
      },
      {
        title: "Activity as a timeline",
        body: "Grouped events by day with concise, human-readable entries so the stream reads like a story, not a log file.",
      },
      {
        title: "Consistency as a feature",
        body: "Aligned spacing, buttons, and states across screens — small consistency wins compound into a product that feels trustworthy.",
      },
    ],
    implementation:
      "Worked within a React + TypeScript codebase, refactoring the claims flow into composable step components and building the Activity Stream against the platform's REST API with clear empty, loading, and error states.",
    results: [
      { value: "Fewer steps", label: "Streamlined claims workflow" },
      { value: "Full history", label: "Activity Stream visibility" },
      { value: "Consistent", label: "Unified UI across screens" },
    ],
    lessons:
      "Most workflow pain isn't missing features — it's missing feedback. Making state and history visible did more for user confidence than any new capability.",
    featured: true,
  },
  {
    slug: "intekma",
    index: "03",
    name: "Intekma Corporate Website",
    tagline: "Corporate Website Rebuild & Migration",
    category: "Web · Performance & Migration",
    year: "2024",
    accent: "#059669",
    summary:
      "Migrated the company site off WordPress into a modern, maintainable React codebase — a responsive redesign with meaningful performance and maintainability gains.",
    stack: ["React", "Tailwind CSS", "Responsive Design"],
    problem:
      "The existing WordPress site was slow, hard to maintain, and inconsistent across devices. Content changes were risky and the codebase had accumulated years of plugin cruft.",
    role: "Frontend Developer — led the migration and responsive redesign.",
    responsibilities: [
      "Migrated the site from WordPress to a modern React stack",
      "Redesigned the experience to be fully responsive",
      "Improved load performance and Core Web Vitals",
      "Restructured the codebase for long-term maintainability",
    ],
    challenges: [
      {
        title: "Preserving content, shedding weight",
        body: "The migration had to keep every page and asset while dropping the plugin bloat that made WordPress slow — a careful audit-and-rebuild rather than a lift-and-shift.",
      },
      {
        title: "Responsive from the ground up",
        body: "Rather than patch the old breakpoints, the layout was rebuilt mobile-first so it holds up on every screen.",
      },
    ],
    designDecisions: [
      {
        title: "Componentized content",
        body: "Turned repeated page patterns into reusable components so future edits are safe and fast.",
      },
      {
        title: "Performance as design",
        body: "Optimized images, fonts, and rendering so the site feels instant — speed is part of a premium brand impression.",
      },
    ],
    implementation:
      "Rebuilt the site in React with Tailwind CSS, replacing WordPress templates with a component library, optimizing assets, and establishing a clean structure the team can maintain confidently.",
    results: [
      { value: "WordPress → React", label: "Modern, maintainable stack" },
      { value: "Faster", label: "Improved load performance" },
      { value: "Responsive", label: "Consistent across devices" },
    ],
    lessons:
      "A migration is a chance to pay down years of debt. Investing in a component structure up front turned a scary WordPress site into something the team can evolve without fear.",
    featured: false,
  },
  {
    slug: "anatomy-3d",
    index: "04",
    name: "Interactive 3D Anatomy",
    tagline: "3D Anatomy Learning Platform — Final Year Project",
    category: "EdTech · 3D & Interaction",
    year: "2023",
    accent: "#d97706",
    summary:
      "A web platform for learning human anatomy through interactive 3D models, built as my final year project in collaboration with Malaysia Airlines Academy.",
    stack: ["Google Model Viewer", "Firebase", "Bootstrap", "JavaScript", "HTML"],
    problem:
      "Anatomy is hard to learn from flat diagrams. Students needed a way to explore structures in three dimensions — rotating, zooming, and inspecting models — without specialized software.",
    role:
      "Designer & Developer — designed and built the platform end to end, in collaboration with Malaysia Airlines Academy.",
    responsibilities: [
      "Built interactive 3D model viewing with Google Model Viewer",
      "Designed an accessible, responsive learning interface",
      "Integrated Firebase for data and content",
      "Shaped the learning flow with the Malaysia Airlines Academy partner",
    ],
    challenges: [
      {
        title: "3D on the web, for everyone",
        body: "Delivering smooth 3D interaction in the browser — across devices and without heavy installs — meant leaning on Model Viewer and optimizing model assets.",
      },
      {
        title: "Learning, not just looking",
        body: "The interaction had to teach: guiding attention to the right structures rather than dropping students into an empty 3D scene.",
      },
    ],
    designDecisions: [
      {
        title: "Model-first layout",
        body: "The 3D model is the hero of every screen; supporting text and controls frame it without competing.",
      },
      {
        title: "Guided exploration",
        body: "Added structure and context so learners have a path through the material, not just free-roam.",
      },
    ],
    implementation:
      "Built with HTML, JavaScript, and Bootstrap, using Google Model Viewer for 3D rendering and Firebase for backend data — a lightweight stack chosen for reach and reliability.",
    results: [
      { value: "3D", label: "Interactive anatomy models in-browser" },
      { value: "Industry", label: "Built with Malaysia Airlines Academy" },
      { value: "FYP", label: "Final year capstone project" },
    ],
    lessons:
      "Interaction design matters as much as the technology. The 3D was impressive, but the platform only worked because the flow told learners where to look and why.",
    featured: false,
  },
  {
    slug: "climate-dashboard",
    index: "05",
    name: "Climate Dashboard",
    tagline: "Data Visualization & Analytics",
    category: "Analytics · Data Visualization",
    year: "2023",
    accent: "#0891b2",
    summary:
      "An analytics project turning climate data into interactive, decision-ready visualizations across Tableau, Power BI, and SAS.",
    stack: ["Tableau", "Power BI", "SAS", "Data Visualization"],
    problem:
      "Climate datasets are large and unintuitive. Stakeholders needed clear, interactive views to spot trends and compare regions without reading raw tables.",
    role: "Data Visualization — designed and built the dashboards and charts.",
    responsibilities: [
      "Built interactive dashboards in Tableau and Power BI",
      "Performed analysis and data preparation in SAS",
      "Designed charts that make trends and comparisons legible",
    ],
    challenges: [
      {
        title: "From raw data to a clear story",
        body: "The work was as much editorial as technical — choosing which relationships to show and which chart makes each one obvious.",
      },
    ],
    designDecisions: [
      {
        title: "One question per view",
        body: "Each dashboard view answers a single question, so readers never have to hunt for the point.",
      },
      {
        title: "Honest, legible charts",
        body: "Chose chart types that represent the data faithfully — no dual axes or 3D distortion.",
      },
    ],
    implementation:
      "Prepared and analyzed data in SAS, then built interactive dashboards in Tableau and Power BI with filters and drill-downs for exploration.",
    results: [
      { value: "3 tools", label: "Tableau · Power BI · SAS" },
      { value: "Interactive", label: "Filterable, explorable dashboards" },
      { value: "Decision-ready", label: "Trends made legible" },
    ],
    lessons:
      "Data visualization is storytelling with constraints. The most valuable skill wasn't the tool — it was knowing what to leave out.",
    featured: false,
  },
];

export type Exploration = {
  title: string;
  context: string;
  research: string;
  decision: string;
  outcome: string;
  tag: string;
};

export const explorations: Exploration[] = [
  {
    title: "VECTOR Dashboard Redesign",
    tag: "Dashboard",
    context: "The first dashboard tried to show everything at once — every metric competed for attention.",
    research:
      "Watched how engineers actually triage: they scan for anomalies first, then investigate. The interface fought that instinct.",
    decision:
      "Introduced a strict visual hierarchy — a summary row that answers 'is anything wrong?' above trend charts and drill-downs.",
    outcome: "Time-to-insight dropped and the dashboard finally matched the mental model of the people using it.",
  },
  {
    title: "AI Grammar Assistant UI",
    tag: "AI · Editor",
    context: "Report writing needed language polish, but a separate 'AI tab' would break the writing flow.",
    research:
      "Studied how writers accept suggestions — they want them inline, reversible, and never in the way.",
    decision:
      "Placed suggestions in the editor margin with subtle affordances, one-tap accept, and zero modal interruptions.",
    outcome: "AI became a quiet co-pilot inside the report, assisting without hijacking the page.",
  },
  {
    title: "Empty State Exploration",
    tag: "UX Detail",
    context: "New users landed on blank dashboards and reports with no idea what to do next.",
    research: "Empty states are onboarding in disguise — the highest-leverage screen a new user sees.",
    decision:
      "Designed empty states that explain the value, show a sample, and offer a single clear first action.",
    outcome: "The first-run experience turned from a dead-end into a guided start.",
  },
  {
    title: "Report Editor UX",
    tag: "Editor",
    context: "Engineers expected the report to behave like a document, not a rigid web form.",
    research: "Mapped the writing task end to end — sections, live data, edits, review, export.",
    decision:
      "Built a section-based editor with inline editing, autosave, and live data blocks — familiar as a doc, powerful as an app.",
    outcome: "Writing a report stopped feeling like filling out software.",
  },
  {
    title: "Dashboard Components",
    tag: "System",
    context: "Charts and panels were being rebuilt slightly differently each time, causing drift.",
    research: "Audited every dashboard surface and cataloged the real, recurring patterns.",
    decision:
      "Extracted a set of typed, themed chart and panel components with shared spacing and states.",
    outcome: "New views compose from tested parts, and the product looks like one product.",
  },
  {
    title: "Component Library",
    tag: "Design System",
    context: "The team needed a shared vocabulary to move fast without visual inconsistency.",
    research: "Aligned on tokens — spacing, radius, color, type — before building components.",
    decision:
      "Established a documented component library on a shadcn/ui foundation with consistent tokens.",
    outcome: "Design and engineering finally spoke the same language, and velocity rose.",
  },
];

export type SkillGroup = {
  category: string;
  blurb: string;
  skills: { name: string; level?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    blurb: "Building maintainable, accessible interfaces at scale.",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "shadcn/ui" },
    ],
  },
  {
    category: "Data Visualization",
    blurb: "Turning dense data into decisions.",
    skills: [
      { name: "ECharts" },
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "SAS" },
    ],
  },
  {
    category: "Backend & Data",
    blurb: "Integrating and modeling the data layer.",
    skills: [
      { name: "Django REST API" },
      { name: "Firebase" },
      { name: "PHP" },
      { name: "REST APIs" },
    ],
  },
  {
    category: "Design",
    blurb: "Designing the thing before building it.",
    skills: [
      { name: "Figma" },
      { name: "Adobe Suite" },
      { name: "Blender" },
      { name: "UI / UX Design" },
    ],
  },
];

export type TimelineItem = {
  phase: string;
  title: string;
  org: string;
  period: string;
  body: string;
  status?: "past" | "current" | "future";
};

export const career: TimelineItem[] = [
  {
    phase: "Education",
    title: "Multimedia Computing",
    org: "University",
    period: "Foundation",
    body: "A degree at the intersection of design, interaction, and engineering — where product thinking became instinct.",
    status: "past",
  },
  {
    phase: "Internship",
    title: "Frontend Internship",
    org: "Industry",
    period: "Early career",
    body: "First taste of shipping real software to real users, and the discipline of production frontend work.",
    status: "past",
  },
  {
    phase: "Now",
    title: "Software Developer",
    org: "Intekma",
    period: "Current",
    body: "Building enterprise dashboards, reporting systems, and AI-assisted workflows — owning frontend surfaces end to end.",
    status: "current",
  },
  {
    phase: "Next",
    title: "Product / Frontend Engineer",
    org: "Modern SaaS · AI · FAANG",
    period: "Future",
    body: "Growing into a role where product, design, and engineering meet — building intelligent, data-driven products at scale.",
    status: "future",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "A space reserved for a future manager or client. Their words on working with Nur Aina will live here.",
    name: "Future Manager",
    title: "Engineering Lead",
    placeholder: true,
  },
  {
    quote:
      "A space reserved for a future collaborator's perspective on the products we shipped together.",
    name: "Future Collaborator",
    title: "Product Manager",
    placeholder: true,
  },
  {
    quote:
      "A space reserved for a future client's take on the outcome — the workflow made simpler, the report shipped faster.",
    name: "Future Client",
    title: "Enterprise Stakeholder",
    placeholder: true,
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Explorations", href: "#explorations" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
