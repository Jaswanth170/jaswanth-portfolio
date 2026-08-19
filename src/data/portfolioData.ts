export interface ProjectEvidence {
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
  architectureImage?: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: "AI" | "AUTOMATION" | "AGENTS" | "LLM";
  oneLiner: string;
  problem: string;
  approach: string;
  technologies: string[];
  status: "BUILT" | "IN PROGRESS" | "EXPERIMENT" | "EXPLORING";
  evidence: ProjectEvidence;
  highlights: string[];
  learned: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    coreMessage: string;
    supportingMessage: string;
    credibilityLine: string;
    email: string;
    image: string;
    openTo: string[];
  };
  social: {
    github: string;
    linkedin: string;
  };
  resume: {
    url: string;
  };
  proofStrip: string[];
  whatIBuild: Array<{
    number: string;
    title: string;
    description: string;
    tags: string[];
  }>;
  projects: ProjectCaseStudy[];
  howIWork: Array<{
    number: string;
    title: string;
    description: string;
  }>;
  about: {
    headline: [string, string];
    content: string[];
    mission: string;
  };
  currentlyBuilding: Array<{
    id: string;
    name: string;
    description: string;
    status: "ACTIVE" | "BUILDING" | "EXPLORING";
    linkUrl: string;
  }>;
  skills: Array<{
    title: string;
    items: string[];
  }>;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jaswanth ST",
    role: "AI/ML ENGINEER · AI BUILDER",
    coreMessage: "Building the Future With AI.",
    supportingMessage:
      "I build intelligent agents, automation systems, LLM applications, and practical AI-powered products.",
    credibilityLine: "Currently building AI systems, agents & automation.",
    email: "jaswanthst1706@gmail.com",
    image: "/images/jaswanth-profile.jpg",
    openTo: [
      "AI/ML Engineering Opportunities",
      "AI Automation & Workflows",
      "AI Product Development",
    ],
  },

  social: {
    github: "https://github.com/jaswanthst",
    linkedin: "https://www.linkedin.com/in/jaswanth-st/",
  },

  resume: {
    url: "#",
  },

  proofStrip: [
    "AI AGENTS",
    "AUTOMATION",
    "LLM APPLICATIONS",
    "PYTHON",
    "n8n",
    "MCP",
    "DOCKER",
  ],

  whatIBuild: [
    {
      number: "01",
      title: "AI AGENTS",
      description:
        "Intelligent agents that reason, use tools, interact with systems, and execute multi-step tasks autonomously.",
      tags: ["Python", "LLMs", "MCP", "APIs"],
    },
    {
      number: "02",
      title: "AI AUTOMATION",
      description:
        "Automated workflows connecting AI with real business operations, webhooks, and enterprise tools.",
      tags: ["n8n", "APIs", "Webhooks", "AI"],
    },
    {
      number: "03",
      title: "LLM APPLICATIONS",
      description:
        "Practical software powered by modern language models, semantic retrieval, embeddings, and structured data.",
      tags: ["LLMs", "RAG", "Embeddings", "Vector Search"],
    },
    {
      number: "04",
      title: "AI PRODUCTS",
      description:
        "Turning AI ideas into functional end-to-end products that solve specific problems and create measurable value.",
      tags: ["Prototype", "Build", "Automate", "Deploy"],
    },
  ],

  projects: [
    {
      id: "lead-gen",
      slug: "ai-lead-generation",
      number: "CASE STUDY / 01",
      title: "AI Lead Generation System",
      category: "AUTOMATION",
      oneLiner: "Automated lead capture, qualification, and routing using n8n and AI.",
      problem:
        "Manual lead processing, qualification, and routing is repetitive and causes delays in response times.",
      approach:
        "Engineered an automated n8n pipeline integrated with AI models to capture incoming leads via webhooks, evaluate lead fit, and route qualified prospects.",
      technologies: ["n8n", "AI", "Google APIs", "Webhooks"],
      status: "BUILT",
      evidence: {},
      highlights: [
        "Automated webhook capture from custom lead forms",
        "LLM-based lead scoring against qualification criteria",
        "Instant notification dispatch to team endpoints",
      ],
      learned: [
        "Reliable workflow automation depends as much on robust error handling and webhook retry logic as it does on prompt quality.",
        "Structuring LLM outputs into strict JSON schemas prevents downstream API routing failures.",
      ],
    },
    {
      id: "content-auto",
      slug: "ai-content-automation",
      number: "CASE STUDY / 02",
      title: "AI Content Automation System",
      category: "LLM",
      oneLiner: "Automated pipeline turning unstructured notes into platform-ready content.",
      problem:
        "Repurposing raw notes into structured, platform-formatted content requires time-consuming manual editing.",
      approach:
        "Developed an end-to-end content processing pipeline using LLM templates that transforms unstructured ideas into polished, platform-ready copy.",
      technologies: ["LLMs", "n8n", "Automation", "APIs"],
      status: "BUILT",
      evidence: {},
      highlights: [
        "Multi-platform formatting pipelines",
        "Automated outline-to-draft generation",
        "Custom tone and style enforcement",
      ],
      learned: [
        "Modular prompt chaining creates far cleaner, less generic content outputs than attempting a single mega-prompt.",
        "Template parameters allow non-technical users to customize tone without editing core workflow code.",
      ],
    },
    {
      id: "agent-systems",
      slug: "ai-agent-systems",
      number: "CASE STUDY / 03",
      title: "AI Agent Systems",
      category: "AGENTS",
      oneLiner: "Experimental Python agent frameworks exploring autonomous tool execution.",
      problem:
        "Standard LLMs cannot take direct action or interact dynamically with external software tools and APIs.",
      approach:
        "Built experimental Python agent frameworks leveraging the Model Context Protocol (MCP) to allow models to reason, select tools, and execute environment tasks.",
      technologies: ["Python", "LLMs", "Tools", "MCP"],
      status: "EXPERIMENT",
      evidence: {},
      highlights: [
        "ReAct reasoning & action loops",
        "MCP server tool bindings",
        "Structured output verification",
      ],
      learned: [
        "Agent loops require strict max-iteration caps to prevent infinite tool loops when edge-case errors occur.",
        "Decoupling the tool discovery interface from agent logic makes adding new tools fast and maintainable.",
      ],
    },
  ],

  howIWork: [
    {
      number: "01",
      title: "UNDERSTAND",
      description: "Deconstruct the problem, map constraints, and define system parameters before writing code.",
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Architect the model flow, tool protocols, data structures, and pipeline interfaces.",
    },
    {
      number: "03",
      title: "BUILD",
      description: "Implement robust code, integrate APIs, configure automation, and enforce type safety.",
    },
    {
      number: "04",
      title: "ITERATE",
      description: "Benchmark execution, inspect failure logs, fix edge cases, and refine performance.",
    },
  ],

  about: {
    headline: ["I don't just study AI.", "I build with it."],
    content: [
      "I'm Jaswanth, an AI/ML Engineer focused on building practical, intelligent systems.",
      "Rather than learning AI only through theory, I build real software — experimenting with models, connecting APIs, automating complex workflows, and creating functional AI products.",
      "My focus is on enabling AI to reason, use tools, interact with native applications, and autonomously execute multi-step real-world tasks.",
    ],
    mission: "Build intelligent technology that is genuinely useful.",
  },

  currentlyBuilding: [
    {
      id: "01",
      name: "AI AGENTS",
      description: "Tool-using autonomous reasoning systems (MCP Protocol)",
      status: "EXPLORING",
      linkUrl: "/projects/ai-agent-systems",
    },
    {
      id: "02",
      name: "AI AUTOMATION",
      description: "Intelligent business workflows & n8n pipeline integrations",
      status: "ACTIVE",
      linkUrl: "/projects/ai-lead-generation",
    },
    {
      id: "03",
      name: "LLM APPLICATIONS",
      description: "Retrieval-augmented models & structured data processing",
      status: "ACTIVE",
      linkUrl: "/projects/ai-content-automation",
    },
  ],

  skills: [
    {
      title: "Languages",
      items: ["Python", "TypeScript", "SQL"],
    },
    {
      title: "AI / ML",
      items: [
        "Machine Learning",
        "Generative AI",
        "LLMs",
        "RAG",
        "AI Agents",
        "Embeddings",
      ],
    },
    {
      title: "Automation",
      items: ["n8n", "APIs", "Webhooks", "MCP"],
    },
    {
      title: "Engineering",
      items: ["Git", "GitHub", "Docker", "VS Code", "macOS"],
    },
  ],

  seo: {
    title: "Jaswanth ST — AI/ML Engineer & AI Builder",
    description:
      "Jaswanth ST is an AI/ML Engineer building AI agents, automation systems, LLM applications, and practical AI-powered products.",
    ogTitle: "Jaswanth ST — Building the Future With AI",
    ogDescription:
      "AI/ML Engineer · AI Builder · AI Agents · Automation · LLM Applications",
  },
};
