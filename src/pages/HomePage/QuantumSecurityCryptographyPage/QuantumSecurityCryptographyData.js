export const QuantumSecurityCryptographyData = {
  title: "Quantum Security & Advanced Cryptography",
  eyebrow: "Quantum Security & Advanced Cryptography",
  slug: "quantum-security-cryptography",
  description: "Pioneering post-quantum cryptographic software and next-generation data encryption products.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `quantum-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Post-Quantum Security Solution ${i + 1}`,
    description: "Post-quantum lattice cryptography, secure key exchange mechanisms, zero-knowledge proofs, and HSM integrations.",
    color: "#EBEBF2",
    summary: "Post-quantum encryption and advanced cryptography."
  }))
};
