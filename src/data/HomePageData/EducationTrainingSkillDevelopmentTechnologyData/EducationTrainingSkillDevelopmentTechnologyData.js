export const EducationTrainingSkillDevelopmentTechnologyData = {
  title: "Education, Training & Skill Development Technology",
  eyebrow: "Education, Training & Skill Development Technology",
  slug: "education-training-skill-development-technology",
  description: "Developing software products and digital platforms for education, training, professional development and skill development.",
  cards: Array.from({ length: 12 }, (_, i) => ({
    id: `edu-${i + 1}`,
    number: String(i + 1).padStart(2, '0'),
    title: `EdTech Platform Product ${i + 1}`,
    description: "Supporting learning management, digital content, assessment, training administration, competency development, and institutional operations.",
    color: "#E9F2ED",
    summary: "Scalable education and skill development technology."
  }))
};
