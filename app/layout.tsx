import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHRP Strategic HR Centre — International HR Certification",
  description:
    "Become a globally certified Strategic HR Leader. PHRi™ & SPHRi® certification programmes by SHRP & HRCI. Admissions open.",
  metadataBase: new URL("https://www.shrpglobal.com"),
  openGraph: {
    title: "SHRP Strategic HR Centre — International HR Certification",
    description:
      "Become a globally certified Strategic HR Leader. PHRi™ & SPHRi® certification programmes by SHRP & HRCI. Admissions open.",
    url: "https://www.shrpglobal.com",
    siteName: "SHRP Strategic HR Centre",
    images: [
      {
        url: "/flyer1.png",
        width: 800,
        height: 1000,
        alt: "SHRP International HR Certification Programme — PHRi & SPHRi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHRP Strategic HR Centre — International HR Certification",
    description:
      "Become a globally certified Strategic HR Leader. PHRi™ & SPHRi® certification programmes by SHRP & HRCI.",
    images: ["/flyer1.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
