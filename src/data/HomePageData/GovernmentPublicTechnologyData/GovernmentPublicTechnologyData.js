export const GovernmentPublicTechnologyData = {
  title: "Government & Public Technology",
  eyebrow: "Government & Public Technology",
  slug: "government-public-technology",
  description: "Developing software products and digital platforms designed to support government departments, public authorities and institutional users.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `gov-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Government Technology Platform ${i + 1}`,
    description: "Addressing administration, information management, citizen services, workflow automation, reporting, and institutional operations.",
    color: "#E8F4F8",
    summary: "Secure digital platforms for public sector technology."
  }))
};
