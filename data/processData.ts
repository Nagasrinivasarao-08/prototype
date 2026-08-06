export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const INITIAL_CONSULTATION_STEPS = [
  {
    step: "1",
    title: "Schedule a Call",
    description: "Connect with a senior software architect to discuss your business requirements and technical goals.",
  },
  {
    step: "2",
    title: "Discovery & Consulting Meeting",
    description: "We analyze your existing software ecosystem, data structures, and delivery constraints.",
  },
  {
    step: "3",
    title: "Proposal Preparation",
    description: "We deliver a detailed architectural roadmap, team composition proposal, and milestone timeline.",
  },
];

export const PROCESS_STEPS: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding Context & Constraints",
    description:
      "We analyze the business problem, target users, legacy system dependencies, security rules, and project priorities.",
    deliverables: ["Requirements Document", "Architecture Assessment", "Technical Gap Analysis"],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Architecture & Delivery Planning",
    description:
      "We define the technical architecture, data schemas, API contracts, milestone schedule, and team allocation.",
    deliverables: ["Solution Architecture", "API Specifications", "Project Roadmap"],
  },
  {
    number: "03",
    title: "Design & Build",
    subtitle: "Iterative Software Engineering",
    description:
      "Our senior engineers develop, integrate, test, and deploy software in agile sprints with continuous feedback.",
    deliverables: ["Sprint Demos", "Automated Test Suites", "Production Deployment"],
  },
  {
    number: "04",
    title: "Support & Improve",
    subtitle: "Long-Term SLA Maintenance",
    description:
      "We maintain, monitor, patch, and continuously enhance your software after launch under dedicated SLAs.",
    deliverables: ["24/7 Monitoring", "Security Patching", "Feature Roadmap Upgrades"],
  },
];
