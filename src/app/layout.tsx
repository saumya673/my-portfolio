import type { Metadata, Viewport } from "next";
import { Jacques_Francois } from "next/font/google";
import "@/styles/global.css";

const jacquesFrancois = Jacques_Francois({
  variable: "--font-jacques-francois",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saumya — Portfolio",
  description: "Hello, I'm Saumya. Welcome to my portfolio.",
};

export const viewport: Viewport = {
  themeColor: "#1e1e1e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jacquesFrancois.variable}>
      <body>{children}</body>
    </html>
  );
}
