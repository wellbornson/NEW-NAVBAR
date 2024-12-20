import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import "./globals.css";




export const metadata: Metadata = {
  title: "Homework",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    <Header/>
 

    
        {children}
<Footer/>
      </body>
    </html>
  );
}