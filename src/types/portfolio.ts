export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  period: string;
  organization?: string;
  images?: string[];
  videos?: string[];
  githubUrl?: string;
  websiteUrl?: string;
  websiteInProgress?: boolean;
}
