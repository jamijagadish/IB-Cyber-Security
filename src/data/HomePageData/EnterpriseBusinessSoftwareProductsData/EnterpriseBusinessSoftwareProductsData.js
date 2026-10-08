export const EnterpriseBusinessSoftwareProductsData = {
  title: "Enterprise & Business Software Products",
  eyebrow: "Enterprise & Business Software Products",
  slug: "enterprise-business-software-products",
  description: "Developing software products designed to help businesses and organisations manage operations, information, workflows and digital processes.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `ent-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Enterprise Software Product ${i + 1}`,
    description: "Covering management systems, automation, analytics, communication, productivity, and organizational software.",
    color: "#EBEBF2",
    summary: "Reusable and scalable enterprise software products."
  }))
};
