export interface Education { degree: string; branch: string; institution?: string; year?: string; }
export const education: Education[] = [
  { degree: "Ph.D", branch: "Computer Science & Engineering", institution: "Sathyabama University", year: "2016" },
  { degree: "M.Tech", branch: "Computer Science & Engineering", institution: "Dr. MGR Educational and Research Institute", year: "2009" },
  { degree: "M.E.", branch: "Engineering Management", institution: "Manipal Institute of Technology", year: "2001" },
  { degree: "B.E.", branch: "Computer Science & Engineering", institution: "Mangalore University", year: "1999" },
];
