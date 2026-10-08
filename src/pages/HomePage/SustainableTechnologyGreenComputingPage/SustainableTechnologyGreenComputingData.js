export const SustainableTechnologyGreenComputingData = {
  title: "Sustainable Technology & Green Computing",
  eyebrow: "Sustainable Technology & Green Computing",
  slug: "sustainable-technology-green-computing",
  description: "Engineering energy-efficient software architectures, carbon-aware cloud workload schedulers and sustainable computing products.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `green-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `Sustainable Technology Solution ${i + 1}`,
    description: "Resource-optimized code compilation, server energy monitoring, cloud carbon analytics, and eco-friendly data storage.",
    color: "#E9F2ED",
    summary: "Energy-efficient software and green cloud computing."
  }))
};
