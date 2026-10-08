export const SoftwareArchitectureProductEngineeringData = {
  title: "Software Architecture & Product Engineering",
  eyebrow: "Software Architecture & Product Engineering",
  slug: "software-architecture-product-engineering",
  description: "Designing software architecture and product engineering systems that support performance, security, scalability, maintainability and long-term product evolution.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `arch-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Architecture Engineering System ${i + 1}`,
    description: "Covering system architecture, application development, database engineering, UX, APIs, integration, testing, and quality engineering.",
    color: "#F3EFE8",
    summary: "Scalable software architecture and system design."
  }))
};
