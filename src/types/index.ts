export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  idea: string;
  strategy?: string;
  creativeDirection: string;
  campaign: string;
  outcome: string;
  metrics?: { label: string; value: string }[];
  deliverables: string[];
  featured?: boolean;
}

export interface Service {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  previewImage: string;
  category: string;
  instagramHook?: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  caption: string;
  type: "reel" | "post" | "carousel";
  date: string;
  likes: number;
  comments: number;
  image: string;
  url: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  year: string;
}
