export interface Book {
  title: string; isbn?: string; publisher: string;
  year?: string; coverImage?: string; description?: string;
}
export const books: Book[] = [
  { title: "Smart Campus Initiatives: Projects Driving Educational Automation Vol-2", isbn: "[ISBN - 978-93-7020-654-0]", publisher: "Selfypage Developers Pvt Ltd", year: "2025", coverImage: "/images/books/placeholder-2.jpg" },
  { title: "Block chain technology for cutting edge engineering", isbn: "[ISBN]", publisher: "Scientific Iternational Publishing House",  year: "2019", coverImage: "/images/books/placeholder-1.jpg" }
];
