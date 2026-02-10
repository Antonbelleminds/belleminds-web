import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const interHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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
          __html: `
            html,body{background:#0B0C10!important;color:#EAEAEA!important;margin:0;padding:0}
            html::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:#0B0C10;z-index:-1}
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const forceTheme = () => {
                document.documentElement.style.background = '#0B0C10';
                document.documentElement.style.color = '#EAEAEA';
                document.body.style.background = '#0B0C10';
                document.body.style.color = '#EAEAEA';
              };
              forceTheme();
              if (typeof window !== 'undefined') {
                const observer = new MutationObserver(forceTheme);
                observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'class'] });
                observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class'] });
                setInterval(forceTheme, 100);
              }
            })();
          `
        }} />
      </head>
      <body
        className={`${interHeading.variable} ${inter.variable} font-body antialiased overflow-x-hidden`}
        style={{ background: '#0B0C10', color: '#EAEAEA', maxWidth: '100vw' }}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
