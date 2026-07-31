export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;

  description: string;

  achievements: string[];

  technologies?: string[];
}