import { Project, SkillCategory, ExperienceItem, AchievementItem, OpenSourceTool, AgentNode } from '../types';

export const PERSONAL_INFO = {
  name: "Hamid Raza",
  title: "Agentic AI Developer & Full-Stack Engineer",
  oneLinePitch: "I design and ship multi-agent AI systems — from orchestration logic to production full-stack platforms — using spec-driven development, not guesswork.",
  location: "Karachi, Pakistan",
  experienceYears: "2+ years",
  currentRole: "Full-Stack Developer & AI Integration Engineer at SidTechno",
  email: "hr1907469@gmail.com",
  phone: "+923160010801",
  linkedin: "https://linkedin.com/in/hamid-raza-b249162a8",
  github: "https://github.com/MuhammadHamidRaza",
  youtube: "https://youtube.com/@buildwithaihamid",
  youtubeHandle: "@buildwithaihamid",
  avatarUrl: "https://avatars.githubusercontent.com/u/144342718?v=4",
  positioningStatement: "I build multi-agent AI systems that actually ship — from orchestration logic to production infrastructure. What makes me different: I don't prototype agents in isolation, I architect them into real full-stack products with real users, real data, and real uptime.",
  bio: "Based in Karachi, Pakistan, Hamid is an Agentic AI Developer and Full-Stack Engineer with 2+ years building AI agent systems, multi-agent orchestration pipelines, and MERN stack applications. He works full-time at SidTechno as a Full-Stack Developer & AI Integration Engineer, alongside freelance client work, and builds with Node.js/Express for full-stack products and Python/FastAPI for agent-heavy backends. His work spans production multi-agent e-commerce platforms, ERP AI layers, and workflow automation systems delivered for real clients — plus active open-source contributions to projects like OpenAI's Agents SDK and n8n. He's working toward becoming a high-level AI Agent Architect and building international SaaS products."
};

export const AGENT_NODES_DATA: AgentNode[] = [
  { id: "triage", name: "Triage Agent", role: "Intent Router", shortDesc: "Classifies incoming requests and routes to domain specialists", category: "core", x: 50, y: 15, activeColor: "#6D5EF5" },
  { id: "orchestrator", name: "Orchestrator Brain", role: "Master Supervisor", shortDesc: "Manages agent state machine, context handoffs, and verification", category: "core", x: 50, y: 48, activeColor: "#8B7EFF" },
  { id: "products", name: "Products Agent", role: "Catalog Specialist", shortDesc: "Real-time inventory lookup, semantic search, and pricing", category: "commerce", x: 18, y: 35, activeColor: "#10B981" },
  { id: "orders", name: "Orders Agent", role: "Fulfillment Specialist", shortDesc: "Order tracking, modification, and transactional status sync", category: "commerce", x: 22, y: 68, activeColor: "#06B6D4" },
  { id: "checkout", name: "Checkout Agent", role: "Payment & Auth", shortDesc: "Stripe/gateway orchestration and secure session handoffs", category: "commerce", x: 38, y: 85, activeColor: "#F59E0B" },
  { id: "mcp_tools", name: "MCP Tool Server", role: "Protocol Bridge", shortDesc: "Standardized tool-calling interface for external systems & DBs", category: "operations", x: 80, y: 35, activeColor: "#EC4899" },
  { id: "db_sync", name: "DB Sync Worker", role: "State Persistence", shortDesc: "Atomic writes to MongoDB/MySQL with audit logging", category: "operations", x: 82, y: 70, activeColor: "#6366F1" },
  { id: "hitl", name: "Human-in-the-Loop", role: "Safety Gate", shortDesc: "Slack/webhook approval escalation for destructive actions", category: "support", x: 62, y: 88, activeColor: "#EF4444" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "agentic-ai",
    title: "Agentic AI Development",
    headline: "Multi-Agent Orchestration & Deterministic Tool-Calling",
    skills: [
      "OpenAI Agents SDK (Python & JS)",
      "Multi-Agent Orchestration Pipelines",
      "Tool-Calling Architecture",
      "Context & Memory Management",
      "Agent-to-Agent Handoffs",
      "External API Integrations"
    ],
    frameworksOrTools: ["OpenAI Agents SDK", "LangChain / LangGraph", "Python 3.12+", "FastAPI", "AsyncIO", "Zod Validation"],
    specSample: {
      filename: "agent_handoff.spec.ts",
      lang: "typescript",
      code: `// Deterministic Spec-Driven Agent Handoff
export const triageAgent = new Agent({
  name: "Triage Coordinator",
  instructions: "Classify user intent. Handoff to productAgent or orderAgent.",
  tools: [handoffToProductAgent, handoffToOrderAgent],
  model: "gpt-4o-mini"
});`
    }
  },
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    headline: "Standardized Client-Server Tool & Data Connectivity",
    skills: [
      "Client-Server Tool Connectivity",
      "Standardized AI-Tool Communication",
      "External Data Source Integration",
      "MCP Server Development (TypeScript/Python)",
      "Dynamic Schema Discovery",
      "Strict Security Scoping"
    ],
    frameworksOrTools: ["Model Context Protocol (MCP)", "JSON-RPC 2.0", "FastMCP", "Stdio & SSE Transports"],
    specSample: {
      filename: "mcp_tool_server.ts",
      lang: "typescript",
      code: `// MCP Tool Registration with Strict Input Schema
server.tool(
  "query_inventory_db",
  { sku: z.string(), warehouseId: z.string().optional() },
  async ({ sku, warehouseId }) => {
    return await catalogService.lookup(sku, warehouseId);
  }
);`
    }
  },
  {
    id: "prompt-spec",
    title: "Prompt Engineering & Spec-Driven Dev",
    headline: "Formal Specifications Over Guesswork Prototyping",
    skills: [
      "Few-Shot Prompting Systems",
      "Chain-of-Thought (CoT) Design",
      "Structured Output Formatting",
      "Formal Spec-Based Tool Definitions",
      "github/spec-kit Integration",
      "Deterministic Guardrails & Fallbacks"
    ],
    frameworksOrTools: ["github/spec-kit", "Spec-Kit-CoLearn (Author)", "Pydantic V2", "TypeBox", "JSON Schema Draft-07"],
    specSample: {
      filename: "spec_kit_manifest.json",
      lang: "json",
      code: `{
  "$schema": "https://spec-kit.org/v1/agent-spec.json",
  "agent": "ProcurementEvaluator",
  "version": "2.4.0",
  "deterministicGuarantees": ["budget_ceiling_check", "rbac_verification"]
}`
    }
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    headline: "High-Performance Reactive UIs & Real-Time Agent Dashboards",
    skills: [
      "React.js & Next.js (App Router)",
      "Vite & Modern Tooling",
      "TypeScript Strict Mode",
      "Tailwind CSS & Utility Systems",
      "Shadcn UI Accessible Components",
      "Real-Time WebSocket & SSE Streams"
    ],
    frameworksOrTools: ["React 19", "Next.js 15", "Tailwind CSS v4", "Motion / Framer Motion", "Radix UI", "TanStack Query"]
  },
  {
    id: "backend",
    title: "Backend Architecture",
    headline: "Production Microservices & Async Agent Engines",
    skills: [
      "Node.js & Express.js",
      "Python 3.12+ & FastAPI",
      "RESTful API Design & OpenAPI Specs",
      "JWT-Based RBAC Security",
      "Distributed Task Queues",
      "Rate Limiting & Token Budgeting"
    ],
    frameworksOrTools: ["Express.js", "FastAPI", "Uvicorn", "JWT / OAuth2", "Docker", "Node Clusters"]
  },
  {
    id: "database",
    title: "Database & Storage",
    headline: "Relational, Document, & Cloud Media Persistence",
    skills: [
      "MongoDB (Mongoose, Aggregation Pipelines)",
      "MySQL (Normalized Schemas, Indexing, Backups)",
      "Cloudinary Media Pipeline Automation",
      "Per-Client Isolation & Data Segregation",
      "Automated DB Snapshots & Offsite Archiving"
    ],
    frameworksOrTools: ["MongoDB Atlas", "MySQL 8.0", "Prisma / Mongoose", "Cloudinary SDK", "Google Drive API"]
  },
  {
    id: "automation",
    title: "Workflow Automation & Webhooks",
    headline: "Enterprise Integration Pipelines with Human-in-the-Loop",
    skills: [
      "n8n Workflow Automation Architecture",
      "Slack Interactive Bot Integrations",
      "CRM (Bigin) Task & Deal Automation",
      "WhatsApp Business API Triggers",
      "Multi-Language Content Pipelines (EN/ES/FR)",
      "Human-in-the-Loop (HITL) Approval Gates"
    ],
    frameworksOrTools: ["n8n", "Slack Webhooks / Bolt", "WhatsApp Cloud API", "Bigin CRM API", "Claude 3.5/4.5 Haiku", "Gemini Veo"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "agetic",
    title: "Agetic — Sangani Traders",
    subtitle: "Enterprise Multi-Agent E-Commerce Platform",
    client: "Sangani Traders",
    category: "Multi-Agent System & Full-Stack Platform",
    featured: true,
    problem: "Traditional e-commerce admin panels require store operators to manually navigate through dozens of nested forms, menus, and inventory pages for every routine task — creating severe operational latency and steep training overhead.",
    approach: "Architected a synchronized 15+ specialized-agent orchestration network that empowers both end customers and store administrators to run the entire retail store through a natural chat interface with deterministic backend execution.",
    result: "Hamid's flagship proof point for production multi-agent architecture in a commercial product. Reduced admin operational tasks from multi-minute form workflows to instant single-prompt conversational executions with zero database corruption.",
    techStack: [
      "OpenAI Agents SDK",
      "Gemini API",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    agentsCount: 15,
    agentsList: [
      "Triage Coordinator",
      "Products Specialist",
      "Orders Manager",
      "Admin Supervisor",
      "Content Generator",
      "Checkout Orchestrator",
      "Categories Manager",
      "Profile & Security",
      "Promotions Engine",
      "Blog Publisher",
      "FAQ Assistant",
      "Banners Director",
      "Contact Router",
      "Reviews Validator",
      "Wishlist Sync",
      "Auth Gatekeeper"
    ],
    metrics: [
      { label: "Specialized Agents", value: "15+" },
      { label: "Workflow Speedup", value: "4.2x" },
      { label: "Human Verification", value: "100% Deterministic" },
      { label: "Production Status", value: "Shipped & Active" }
    ]
  },
  {
    id: "ccas",
    title: "CCAS — The Helpex",
    subtitle: "Automated Cloud Database Operations & Client Reporting Suite",
    client: "The Helpex",
    category: "DevOps & Full-Stack Automation",
    featured: true,
    problem: "The client required completely hands-off, fail-safe database operations, isolated backup archiving, and automated stakeholder notifications across disparate client environments without manual intervention.",
    approach: "Built solo from ground up: production MySQL automated backup pipelines, WhatsApp Business API alert dispatching, per-client Google Drive OAuth directory isolation, JWT-based role access control (RBAC), and a live administrative monitoring dashboard.",
    result: "Delivered a fully autonomous, production-grade operations engine running 24/7 with zero downtime, zero data leakage between client accounts, and instantaneous WhatsApp failure/success telemetry.",
    techStack: [
      "MySQL 8.0",
      "WhatsApp Business API",
      "Google Drive OAuth2",
      "Node.js",
      "Express.js",
      "JWT RBAC",
      "React",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Uptime Reliability", value: "99.98%" },
      { label: "Manual Effort Saved", value: "15 hrs/wk" },
      { label: "Client Isolation", value: "100% OAuth Scoped" },
      { label: "Delivery", value: "Solo End-to-End" }
    ]
  },
  {
    id: "cap-design-group",
    title: "CAP Design Group",
    subtitle: "Dual n8n Automation: Tri-Lingual Email Triage & Multi-Model Social Engine",
    client: "CAP Design Group",
    category: "Enterprise Workflow & AI Content Automation",
    featured: true,
    problem: "High-volume inbound customer emails in multiple languages (English, Spanish, French) overwhelmed support teams, while social media creative pipelines suffered from inconsistent publishing cadence and slow review cycles.",
    approach: "Engineered two connected automated systems: (1) Email Automation Agent with tri-lingual intent classification, auto-replies, Slack notifications, VIP customer escalations, and Bigin CRM task synching across multiple Gmail accounts; (2) AI Social Engine leveraging Claude 4.5 Haiku for copy, Nano Banana for imagery, and Gemini Veo3 for video, combined with an interactive Slack Human-in-the-Loop (HITL) approval gate (Approve / Edit via prompt / Reject with reason).",
    result: "Achieved a flawless 5-star Fiverr review accompanied by a generous client bonus tip. Triaged 100% of customer inquiries within seconds and automated weekly content generation.",
    techStack: [
      "n8n Automation",
      "Claude 4.5 Haiku",
      "Nano Banana",
      "Gemini Veo3",
      "Slack Interactive Webhooks",
      "Bigin CRM API",
      "Gmail API"
    ],
    metrics: [
      { label: "Languages Handled", value: "EN / ES / FR" },
      { label: "Fiverr Rating", value: "5.0 ★ + Bonus Tip" },
      { label: "Approval Cycle", value: "< 2 mins in Slack" },
      { label: "Routing Latency", value: "< 1.5s" }
    ],
    review: {
      rating: 5,
      client: "CAP Design Group Client (via Fiverr)",
      quote: "Hamid delivered beyond our highest expectations. The email triage and social media automation transformed our daily operations immediately. Incredibly knowledgeable with n8n and AI models!",
      tipNote: "Client awarded a generous bonus tip on top of project payment."
    }
  },
  {
    id: "pkic",
    title: "PKIC AI Procurement Command Center",
    subtitle: "Intelligent Micro-Agent Layer for Enterprise Decibel ERP",
    client: "PKIC (Pakistan Kuwait Investment Company)",
    category: "Enterprise AI & ERP Modernization",
    featured: true,
    problem: "Legacy Decibel ERP system lacked contextual intelligence, causing procurement bottlenecks, lengthy purchase order approval loops, and zero natural-language visibility into procurement histories.",
    approach: "Designed and implemented an enterprise AI orchestration layer featuring nine purpose-built micro-agents with granular role-based access control configured for eight distinct organizational user tiers.",
    result: "Transformed an outdated enterprise procurement workflow into an intelligent command center, allowing executives and managers to query complex purchase orders, check vendor compliance, and trigger approval chains in seconds.",
    techStack: [
      "Python / FastAPI",
      "Decibel ERP API",
      "9 Purpose-Built Micro-Agents",
      "8-Tier RBAC",
      "PostgreSQL",
      "React Dashboard",
      "OpenAI Agents SDK"
    ],
    agentsCount: 9,
    metrics: [
      { label: "Purpose-Built Agents", value: "9 Micro-Agents" },
      { label: "Role Tiers Supported", value: "8 Distinct Roles" },
      { label: "ERP Integration", value: "Decibel Core" },
      { label: "Approval Latency", value: "65% Reduction" }
    ]
  },
  {
    id: "agentjr",
    title: "AgentJr — Spec-Driven Agent Runtime",
    subtitle: "Transparent Two-Layer Orchestration Engine for Developers",
    client: "Open Source Community",
    category: "Open Source AI Systems & Tooling",
    featured: true,
    problem: "Most existing agent runtimes are black boxes with bloated abstractions, making it nearly impossible for systems engineers to inspect intermediate handoffs, debug failed tool invocations, or enforce formal execution specs.",
    approach: "Designing and building a lean, spec-driven open-source agent runtime structured around a clean two-layer architecture: Brain (Supervisor / Orchestration Logic) + Coding Worker (Deterministic Tool Executor), authored entirely spec-first using github/spec-kit.",
    result: "Active open-source project with core runtime features shipped, formal specifications publicly available, and growing developer adoption for transparent agent development.",
    techStack: [
      "TypeScript",
      "Python",
      "github/spec-kit",
      "Model Context Protocol (MCP)",
      "Async Worker Pools",
      "Structured JSON Specs"
    ],
    githubUrl: "https://github.com/MuhammadHamidRaza",
    metrics: [
      { label: "Architecture", value: "Brain + Worker" },
      { label: "Design Method", value: "100% Spec-First" },
      { label: "Status", value: "Active / In Progress" },
      { label: "License", value: "Open Source" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sidtechno",
    role: "Full-Stack Developer & AI Integration Engineer",
    company: "SidTechno",
    location: "Karachi, Pakistan",
    period: "2023 — Present",
    type: "full-time",
    summary: "Leading full-stack engineering and production AI agent integrations across 17+ commercial applications. Architecting resilient MERN stack platforms and Python FastAPI services for regional and global clients.",
    achievements: [
      "Delivered 17+ complete enterprise and client projects from initial spec to production deployment.",
      "Engineered an IPTV reseller dashboard with automated subscription provisioning and high-concurrency balance tracking.",
      "Architected a scalable ride-hailing administrative management panel with real-time geospatial driver telemetry.",
      "Built a 3-sided salon marketplace with real-time booking slots, provider payouts, and customer reviews.",
      "Developed a Hajj & Umrah pilgrim management portal handling document verification, hotel bookings, and flight manifests.",
      "Constructed a residential HOA community governance platform with automated billing and violation tracking.",
      "Delivered a multi-role HR and healthcare compliance CRM with stringent HIPAA-level audit logging."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "OpenAI SDK", "Tailwind CSS", "Redis"]
  },
  {
    id: "freelance",
    role: "Independent Agentic AI & Automation Specialist",
    company: "Freelance Client Engagements",
    location: "Global Remote",
    period: "2023 — Present",
    type: "freelance",
    summary: "Delivering bespoke multi-agent architectures, n8n automations, and custom cloud integrations for international clients, including Sangani Traders, The Helpex, CAP Design Group, and PKIC.",
    achievements: [
      "Built 'Agetic', an industry-first 15+ specialized agent e-commerce system for Sangani Traders.",
      "Engineered automated MySQL backup & WhatsApp alert infrastructure for CCAS / The Helpex.",
      "Automated tri-lingual customer email triage and multi-model AI content generation for CAP Design Group, earning a 5-star rating with bonus tip.",
      "Created the 9-micro-agent procurement intelligence command center for PKIC over Decibel ERP."
    ],
    technologies: ["OpenAI Agents SDK", "Model Context Protocol (MCP)", "n8n", "WhatsApp API", "Claude API", "Gemini API", "FastAPI"]
  },
  {
    id: "training",
    role: "Advanced AI Systems & Full-Stack Graduate",
    company: "Saylani Mass IT Training (SMIT) & Panaversity",
    location: "Karachi, Pakistan",
    period: "Foundational Pedigree",
    type: "education",
    summary: "Underwent rigorous, intensive hands-on software engineering programs specializing in modern JavaScript/TypeScript, cloud architectures, generative AI, and multi-agent system fundamentals.",
    achievements: [
      "Mastered modern MERN stack application development with industry-standard CI/CD and unit testing.",
      "Graduated at the top tier of the cohort with multiple deployed capstone applications.",
      "Continued into active mentoring and community organizing for non-profit tech learners across Karachi."
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Python", "Distributed Systems", "Cloud Infrastructure"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "openai-python-pr",
    title: "Merged PR to openai/openai-agents-python",
    category: "open-source",
    badge: "Accepted in Hours",
    highlightText: "Official OpenAI Agents SDK Contributor",
    description: "Authored and submitted a high-impact pull request to OpenAI's official Python Agents SDK (openai/openai-agents-python), which was reviewed and merged by OpenAI core maintainers within hours of submission.",
    url: "https://github.com/MuhammadHamidRaza",
    urlLabel: "View GitHub Contribution"
  },
  {
    id: "cross-sdk-prs",
    title: "Multi-Ecosystem PRs: OpenAI JS & n8n-io/n8n",
    category: "open-source",
    badge: "Core Maintainer Merged",
    highlightText: "Merged in openai-agents-js & n8n",
    description: "Merged upstream code contributions across both openai/openai-agents-js and n8n-io/n8n repositories, addressing tool execution edge cases and workflow node handling.",
    url: "https://github.com/MuhammadHamidRaza",
    urlLabel: "Explore Pull Requests"
  },
  {
    id: "spec-kit-colearn",
    title: "Published 'Spec-Kit-CoLearn' on PyPI & npm",
    category: "published-packages",
    badge: "Cross-Registry Package",
    highlightText: "Available on PyPI and npm",
    description: "Created and released Spec-Kit-CoLearn, a dual-ecosystem utility that accelerates spec-driven development and structured tool contracts for agentic systems.",
    url: "https://pypi.org/project/spec-kit-colearn/",
    urlLabel: "View on PyPI"
  },
  {
    id: "doc-audit",
    title: "Published 'doc-audit-contributor' Claude Code Skill",
    category: "open-source",
    badge: "Claude Code Extension",
    highlightText: "Open Source Tool on GitHub",
    description: "Published an open-source productivity skill designed for Claude Code, automating codebase documentation audits and verification routines.",
    url: "https://github.com/MuhammadHamidRaza/doc-audit-contributor",
    urlLabel: "Inspect Claude Code Skill"
  },
  {
    id: "developer-books",
    title: "Author of 2 Free Developer Books",
    category: "books",
    badge: "Free Educational Publications",
    highlightText: "'Ship It' & 'AI Era Developer Guide'",
    description: "Penned and published two widely praised practical engineering guides helping aspiring and seasoned developers transition into modern production shipping and agentic workflows.",
    url: "https://youtube.com/@buildwithaihamid",
    urlLabel: "Access Developer Guides"
  },
  {
    id: "fiverr-review",
    title: "5-Star Fiverr Review with Client Bonus Tip",
    category: "client-review",
    badge: "5.0 ★ Client Satisfaction",
    highlightText: "CAP Design Group Client",
    description: "Earned a spotless 5-star rating along with an unsolicited monetary bonus tip for delivering tri-lingual email triage and automated AI social media workflows with zero post-delivery defects.",
    url: "#projects",
    urlLabel: "View Case Study"
  },
  {
    id: "youtube-channel",
    title: "Founder of 'Build With AI – Hamid'",
    category: "media",
    badge: "Tech Content & Tutorials",
    highlightText: "@buildwithaihamid",
    description: "Produces deep-dive engineering content across YouTube, X, TikTok, and Instagram, breaking down model context protocols, multi-agent architectures, and practical agent development.",
    url: "https://youtube.com/@buildwithaihamid",
    urlLabel: "Watch on YouTube"
  },
  {
    id: "community-karachi",
    title: "Non-Profit Tech Community Organizer",
    category: "community",
    badge: "Karachi Ecosystem",
    highlightText: "Developer Mentorship",
    description: "Organizes and leads community study circles and workshops in Karachi, teaching local engineers spec-driven development, modern TypeScript, and agentic AI architectures."
  }
];

export const OPEN_SOURCE_TOOLS: OpenSourceTool[] = [
  {
    name: "Spec-Kit-CoLearn (PyPI)",
    tagline: "Python Specification Toolkit for Agent Architectures",
    description: "Lightweight scaffolding and validation tools for building spec-driven AI agents adhering to github/spec-kit standards.",
    ecosystem: "Python / PyPI",
    installCommand: "pip install spec-kit-colearn",
    repoUrl: "https://github.com/MuhammadHamidRaza",
    packageUrl: "https://pypi.org/project/spec-kit-colearn/",
    specsIncluded: ["JSON Schema Validator", "Prompt Spec Scaffolder", "Handoff Contract Tests"]
  },
  {
    name: "Spec-Kit-CoLearn (npm)",
    tagline: "TypeScript/Node.js Agent Spec Execution Engine",
    description: "Typed interfaces and runtime guardrails for executing deterministic multi-agent handoffs in Node.js and Next.js applications.",
    ecosystem: "Node / npm",
    installCommand: "npm i spec-kit-colearn",
    repoUrl: "https://github.com/MuhammadHamidRaza",
    packageUrl: "https://www.npmjs.com/package/spec-kit-colearn",
    specsIncluded: ["Zod Agent Schemas", "MCP Tool Wrappers", "Context Isolation Guards"]
  },
  {
    name: "doc-audit-contributor",
    tagline: "Claude Code Skill for Automated Documentation Audits",
    description: "A custom Claude Code extension that parses code repositories to verify that architectural specifications match real implemented routes.",
    ecosystem: "Claude Code",
    installCommand: "claude skill add MuhammadHamidRaza/doc-audit-contributor",
    repoUrl: "https://github.com/MuhammadHamidRaza/doc-audit-contributor",
    specsIncluded: ["Markdown Spec Matcher", "Stale Route Detector", "Doc-to-Code Sync"]
  },
  {
    name: "AgentJr Runtime",
    tagline: "Two-Layer Spec-Driven Agent Execution Framework",
    description: "Open-source agent orchestration runtime featuring isolated Brain supervisor and Coding Worker executor with full packet inspection.",
    ecosystem: "GitHub",
    repoUrl: "https://github.com/MuhammadHamidRaza",
    specsIncluded: ["Supervisor State Machine", "Sandboxed Worker Pool", "Traceable Event Bus"]
  }
];
