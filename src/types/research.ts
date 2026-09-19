export interface Research {
  id: number;
  slug: string;
  title: string;
  summary: string;
  area: string;
  status: "Research" | "In Progress" | "Published";
  featured: boolean;
}