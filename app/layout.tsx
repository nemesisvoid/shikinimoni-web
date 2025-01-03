import type { Metadata } from 'next';
import './globals.css';

import { Josefin_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { Cursor } from '@/components/cursor';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shikinimoni',
  description: 'Investing in Real Estate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${josefin.className} antialiased`}>
        <Navbar />
        {/* <Cursor /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
