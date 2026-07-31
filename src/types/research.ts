export interface Research {
  id: number;
  title: string;
  summary: string;
  area: string;
  status: "Published" | "In Progress" | "Research";
  featured: boolean;
}