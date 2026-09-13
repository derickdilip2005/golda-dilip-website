export interface AcademicEvent {
  date: string; title: string;
  type: "Conference" | "Workshop" | "FDP" | "Seminar" | "Invited Talk" | "Other";
  venue?: string; description?: string; imagePath?: string;
}
export const events: AcademicEvent[] = [
  { date: "September 2026", title: "TRANSNATIONAL TWC'26", type: "Conference", venue: "SRM VDP Campus, Chennai", description: "Convener at Tamil Welsh Conference 2026" },
  { date: "April 2026", title: "ICISD'26", type: "Conference", venue: "SRM VDP Campus, Chennai", description: "Convener at International Conference on Intelligent Systems and Digital Transformation (ICISD'26)" },
  { date: "May 2025", title: "ICISD'25", type: "Conference", venue: "SRM VDP Campus, Chennai", description: "Convener at International Conference on Intelligent Systems and Digital Transformation (ICISD'25)" },
];
