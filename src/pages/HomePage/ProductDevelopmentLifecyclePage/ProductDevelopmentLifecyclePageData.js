import { 
  Search, ClipboardList, Layers3, PenTool, Code2, ClipboardCheck, 
  ShieldCheck, CloudUpload, Activity, Settings, TrendingUp, Rocket 
} from 'lucide-react';

export const stages = [
  {
    number: 1,
    icon: Search,
    title: "Product Research",
    description: "We begin product development by researching problems, users, markets, technology opportunities and potential product requirements. Research helps define the purpose and direction of a software product before significant engineering resources are committed. Our research-driven approach supports better product decisions and creates a foundation for meaningful technology development."
  },
  {
    number: 2,
    icon: ClipboardList,
    title: "Product Strategy",
    description: "We translate research findings into a structured product strategy covering users, functionality, technology requirements, positioning and product roadmap. Product strategy helps define what the software product should solve and how it can evolve. Our objective is to create clear product direction before moving into detailed architecture and engineering."
  },
  {
    number: 3,
    icon: Layers3,
    title: "Product Architecture",
    description: "We design the technical architecture required to build and operate the software product. This includes application components, databases, APIs, infrastructure, security and integration requirements. Strong product architecture helps establish scalability, maintainability and reliability from the early stages of product development."
  },
  {
    number: 4,
    icon: PenTool,
    title: "Product Design",
    description: "We transform product requirements into user interfaces, workflows and digital experiences. Product design considers usability, information architecture, user journeys and functional requirements. We aim to create software products that are technically capable while remaining intuitive and practical for their intended users."
  },
  {
    number: 5,
    icon: Code2,
    title: "Software Development",
    description: "Our engineering teams develop the software product through structured programming, coding, database engineering, API development and system integration. Development follows the defined architecture and product requirements. We focus on creating maintainable, scalable and secure code that forms the core technology foundation of the product."
  },
  {
    number: 6,
    icon: ClipboardCheck,
    title: "Product Testing",
    description: "Testing is performed to validate the functionality, reliability and performance of software products. Depending on the product, testing may include functional, integration, usability, performance, security and regression testing. Our testing process helps identify issues before deployment and supports consistent product quality."
  },
  {
    number: 7,
    icon: ShieldCheck,
    title: "Security Validation",
    description: "We evaluate relevant security aspects of software products before and during deployment. Security validation may include vulnerability assessment, access-control review, application security testing and other appropriate security practices. This stage helps identify security risks and strengthen products before they are exposed to wider operational environments."
  },
  {
    number: 8,
    icon: CloudUpload,
    title: "Product Deployment",
    description: "After development and validation, software products are prepared for deployment across appropriate digital environments. Deployment may involve cloud infrastructure, application servers, SaaS environments, enterprise systems or other authorised platforms. We focus on reliable release processes that support stable and controlled product launches."
  },
  {
    number: 9,
    icon: Activity,
    title: "Product Monitoring",
    description: "Once deployed, software products require continuous monitoring to understand performance, availability, usage and potential operational issues. Monitoring technologies can provide information about system health and product behaviour. This allows engineering teams to identify issues and maintain reliable digital product operations."
  },
  {
    number: 10,
    icon: Settings,
    title: "Product Maintenance",
    description: "We maintain software products through technical updates, issue resolution, security improvements and infrastructure maintenance. Product maintenance helps preserve reliability and compatibility as technologies and operating environments change. Continuous maintenance is an important part of protecting the long-term value of software products."
  },
  {
    number: 11,
    icon: TrendingUp,
    title: "Product Upgrades",
    description: "Technology products evolve through new features, architecture improvements, performance enhancements and security upgrades. We develop product upgrades based on user requirements, technology changes and product roadmaps. Continuous upgrading allows software products to remain relevant and technically capable over time."
  },
  {
    number: 12,
    icon: Rocket,
    title: "Product Commercialisation",
    description: "The final objective of product development is to bring viable technology products to users and markets. We can commercialise software products through SaaS, subscriptions, licensing, white-label models, technology licensing and other lawful business models. Product commercialisation connects technology development with sustainable market opportunities."
  }
];

export const introData = {
  heading: "Product Development Lifecycle",
  leftColumn: {
    title: "Structured Approach",
    description: "We follow a structured product development approach that transforms technology ideas and real-world problems into engineered software products. Each stage of the product lifecycle contributes to product quality, usability, security, scalability and commercial viability."
  },
  rightColumn: {
    title: "End-to-End Lifecycle",
    description: "Our product lifecycle combines research, product strategy, architecture, development, testing, security, deployment and continuous improvement. This approach allows us to develop proprietary and specialised technology products with a clear path from concept to market."
  }
};

export const ProductDevelopmentLifecyclePageData = {
  title: "Product Development Lifecycle",
  eyebrow: "Product Development Lifecycle",
  slug: "product-development-lifecycle",
  description: "Following a structured product development approach that transforms technology ideas and real-world problems into engineered software products.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `lifecycle-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Product Lifecycle Stage ${i + 1}`,
    description: "Combining research, product strategy, architecture, development, testing, security, deployment, and continuous improvement.",
    color: "#E9F2ED",
    summary: "Structured product strategy from concept to market."
  })),
  stages,
  introData
};

