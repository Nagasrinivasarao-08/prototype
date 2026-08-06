import { MetricItem, OfficeLocation } from "@/types";

export const COMPANY_INFO = {
  name: "Aspire Software Consultancy",
  legalName: "Aspire Software Consultancy Pvt. Ltd.",
  tagline: "We manage your IT, so you can manage your business.",
  supportingMessage: "Take charge of your business continuity with innovative IT solutions.",
  subheadline:
    "Take charge of your business continuity with reliable software consulting, custom development, enterprise platforms, CRM, product engineering, automation, and long-term technical support.",
  primaryEmail: "contact@aspiresoftwareconsultancy.com",
  usPhone: "+1 (206) 704-9001",
  indiaPhone: "+91-80-26780972",
};

export const TRUST_METRICS: MetricItem[] = [
  {
    id: "exp",
    value: "18+",
    label: "Years of Experience",
    description: "Delivering business-critical software solutions since 2007.",
  },
  {
    id: "projects",
    value: "1,000+",
    label: "Completed Projects",
    description: "Successfully executed custom software and CRM implementations.",
  },
  {
    id: "countries",
    value: "12+",
    label: "Countries Served",
    description: "Trusted global delivery capability across North America, Europe, and Asia.",
  },
  {
    id: "csat",
    value: "98%",
    label: "Customer Satisfaction",
    description: "High client retention built on reliable execution and transparent communication.",
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: "Bangalore",
    country: "India",
    address: "#5, 1st Cross, Industrial Area, N.S. Palya Road, Bangalore, Karnataka 560076",
    phone: "+91-80-26780972",
    isHQ: true,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "5 Brayford Square, London E1 0SG",
  },
  {
    city: "San Francisco",
    country: "United States",
    address: "237 Kearny Street, Suite #9310, San Francisco, CA 94108",
    phone: "+1 (206) 704-9001",
  },
];

export const CERTIFICATIONS_AND_PARTNERSHIPS = [
  { name: "Salesforce Registered Partner", icon: "Cloud" },
  { name: "ISO 27001:2022 Certified", icon: "ShieldCheck" },
  { name: "Microsoft Partner", icon: "Code2" },
  { name: "Salesforce AppExchange", icon: "Award" },
  { name: "Clutch Top Rated", icon: "Star" },
  { name: "SiliconIndia 25 Promising", icon: "CheckCircle2" },
  { name: "GoodFirms Recognized", icon: "CheckCircle2" },
  { name: "SoftwareWorld Top Rated", icon: "Award" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/aspire-software-consultancy/",
  twitter: "https://twitter.com/Aspire_ASC",
  facebook: "https://www.facebook.com/AspireSoftwareConsultancy/",
  quora: "https://www.quora.com/profile/Aspire-Software-Consultancy",
  medium: "https://medium.com/@aspiresoftwareconsultancy",
  instagram: "https://www.instagram.com/aspiresoftwareconsultancy/",
};
