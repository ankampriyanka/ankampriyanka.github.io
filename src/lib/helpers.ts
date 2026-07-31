import { projects } from "@/data/projects";
import { research } from "@/data/research";

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getFeaturedResearch() {
  return research.filter((item) => item.featured);
}