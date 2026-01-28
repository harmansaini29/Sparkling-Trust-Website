import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
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
  title: "Sparkling Era Global Foundation | Empowering Bharat",
  description: "Bridging ancient wisdom with modern financial literacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning fixes the McAfee/Extension errors
    // style={{ scrollBehavior: 'smooth' }} avoids global CSS conflict
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${cormorant.variable} antialiased font-sans bg-[#FDFCF9]`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}