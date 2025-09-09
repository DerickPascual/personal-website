import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "derick pascual",
  description: "Derick Pascual's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
