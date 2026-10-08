export const ApisIntegrationDigitalConnectivityData = {
  title: "APIs, Integration & Digital Connectivity",
  eyebrow: "APIs, Integration & Digital Connectivity",
  slug: "apis-integration-digital-connectivity",
  description: "API and integration technologies helping applications, databases, cloud services and digital platforms communicate through structured interfaces.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `api-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Integration & Connectivity API ${i + 1}`,
    description: "Developing APIs, middleware, connectors, and interoperability products to enable software ecosystems to exchange information securely.",
    color: "#F5EBE9",
    summary: "Structured APIs and secure system interoperability."
  }))
};
