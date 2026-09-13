export interface ResearchInterest { name: string; shortDescription?: string; }
export interface ResearchProfile { platform: "Scopus" | "Google Scholar" | "Vidwan" | "ORCID"; description: string; url: string; }
export const researchInterests: ResearchInterest[] = [
  { name: "Artificial Intelligence" },
  { name: "Machine Learning" },
  { name: "Data Science" },
  { name: "Data Mining & Analytics" },
  { name: "Blockchain" },
  { name: "Network Security" },
];
export const researchProfiles: ResearchProfile[] = [
  { platform: "Scopus", description: "Citation metrics, h-index and publication database", url: "https://www.scopus.com/authid/detail.uri?authorId=57211641166" },
  { platform: "Google Scholar", description: "Scholarly publications and citation graph", url: "https://scholar.google.com/citations?user=IXCUjQMAAAAJ&hl=en" },
  { platform: "Vidwan", description: "Indian national research profiling", url: "https://vidwan.inflibnet.ac.in/profile/652417" },
  { platform: "ORCID", description: "Persistent digital identifier for researchers", url: "https://orcid.org/0000-0001-5175-6957" },
];
