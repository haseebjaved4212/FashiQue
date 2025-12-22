import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-audiowide",
})
const golostext = Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-golostext",
});
export const metadata: Metadata = {
  title: "FashiQue",
  description: "Fashique - Your Ultimate Fashion Companion",
};

const lufga = localFont({
  src: [
    {
      path: "../public/E-Commerce-uiCode/assets/Lufga/Fontspring-DEMO-lufga-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/E-Commerce-uiCode/assets/Lufga/Fontspring-DEMO-lufga-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/E-Commerce-uiCode/assets/Lufga/Fontspring-DEMO-lufga-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${lufga.variable} font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
