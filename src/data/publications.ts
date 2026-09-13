export interface Publication {
  title: string; authors: string[]; year: number; venue: string;
  type: "Journal" | "Conference" | "Book Chapter" | "Other";
  doi?: string; url?: string; category?: string;
}
export const publications: Publication[] = [
  { title: "Automatic Legal Text Summarization: A Survey on Techniques, Rhetorical Roles, Challenges and Future Scope", authors: ["Rubini A, Golda Dilip"], year: 2026, venue: "2026 4th International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT)", type: "Conference", doi: "10.1109/IDCIoT67589.2026.11455895" },
  { title: "Credit Card Fraud Detection Using XG Boost", authors: ["Shankar A.V., Ramamurthy M., Golda Dilip"], year: 2025, venue: "Computing Technologies for Sustainable Development, Springer — Communications in Computer and Information Science", type: "Book Chapter", doi: "10.1007/978-3-031-82383-1_23" },
  { title: "Enhancing Cyber-Physical Systems Security: A Review of Deep Learning and Blockchain Integration", authors: ["K. Selvi, Golda Dilip"], year: 2024, venue: "2024 5th International Conference on Image Processing and Capsule Networks (ICIPCN)", type: "Conference", doi: "10.1109/ICIPCN63822.2024.00126" },
  { title: "A Comparative Analysis of Supervised Classification Algorithms and Missing Data Handling for Enhancing Chronic Kidney Disease Prediction", authors: ["A. Swathi, Golda Dilip, A. Vani Vathsala"], year: 2023, venue: "International Journal on Recent and Innovation Trends in Computing and Communication", type: "Journal", doi: "10.17762/ijritcc.v11i8.9084" },
  { title: "Artificial Intelligence-Based Smart Comrade Robot for Elders Healthcare with Strait Rescue System", authors: ["Golda Dilip, Ramakrishna Guttula, Sivaram Rajeyyagari, Hemalatha S., Radha Raman Pandey, Ashim Bora, Pravin R. Kshirsagar, Khanapurkar M. M., Venkatesa Prabhu Sundramurthy"], year: 2022, venue: "Journal of Healthcare Engineering", type: "Journal", doi: "10.1155/2022/9904870" },
  { title: "Diagnosis of Fault Node in Wireless Sensor Networks Using Adaptive Neuro-Fuzzy Inference System", authors: ["M. Sundar Rajan, Golda Dilip, K. Nithiyananthan, M. Namratha, Sankararao Majji, Srikanta Kumar Mohapatra, Tulasi Radhika Patnala, Santoshachandra Rao Karanam"], year: 2021, venue: "Applied Nanoscience", type: "Journal", doi: "10.1007/s13204-021-01934-0" },
];
