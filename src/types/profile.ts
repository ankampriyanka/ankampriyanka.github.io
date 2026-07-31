export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  medium?: string;
  scholar?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  description: string;
  location: string;

  yearsExperience: number;

  currentRole: string;

  company: string;

  interests: string[];

  social: SocialLinks;
}