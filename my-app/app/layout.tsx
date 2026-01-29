import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css"; // <--- THIS LINE IS MANDATORY
import { Preloader } from "./components/ui/Preloader";

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
    default: "Sparkling Era Global Foundation",
    template: "%s | Sparkling Era"
  },
  description: "Restoring the economic dignity of Bharat by merging the precision of modern finance with the timeless ethics of Dharma.",
  openGraph: {
    images: ['/india-pattern.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} antialiased font-sans bg-[#FDFCF9] text-earth overflow-x-hidden w-full relative`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}