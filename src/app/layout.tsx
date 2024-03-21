import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import 'react-multi-carousel/lib/styles.css'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const metadata: Metadata = {
  title: "LiiGi Football News, Fixtures, Scores & Results",
  description: "For all the latest LiiGi news, visit the official website of the LiiGi.",
  icons: {
    icon: "/LiiGi.jpg"
  },
  openGraph: {
    title: 'LiiGi Football News, Fixtures, Scores & Results',
    description: "For all the latest LiiGi news, visit the official website of the LiiGi.",
    images: ["/LiiGi.jpg"]
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
