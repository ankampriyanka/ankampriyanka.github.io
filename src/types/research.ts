export interface Research {
  id: number;
  title: string;
  summary: string;
  area: string;
  status: "Research" | "In Progress" | "Published";
  featured: boolean;
}