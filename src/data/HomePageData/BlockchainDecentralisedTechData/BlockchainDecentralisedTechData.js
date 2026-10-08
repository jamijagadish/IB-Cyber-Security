export const BlockchainDecentralisedTechData = {
  badge: "BLOCKCHAIN TECHNOLOGY",
  titleLine1: "Blockchain & Decentralised",
  titleLine2: "Technologies",
  title: "Blockchain & Decentralised Technologies",
  eyebrow: "Blockchain & Decentralised Technologies",
  slug: "blockchain-decentralised-tech",
  description: "Developing enterprise distributed ledger software, smart contracts and immutable record verification platforms for trust-based digital transactions.",
  paragraphs: [
    "Developing enterprise distributed ledger software, smart contracts and immutable record verification platforms for trust-based digital transactions.",
    "We combine cryptographic verification, decentralized architectures, and auditable smart contracts to create transparent, tamper-proof systems for complex business networks."
  ],
  ctaText: "Explore Our Blockchain Solutions",
  features: [
    {
      id: "smart-contracts",
      title: "Smart Contracts",
      description: "Automated and auditable digital agreements.",
      position: "top-left",
      iconType: "file"
    },
    {
      id: "distributed-ledger",
      title: "Distributed Ledger",
      description: "Secure multi-party transaction records.",
      position: "bottom-left",
      iconType: "database"
    },
    {
      id: "cryptographic-security",
      title: "Cryptographic Security",
      description: "Tamper-resistant verification.",
      position: "top-right",
      iconType: "shield"
    },
    {
      id: "immutable-records",
      title: "Immutable Records",
      description: "Transparent and traceable data.",
      position: "bottom-right",
      iconType: "cube"
    }
  ],
  bottomBadges: [
    { id: "crypto", label: "CRYPTOGRAPHY", iconType: "shield" },
    { id: "smart-contracts-badge", label: "SMART CONTRACTS", iconType: "file" },
    { id: "dlt", label: "DLT", iconType: "network" },
    { id: "web3", label: "WEB3", iconType: "cube" },
    { id: "identity", label: "DIGITAL IDENTITY", iconType: "fingerprint" }
  ],
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `chain-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Decentralised Ledger System ${i + 1}`,
    description: "Consensus algorithms, private permissioned ledgers, cryptographic hashing, verifiable credentials, and decentralized storage.",
    color: "#F3EFE8",
    summary: "Immutable ledger verification and smart contracts."
  }))
};
