export interface Project {
  id: number;
  title: string;

  description: string;

  technologies: string[];

  github: string;
  demo?: string;

  image?: string;

  featured: boolean;

  status: "Completed" | "In Progress" | "Research";

  category:
    | "Responsible AI"
    | "AI Safety"
    | "Research"
    | "Automation";
}