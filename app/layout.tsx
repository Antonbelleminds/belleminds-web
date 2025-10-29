import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belleminds – Icke-mänsklig intelligens för små företag",
  description: "Vi skapar en mötesplats för entreprenörer och företagare som vill bli mer effektiva genom icke-mänsklig intelligens. Inspiration, vägledning och mod för små företag.",
  keywords: ["AI", "Artificiell Intelligens", "Små företag", "Automation", "Belleminds", "Icke-mänsklig intelligens"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
