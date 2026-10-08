export const InvestigationLegalInstitutionalTechnologyData = {
  title: "Investigation, Legal & Institutional Technology",
  eyebrow: "Investigation, Legal & Institutional Technology",
  slug: "investigation-legal-institutional-technology",
  description: "Specialised software products for lawful investigation, legal technology, case management and institutional workflows.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `inv-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Investigation & Legal System ${i + 1}`,
    description: "Supporting investigation management, evidence-related workflows, intelligence analysis, complaint management, and legal information systems.",
    color: "#F3EFE8",
    summary: "Lawful case management and investigation technology."
  }))
};
