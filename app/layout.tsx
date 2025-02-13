import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

// There would be more set up here on the regualr for SEO purposes and other things but for the sake of the task we are not going to do that

export const metadata: Metadata = {
  title: "Digital Gates - E-commerce",
  description: "Generated with love by Ahmad Iqtaish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
