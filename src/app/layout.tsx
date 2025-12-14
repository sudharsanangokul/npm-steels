import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { EnquiryProvider } from '@/contexts/enquiry-context';
import { EnquiryCart } from '@/components/enquiry-cart';
import { WhatsAppBubble } from '@/components/whatsapp-bubble';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const fontMontserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'NTM Metals - Steel Supply & Cutting',
  description: 'Premium Steel Sheets & Precision Cutting. Your trusted supplier for HR sheets, CR sheets, GI sheets, SS sheets, checker plates, and custom metal cutting solutions.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontPoppins.variable,
          fontMontserrat.variable
        )}
      >
        <EnquiryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <WhatsAppBubble />
          <Footer />
          <Toaster />
          <EnquiryCart />
        </EnquiryProvider>
      </body>
    </html>
  );
}
