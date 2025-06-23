import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tobias Dunn",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} bg-background flex flex-col antialiased max-w-screen`}
      >
        <Navbar />
        <div className="bg-accent md:bg-[url('/wallpaper.png')] md:bg-cover md:bg-center md:bg-fixed flex flex-col pt-10 gap-6">
          <main className="flex flex-col gap-[32px] items-center sm:items-start">
            <div className="flex flex-col w-full items-center justify-items-center min-h-screen gap-10">
              <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl flex flex-col gap-10">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
