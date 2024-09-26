import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Providers } from "../components/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: "Pupkultura.lv",
    description:
        "Katru gadu Latvijā ap 450 sieviešu mirst no krūts vēža. Ziedo, lai atbalstītu sievietes, kuras skāris krūts vēzis!",
    metadataBase: new URL("https://pupkultura.lv/"),
    openGraph: {
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pupkultura.lv",
            },
        ],
    },
};

export default function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body className={`${openSans.variable} bg-lightPink`}>
                <Providers>
                    <Header />
                    <main className="min-h-csreen">
                        {children}
                        <SpeedInsights />
                    </main>
                    <Footer />
                </Providers>

                <Analytics />
            </body>
            <GoogleAnalytics gaId="GTM-P8KB29RC" />
        </html>
    );
}
