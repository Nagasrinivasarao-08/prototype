import { ServiceCategoryGroup } from "@/types";

export const SERVICES_GROUPED_DATA: ServiceCategoryGroup[] = [
  {
    id: "consulting-strategy",
    categoryName: "Consulting & Strategy",
    description: "Strategic technology advisory, architecture planning, and enterprise digital modernization.",
    services: [
      {
        id: "it-consulting",
        title: "IT Consulting & Advisory",
        shortDesc: "Strategic guidance on enterprise technology roadmaps, cloud architecture, and system integration.",
        fullDesc: "We provide objective IT consulting to evaluate current software systems, identify operational bottlenecks, and design scalable enterprise technology roadmaps.",
        tags: ["IT Advisory", "Architecture Review", "Technology Roadmap"],
      },
      {
        id: "digital-modernization",
        title: "Digital & Platform Modernization",
        shortDesc: "Transforming legacy monoliths into cloud-native, scalable microservices architectures.",
        fullDesc: "Modernize legacy enterprise software, database schemas, and workflows into resilient cloud-based architectures while ensuring zero data loss and minimal disruption.",
        tags: ["Legacy Migration", "Microservices", "Cloud Modernization"],
      },
    ],
  },
  {
    id: "custom-engineering",
    categoryName: "Custom Software Engineering",
    description: "End-to-end custom application development across web, mobile, desktop, and .NET platforms.",
    services: [
      {
        id: "web-development",
        title: "Web Application Development",
        shortDesc: "High-performance, secure web applications built using React, Next.js, Angular, and .NET Core.",
        fullDesc: "Custom web software engineered for enterprise scale, compliance, and multi-tenant SaaS architecture.",
        tags: ["React & Next.js", "ASP.NET Core", "Enterprise Web Systems"],
        isFeatured: true,
      },
      {
        id: "mobile-development",
        title: "Mobile App Development",
        shortDesc: "Native iOS, Android, and cross-platform mobile solutions designed for enterprise workflows.",
        fullDesc: "Secure mobile applications built for field operations, customer engagement, and workforce management.",
        tags: ["iOS & Android", "Cross-Platform", "Enterprise Mobility"],
      },
      {
        id: "desktop-development",
        title: "Desktop Application Development",
        shortDesc: "Robust Windows desktop solutions for high-performance offline processing and hardware integration.",
        fullDesc: "High-performance desktop software for industrial automation, legal case management, and office productivity.",
        tags: ["Windows WPF", ".NET Desktop", "Hardware Integration"],
      },
      {
        id: "product-engineering",
        title: "Product Engineering",
        shortDesc: "Full lifecycle product development from conceptual architecture to production deployment.",
        fullDesc: "Dedicated product engineering for software vendors and enterprise platforms requiring long-term roadmap delivery.",
        tags: ["Product Roadmap", "SaaS Engineering", "Full Lifecycle"],
      },
    ],
  },
  {
    id: "enterprise-platforms",
    categoryName: "Enterprise Platforms & CRM",
    description: "Customization, integration, and AppExchange development for Salesforce and Microsoft Dynamics.",
    services: [
      {
        id: "salesforce-crm",
        title: "Salesforce CRM & AppExchange",
        shortDesc: "Sales Cloud, Service Cloud, Apex coding, Lightning Web Components, and AppExchange package creation.",
        fullDesc: "End-to-end Salesforce ecosystem services including custom Apex logic, LWC interface engineering, and AppExchange commercial product development.",
        tags: ["Salesforce Partner", "Apex & LWC", "AppExchange Development"],
        isFeatured: true,
      },
      {
        id: "ms-dynamics",
        title: "Microsoft Dynamics 365",
        shortDesc: "Enterprise CRM & ERP implementation, custom workflow development, and Azure integration.",
        fullDesc: "Tailored Microsoft Dynamics CRM & ERP solutions integrating sales, financial, and operational data into unified enterprise portals.",
        tags: ["Dynamics 365", "Microsoft Stack", "Enterprise ERP"],
      },
      {
        id: "erp-solutions",
        title: "Enterprise ERP Solutions",
        shortDesc: "Custom ERP systems for inventory control, manufacturing workflows, and logistics.",
        fullDesc: "Scalable ERP platforms designed to streamline supply chain management, financial reporting, and resource planning.",
        tags: ["Supply Chain ERP", "Resource Management", "Workflow Automation"],
      },
    ],
  },
  {
    id: "emerging-systems",
    categoryName: "Emerging & Connected Systems",
    description: "Practical generative AI workflow automation, internal copilots, and industrial IoT solutions.",
    services: [
      {
        id: "ai-automation",
        title: "AI Consulting & Workflow Automation",
        shortDesc: "Targeted AI document extraction, knowledge copilots, and intelligent workflow automation.",
        fullDesc: "Practical enterprise AI integration connecting generative models and intelligent document processing directly into existing CRM and operational software.",
        tags: ["GenAI Workflows", "Document Extraction", "Enterprise Governance"],
        isFeatured: true,
      },
      {
        id: "iot-solutions",
        title: "IoT & Industrial Solutions",
        shortDesc: "Sensor data ingestion, industrial equipment monitoring, and real-time telemetry dashboards.",
        fullDesc: "End-to-end IoT software architectures for industrial equipment manufacturers, field logistics, and smart tracking.",
        tags: ["Industrial IoT", "Telemetry", "Real-Time Systems"],
      },
    ],
  },
  {
    id: "commerce-digital",
    categoryName: "Commerce & Digital Platforms",
    description: "B2B and B2C e-commerce portals, customer self-service systems, and workflow engines.",
    services: [
      {
        id: "ecommerce-development",
        title: "E-Commerce Development",
        shortDesc: "Custom B2B and B2C online shopping portals, payment gateway integration, and order management.",
        fullDesc: "Secure, high-converting e-commerce web applications integrated with inventory, ERP, and payment processing backends.",
        tags: ["B2B & B2C E-Commerce", "Order Processing", "Payment Gateways"],
      },
    ],
  },
  {
    id: "support-extension",
    categoryName: "Support & Team Extension",
    description: "Dedicated developer teams, 24/7 application maintenance, and technical support.",
    services: [
      {
        id: "application-maintenance",
        title: "Application & Website Maintenance",
        shortDesc: "SLA-backed maintenance, security patching, performance monitoring, and bug fixes.",
        fullDesc: "Ongoing maintenance programs ensuring mission-critical software remains secure, compliant, and highly available.",
        tags: ["SLA Maintenance", "Security Auditing", "24/7 Monitoring"],
      },
      {
        id: "dedicated-developers",
        title: "Dedicated Developer Teams",
        shortDesc: "Scale your internal engineering team with senior .NET, Salesforce, React, and Angular developers.",
        fullDesc: "Flexible offshore team augmentation providing experienced software engineers aligned directly with your development processes.",
        tags: ["Team Augmentation", "Senior .NET Engineers", "Salesforce Apex Pros"],
      },
    ],
  },
];

export const SERVICES_DATA = SERVICES_GROUPED_DATA.flatMap((g) => g.services);
