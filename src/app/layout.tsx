import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/app/components/Header";
import ViewCanvas from "./components/ViewCanvas";

const aphino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable:"--font-alpino"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aphino.variable}>
      <body className="bg-yellow-300 overflow-x-hidden "
      >
        <Header/>
        <main>
        {children}
        <ViewCanvas/>
        </main>
      </body>
    </html>
  );
}
