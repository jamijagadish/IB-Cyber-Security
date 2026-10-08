export const RegulatoryComplianceGovernanceData = {
  title: "Regulatory Compliance & Risk Governance",
  eyebrow: "Regulatory Compliance & Risk Governance",
  slug: "regulatory-compliance-governance",
  description: "Specialized GRC software products designed to help organizations fulfill statutory standards and mitigate operational risks.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `grc-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Compliance & Governance System ${i + 1}`,
    description: "Audit trail automation, policy enforcement, data privacy compliance, risk assessment, and regulatory reporting.",
    color: "#F5EBE9",
    summary: "Automated GRC frameworks and risk management."
  }))
};
