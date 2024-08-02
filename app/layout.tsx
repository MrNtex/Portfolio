import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { Toaster } from "@/components/ui/toaster"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Footer } from "@/components/Footer";
import Toggles from "@/components/Toggles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Niemiec",
  description: "Backend developer and GameDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' scroll-smooth'}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster/>
            <FloatingNav navItems={[{name: 'Projects', link: '/'}, {name: 'About me', link: '/about-me'}]}/><Toggles/>{children}<Footer/></ThemeProvider></body>
    </html>
  );
}
