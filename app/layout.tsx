import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Instrument_Sans, Instrument_Serif, Parisienne } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
// If loading a variable font, you don't need to specify the font weight
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-instr-sans",

})
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: "--font-instr-serif",

})
const parisienne = Parisienne({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: "--font-parisienne",
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Printiaire",
  description: "Personalized magazines every month from your Substack and Pinterest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${instrumentSans.className} ${parisienne.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics/>
    </html>
  );
}
