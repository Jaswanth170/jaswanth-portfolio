import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

const baseUrl = "https://jaswanth-portfolio-psi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: [
    "Jaswanth ST",
    "AI Engineer",
    "ML Engineer",
    "Automation Engineer",
    "AI Builder",
    "AI Automation",
    "AI Agents",
    "LLM Applications",
    "n8n Automation",
  ],
  authors: [{ name: portfolioData.personal.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: `${baseUrl}/`,
    siteName: "Jaswanth ST Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/jaswanth-profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Jaswanth ST — AI/ML Engineer & Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    images: ["/images/jaswanth-profile.jpg"],
  },
  verification: {
    google: "qEttwZ5IZ-n_eYgacQkTCx4u1cs1Nu8tAne0fDZ-UJs",
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
