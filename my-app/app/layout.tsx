import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Preloader } from "./components/ui/Preloader";
import { FloatingActions } from "./components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Ensures text is visible immediately while font loads
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap", // Ensures text is visible immediately while font loads
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
    images: ['/hero-bg-clean.jpg'],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-[#FDFCF9] text-[#064E3B] font-sans antialiased selection:bg-[#F97316]/30">
        <Preloader /> 
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}