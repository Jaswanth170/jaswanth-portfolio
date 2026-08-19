import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: [
    "Jaswanth ST",
    "AI Engineer",
    "ML Engineer",
    "AI Builder",
    "AI Automation",
    "AI Agents",
    "LLM Applications",
    "n8n Automation",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: portfolioData.seo.ogTitle,
    description: portfolioData.seo.ogDescription,
    type: "website",
    locale: "en_US",
    siteName: "Jaswanth ST Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.ogTitle,
    description: portfolioData.seo.ogDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090A] text-[#F5F5F5] selection:bg-accent/20 selection:text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
