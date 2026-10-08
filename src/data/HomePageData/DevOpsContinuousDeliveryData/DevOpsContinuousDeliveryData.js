export const DevOpsContinuousDeliveryData = {
  title: "DevOps & Continuous Delivery",
  eyebrow: "DevOps & Continuous Delivery",
  slug: "devops-continuous-delivery",
  description: "Implementing modern DevOps practices and automated CI/CD pipelines to accelerate release cycles while maintaining security.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `devops-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `DevOps Automation Pipeline ${i + 1}`,
    description: "Automated testing, Infrastructure as Code (IaC), container orchestration, zero-downtime deployment, and telemetry.",
    color: "#F3EFE8",
    summary: "Automated CI/CD pipelines and DevOps engineering."
  }))
};
