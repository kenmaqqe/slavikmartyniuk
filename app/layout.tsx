import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://slavikmartyniuk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Славік Мартинюк — Stand-up Comedian",
    template: "%s | Славік Мартинюк",
  },
  description:
    "Стендап-комік. Автор «Медичних історій». Квитки на шоу, YouTube, контакти.",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "Славік Мартинюк",
    title: "Славік Мартинюк — Stand-up Comedian",
    description:
      "Стендап-комік. Автор «Медичних історій». Квитки на шоу, YouTube, контакти.",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Славік Мартинюк" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Славік Мартинюк — Stand-up Comedian",
    description: "Стендап-комік. Автор «Медичних історій».",
    images: ["/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-body">
        {children}
      </body>
    </html>
  );
}
