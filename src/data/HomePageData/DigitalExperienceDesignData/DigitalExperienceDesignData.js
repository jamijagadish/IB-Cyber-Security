export const DigitalExperienceDesignData = {
  title: "Digital Experience & UI/UX Design",
  eyebrow: "Digital Experience & UI/UX Design",
  slug: "digital-experience-design",
  description: "Designing intuitive user interfaces and immersive digital experiences that elevate user engagement and accessibility.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `ux-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `UI/UX Design Platform ${i + 1}`,
    description: "User research, interactive prototyping, accessibility compliance (WCAG), design systems, and frontend optimization.",
    color: "#E9F2ED",
    summary: "Human-centered UI/UX design and design systems."
  }))
};
