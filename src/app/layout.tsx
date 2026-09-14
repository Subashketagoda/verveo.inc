import type { Metadata } from "next";
import { Syne, Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verveo Creative Inc. | Commercial Cinema, Brand Identity & Media Campaigns",
  description:
    "Verveo Creative Inc (@verveo.inc). From designing your Brand identity to producing cinematic media campaigns. Your business doesn't need ads, it needs movies.",
  keywords: [
    "Verveo",
    "Verveo Creative Inc",
    "Creative Agency",
    "Brand Identity Design",
    "Commercial Cinema",
    "Studio Photography",
    "DaVinci Color Grading",
    "Stop-Motion Animation",
    "Wedding Cinema",
    "verveo_weddings"
  ],
  authors: [{ name: "Verveo Creative Inc." }],
  creator: "Verveo Creative Inc.",
  publisher: "Verveo Creative Inc.",
  metadataBase: new URL("https://verveocreative.com"),
  openGraph: {
    title: "Verveo Creative Inc. | Stories Over Ads",
    description:
      "From designing your Brand identity to producing media campaigns. Your business doesn't need ads, it needs movies.",
    url: "https://verveocreative.com",
    siteName: "Verveo Creative Inc.",
    images: [
      {
        url: "/user_media/verveo-cafe-1.jpg",
        width: 1200,
        height: 630,
        alt: "Verveo Creative Inc. — Creative Marketing Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Verveo Creative Inc. — Creative Marketing Agency",
    description: "From designing your Brand identity to producing media campaigns, Verveo is the way to go.",
    images: ["/user_media/verveo-cafe-1.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Verveo Creative Inc.",
  alternateName: "Verveo",
  url: "https://verveocreative.com",
  logo: "https://verveocreative.com/images/logo_monogram.svg",
  sameAs: [
    "https://www.instagram.com/verveo.inc/",
    "https://www.instagram.com/verveo_weddings/"
  ],
  description:
    "Creative agency specializing in Brand Identity Systems, Cinematic Commercial Films, High-End Studio Photography & Retouching, and Stop-Motion Animation.",
  slogan: "Your business doesn't need ads, it needs movies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#5B21B6] text-[#F8F7F3] font-sans selection:bg-[#7C3AED] selection:text-white"
      >
        <Preloader />
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
