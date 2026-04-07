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
  title: "Sam Daaa Barber | Honolulu, HI",
  description:
    "Premium barber services in Honolulu, HI. Authentic, precision cuts by Sam Daaa Barber. Book your appointment today.",
  keywords: ["barber", "Honolulu", "Hawaii", "haircut", "fade", "Sam Daaa Barber"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
