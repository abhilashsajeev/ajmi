import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import NavbarHead from "@/components/NavbarHead";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IBN AL AJMI",
  description: "IBN AL AJMI Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en-US">
        <body className={inter.className}>
          <NavbarHead />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  );
}
