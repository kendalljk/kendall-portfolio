import "./globals.css";
import type { Metadata } from "next";
import { Lato, Montserrat, Merriweather, Oswald } from "next/font/google";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["300", "400"],
    display: "swap",
    variable: "--font-oswald",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400"],
    display: "swap",
    variable: "--font-lato",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["600"],
    display: "swap",
    variable: "--font-montserrat",
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400"],
    display: "swap",
    variable: "--font-merriweather",
});

export const metadata: Metadata = {
    title: "Kendall Cercone",
    description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${lato.variable} ${merriweather.variable} ${oswald.variable}`}
            >
                <div className="flex flex-col min-h-screen">
                    <Navigation />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
