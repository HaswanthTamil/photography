import type { Metadata } from "next";
import "./globals.css";
import Preloader from "./components/Preloader";
export const metadata: Metadata = {
  title: "Stillroom | Professional Photography Studio",
  description: "A soft editorial photography studio portfolio for portraits, family sessions, brand imagery, and events.",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,650&family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body-md">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
