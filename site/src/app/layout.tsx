import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import DossierNav from "@/components/layout/DossierNav";

const sans = IBM_Plex_Sans({
  variable: "--font-sans-pri",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif-pri",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-pri",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Closed Loop // A Battery Economy Roadmap for Canada",
  description:
    "A multi decade policy dossier for the replacement of lithium ion batteries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth-y`}
    >
      <body className="min-h-screen">
        <DossierNav />
        {children}
      </body>
    </html>
  );
}
