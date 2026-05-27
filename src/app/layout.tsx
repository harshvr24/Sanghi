import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteProvider } from "@/context/QuoteContext";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanghi Pipes & Tubes | Premium Industrial Solutions",
  description: "Sanghi Tubes Private Limited - Manufacturer and supplier of Ductile Iron Pipes, Cast Iron Pipes, Fittings, and Valves in Kanpur, India.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  // The middleware sets x-pathname so we can detect admin routes server-side.
  const pathname = headersList.get("x-pathname") ?? "";
  const isAdmin  = pathname.startsWith("/admin");

  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <QuoteProvider>
          {!isAdmin && <ScrollProgress />}
          {!isAdmin && <Navbar />}
          <main className="flex-grow">
            {children}
          </main>
          {!isAdmin && <Footer />}
        </QuoteProvider>
      </body>
    </html>
  );
}
