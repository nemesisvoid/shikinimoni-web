import type { Metadata } from 'next';
import './globals.css';

import { Josefin_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/sections/footer';
import { Cursor } from '@/components/cursor';
import { ThemeProvider } from '@/components/ui/theme-provider';

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
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'>
          <Navbar />
          {/* <Cursor /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
