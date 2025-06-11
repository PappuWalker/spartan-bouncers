import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWithSplash from './components/AppWithSplash';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spartan Bouncers - Professional Event Security",
  description: "Book professional bouncers and security personnel for your events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-black text-white'}>
        <AppWithSplash>{children}</AppWithSplash>
      </body>
    </html>
  );
}
