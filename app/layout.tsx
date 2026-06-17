import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaintenanceBanner from "@/components/MaintenanceBanner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaticStudio — Studio-Quality Generative Video Production",
  description: "MaticStudio combines state-of-the-art generative video models with a powerful team workflow, letting any company ship studio-grade marketing, explainer, and training videos in minutes.",
  metadataBase: new URL("https://maticstudio.site"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <div className="flex flex-col min-h-screen">
          <MaintenanceBanner />
          <Navbar />
          <main className="flex-grow pt-[72px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
