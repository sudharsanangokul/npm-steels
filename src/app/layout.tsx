import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { EnquiryProvider } from "@/context/enquiry-context";

export const metadata: Metadata = {
  title: "NTM Metals - Steel Solutions",
  description: "Your trusted partner for high-quality steel sheets and precision cutting services.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-headline",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          montserrat.variable,
          poppins.variable
        )}
      >
        <EnquiryProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-[170px]">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </EnquiryProvider>
      </body>
    </html>
  );
}
