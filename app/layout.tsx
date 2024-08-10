import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "mo'men portfolio",
  description: "portfolio for mo'men as a web developer",
  keywords: [
    "mo'men wagdy",
    "next developer",
    "react developer",
    "frontend developer",
    "javascript developer",
    "frontend portfolio",
    "portfolio",
    "react portfolio",
    "next portfolio",
    "moimen portfolio",
    "moamen portfolio",
    "mo'men portfolio",
    "responsive designer",
    "mo'men",
    "hiring frontend",
    "needed frontend",
    "experienced frontend",
    "linked in frontend",
    "linked in developer",
    "linked in frontend developer",
    "tailwindCSS developer",
    "bootstrap developer",
    "spotify",
    "myspotify music website",
    "online store projects",
    "e-commerce website",
    "e-commerce developer",
    "e-commerce projects",
    "violet store",
    "myspotify",
    "online store prodcuts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth ">
        <body className="bg-gradient-to-b from-lightBlue via-lightestBlue to-lightBlue dark:from-darkBlue dark:via-darkestBlue dark:to-darkBlue font-lexend ">
          <Navbar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
