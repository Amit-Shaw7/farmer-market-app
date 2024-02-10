import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Logo from "@/components/Logo";
import BrandName from "@/components/BrandName";
import Container from "@/components/Container";

const roboto = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="mt-2 ml-2 flex items-center gap-4 w-max">
          <Logo />
          <BrandName />
        </div>

        <Container className="mt-20">
          {children}
        </Container>

        <Footer />
      </body>
    </html>
  );
}