import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgoldadilip.com"),
  title: "Dr. Golda Dilip | Professor & Head | CSE, SRMIST Vadapalani",
  description:
    "Academic portfolio of Dr. Golda Dilip — Professor & Head, Department of Computer Science & Engineering, SRM Institute of Science and Technology, Vadapalani. Research, publications, PhD supervision and professional profile.",
  keywords: [
    "Dr. Golda Dilip",
    "CSE Professor",
    "SRM Vadapalani",
    "Computer Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Research",
  ],
  authors: [{ name: "Dr. Golda Dilip" }],
  openGraph: {
    title: "Dr. Golda Dilip | Professor & Head | CSE, SRMIST Vadapalani",
    description:
      "Academic portfolio of Dr. Golda Dilip — Professor & Head, Department of Computer Science & Engineering, SRM Institute of Science and Technology, Vadapalani.",
    type: "profile",
    url: "https://drgoldadilip.com",
    siteName: "Dr. Golda Dilip",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Golda Dilip",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Golda Dilip | Professor & Head | CSE, SRMIST Vadapalani",
    description:
      "Academic portfolio of Dr. Golda Dilip — Professor & Head, Department of Computer Science & Engineering, SRM Institute of Science and Technology, Vadapalani.",
    images: ["/images/profile.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Golda Dilip",
  jobTitle: "Professor & Head",
  worksFor: {
    "@type": "Organization",
    name: "SRM Institute of Science and Technology, Vadapalani Campus",
    address: {
      "@type": "PostalAddress",
      streetAddress: "#1, Jawaharlal Nehru Road, Vadapalani",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600026",
      addressCountry: "IN",
    },
  },
  affiliation: "Department of Computer Science & Engineering",
  url: "https://drgoldadilip.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} antialiased`}
    >
      <body className="bg-ivory-50 text-ink-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
