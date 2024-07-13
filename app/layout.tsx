import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const urbanist = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My profolio Sk 👨‍💻",
  description: "Creando la my profolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
