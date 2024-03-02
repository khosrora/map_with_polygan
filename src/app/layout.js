import { estedad } from "@/utils/local_fonts";
import { Inter } from "next/font/google";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${estedad.variable} font-sans`}>{children}</body>
    </html>
  );
}
