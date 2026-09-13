export interface PhDScholar { name: string; researchArea: string; year: string; status: "Completed" | "Ongoing"; }
export const phdSupervisionStats = { completed: 2, ongoing: "[Ongoing count]" };
export const phdScholars: PhDScholar[] = [
  { name: "Dr. Jananee V", researchArea: "Deep Learning and Cybersecurity",  year: "2025", status: "Completed" },
  { name: "Dr. V Deepa", researchArea: "Image Processing and Computer Vision", year: "2026", status: "Completed" },
];
