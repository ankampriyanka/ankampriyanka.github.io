import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Responsible AI Platform",
    description: "An end-to-end governance platform for Responsible AI in automotive, integrating AI lifecycle management, compliance, and risk assessment.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI Governance",
      "EU AI Act"
    ],
    github: "#",
    featured: true,
    status: "Completed",
    category: "Responsible AI",
    },
  {
    id: 2,
    title: "VibeCodeScanner",
    description:
      "A lightweight AI safety scanner that evaluates source code for Responsible AI risks using a rule-based architecture.",
    technologies: [
      "Python",
      "Regex",
      "AI Safety"
    ],
    github: "#",
    featured: true,
    status: "Completed",
    category: "AI Safety"
  },
  {
    id: 3,
    title: "DMS Safety Estimator",
    description:
      "Research prototype that estimates time until the driveing becomes unsafe.",
    technologies: [
      "Computer Vision",
      "Responsible AI",
      "ADAS"
    ],
    github: "#",
    featured: true,
    status: "Completed",
    category: "Research"
  },
   {
    id: 4,
    title: "AI Trust Score Estimator",
    description:
      "Research prototype that estimates AI Trust Scores for Driver Monitoring Systems using safety, fairness, robustness, and explainability metrics.",
    technologies: [
      "Computer Vision",
      "Responsible AI",
      "ADAS"
    ],
    github: "#",
    featured: true,
    status: "Completed",
    category: "Research"
  },
];