import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belleminds – AI för små företag",
  description: "Vi skapar en mötesplats för entreprenörer och företagare som vill bli mer effektiva genom AI. Inspiration, vägledning och mod för små företag.",
  keywords: ["AI", "Artificiell Intelligens", "Små företag", "Automation", "Belleminds"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="dark" style={{ background: '#0B0C10', color: '#EAEAEA' }}>
      <head>
        <style id="critical-theme" dangerouslySetInnerHTML={{
          __html: `html,body{background:#0B0C10!important;color:#EAEAEA!important;margin:0;padding:0}`
        }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
        style={{ background: '#0B0C10', color: '#EAEAEA' }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
