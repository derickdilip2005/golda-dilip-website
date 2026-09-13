export interface Certification {
  title: string; issuer: string; year: string;
  imagePath?: string; pdfPath?: string; externalUrl?: string;
}
export const certifications: Certification[] = [
  { title: "14 Days Faculty Development Program on Agentic AI and Vibe Coding (Modern AI Skills) for Educators", issuer: "Scrollwell", year: "2026", imagePath: "/images/certifications/placeholder-1.jpg", externalUrl: "https://scrollwell.com/verify.php?certificateID=SW202610525&sig=1eb4a9995cc8f86d" },
  { title: "10 Days FDP on Generative AI & Prompt Engineering for Educators", issuer: "Scrollwell", year: "2025", imagePath: "/images/certifications/placeholder-2.jpg", externalUrl: "https://scrollwell.com/verify.php?certificateID=SW20258722" },
  { title: "3 Days FDP on Creating a Professional Digital Profile for Educators", issuer: "Scrollwell", year: "2025", imagePath: "/images/certifications/placeholder-3.jpg", externalUrl: "https://scrollwell.com/verify.php?certificateID=SW20258493" },
];
