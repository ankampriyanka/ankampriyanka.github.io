export interface Education {
  id: number;
  degree: string;
  specialization: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  status: "Completed" | "In Progress";
}