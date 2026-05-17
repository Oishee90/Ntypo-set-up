import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charluie Landing",
  description: "Modern Next.js Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  cz-shortcut-listen="true">{children}</body>
    </html>
  );
}