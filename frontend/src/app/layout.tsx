import AppProvider from "@/store/AppProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const roboto = Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <AppProvider>
                    {children}
                </AppProvider>
            </body>
        </html>
    );
}