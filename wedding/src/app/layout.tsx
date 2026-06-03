import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishinth & Karthika — Wedding Invitation",
  description: "Together with their families, request the honour of your presence as they begin a beautiful journey of love, laughter and forever.",
  openGraph: {
    title: "Nishinth & Karthika — Wedding Invitation",
    description: "30 August 2026 · Thalassery, Kerala",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Cinzel:wght@400;500;600&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
