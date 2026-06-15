import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://MohanPujari-rwe.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohan Pujari | Healthcare Analytics & RWE Senior Business Analyst",
    template: "%s | Mohan Pujari — Healthcare Analytics & RWE",
  },
  description:
    "Senior Business Analyst specializing in U.S. Healthcare Analytics and Real-World Evidence — cohort identification, feasibility assessments, treatment pattern analysis, and patient journey analytics across 50M+ Medicare, Medicaid, and commercial claims records.",
  keywords: [
    "Real-World Evidence",
    "RWE Analyst",
    "Healthcare Analytics",
    "Claims Data Analyst",
    "HEOR",
    "Cohort Identification",
    "Feasibility Assessment",
    "Medicare Medicaid Claims",
    "BigQuery Healthcare",
    "Snowflake Healthcare Data",
    "SAS Programmer Healthcare",
    "Patient Journey Analytics",
  ],
  authors: [{ name: "Mohan Pujari" }],
  creator: "Mohan Pujari",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mohan Pujari | Healthcare Analytics & RWE Senior Business Analyst",
    description:
      "Senior Business Analyst in U.S. Healthcare Analytics & Real-World Evidence — cohort identification, feasibility assessments, and patient journey analytics across 50M+ patient records.",
    siteName: "Mohan Pujari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohan Pujari — Healthcare Analytics & Real-World Evidence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Pujari | Healthcare Analytics & RWE Senior Business Analyst",
    description:
      "Cohort identification, feasibility assessments, treatment pattern analysis, and patient journey analytics across 50M+ claims records.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-body`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
