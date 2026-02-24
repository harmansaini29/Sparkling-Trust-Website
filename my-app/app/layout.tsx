import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Preloader } from "./components/ui/Preloader";
import { FloatingActions } from "./components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sparklingera.org'), 
  title: {
    default: "Sparkle Era Global Foundation",
    template: "%s | Sparkle Era"
  },
  description: "Building a financially aware and socially empowered India through financial literacy, women empowerment, cultural awareness, and environmental sustainability.",
  keywords: ["NGO", "India", "Financial Literacy", "Women Empowerment", "Pune NGO", "Sparkle Era", "Rahul Mane"],
  openGraph: {
    title: "Sparkle Era Global Foundation",
    description: "Building a financially aware and socially empowered India.",
    images: ['/india-pattern.png'],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning here prevents any generic root-level extension injections
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} antialiased font-sans bg-[#FDFCF9] text-[#064E3B] w-full relative overflow-x-hidden`}>
        <Preloader />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}