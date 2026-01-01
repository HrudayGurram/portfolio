import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactSection from "@/src/components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hruday Gurram",
  description: "Portfolio of Hruday Gurram - Frontend Web Developer",
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
        <header className="fixed z-auto top-0 w-full">
          <div className="bg-[#222222] min-h-[80]">
            <div className="flex items-center justify-around min-h-[80]">
              <span>Home</span>
              <span>Projects</span>
              <span>Experience</span>
              <span>Contact</span>
            </div>
          </div>
        </header>
        <div className="mt-[80px]">
          {children}
        </div>
        <footer className="flex items-center w-full justify-around min-h-[80] bg-[#222222] text-gray-300 p-16">
          <ContactSection />
        </footer>
      </body>
    </html>

  );
}
