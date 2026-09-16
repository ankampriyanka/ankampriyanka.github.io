export type PortfolioItem = {
  title: string;
  description: string;
  category: string;
  link?: string;
  status: "Portfolio" | "Research" | "Reserved";
};

export const greatLearningPortfolio: PortfolioItem[] = [
  {
    title: "AI/ML Portfolio Projects",
    description:
      "Selected applied AI and machine learning projects completed as part of the Great Learning PGP in Artificial Intelligence & Machine Learning. Individual project details can be added here as portfolio entries are curated.",
    category: "Great Learning · AI/ML",
    link: "https://www.mygreatlearning.com/eportfolio/priyanka-ankam",
    status: "Portfolio",
  },
];

export const walshResearchPortfolio: PortfolioItem[] = [
  {
    title: "Doctoral & Organizational Research",
    description:
      "A dedicated space for Walsh College doctoral work and organizational research assignments, including research-led work in trustworthy AI, Responsible AI, AI safety, AI assurance and governance.",
    category: "Walsh College · DBA AI/ML",
    status: "Reserved",
  },
];
