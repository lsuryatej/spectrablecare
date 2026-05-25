import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SpectrAble — Daily support for children with autism",
  description:
    "SpectrAble connects caregivers, therapists, and clinic teams around a child's daily behavioral data. AI-assisted insights. Therapist-reviewed. HIPAA-compliant.",
  keywords: ["autism", "ASD", "ABA therapy", "caregiver app", "behavior tracking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
