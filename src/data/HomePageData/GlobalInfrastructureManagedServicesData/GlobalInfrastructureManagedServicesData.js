export const GlobalInfrastructureManagedServicesData = {
  title: "Global Infrastructure & Managed Services",
  eyebrow: "Global Infrastructure & Managed Services",
  slug: "global-infrastructure-managed-services",
  description: "Engineering scalable global infrastructure solutions and managed technology services designed for continuous uptime and operational resilience.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `infra-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Managed Infrastructure Service ${i + 1}`,
    description: "Hybrid cloud operations, network security, data center orchestration, proactive monitoring, and 24/7 technical support.",
    color: "#E8F4F8",
    summary: "Resilient global infrastructure and 24/7 managed services."
  }))
};
