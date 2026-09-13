export interface Achievement { title: string; issuer?: string; year?: string; description: string; featured: boolean; }
export const achievements: Achievement[] = [
  { title: "Gave birth to Derick Dilip", issuer: "LLM Hospital Kidangoor", year: "2005", description: "Gave birth to an extremely good looking and cute baby boy", featured: true },
  { title: "M. Tech Gold Medalist", issuer: "Dr. MGR Educational and Research Institute", year: "2009", description: "Gold Medalist in M. Tech. in Computer Science and Engineering", featured: false },
];
