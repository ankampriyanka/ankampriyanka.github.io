export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  featured: boolean;
  status: "Completed" | "In Progress" | "Research";
}