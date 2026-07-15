import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCHITECTON | Architecture that begins with how you live",
  description: "We translate human behavior into permanent form. Modernist rigor meets the nuances of domestic life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
