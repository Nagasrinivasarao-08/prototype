export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ServiceCategoryGroup {
  id: string;
  categoryName: string;
  description: string;
  services: ServiceItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  isFeatured?: boolean;
  href?: string;
  iconName?: string;
}

export interface HRMSProductData {
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  benefits: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  challenge: string;
  capability: string;
  iconName?: string;
  impact?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: string;
  clientLocation: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  phone?: string;
  isHQ?: boolean;
}

export interface TechCategory {
  name: string;
  items: string[];
}
