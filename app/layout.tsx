import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const vazirfont= localFont({
  src:'../public/fonts/Vazirmatn-Regular.woff2'
})

export const metadata: Metadata = {
  title: "Kem Light",
  description: "datasheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirfont.className}   >{children}</body>
    </html>
  );
}
