export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
  credential?: string;
  status: "Active" | "Completed";
}