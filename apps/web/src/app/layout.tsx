'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import TanstackProvider from '../providers/TanstackProvider';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const admin = '/admin';

  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          {path.includes(admin) ? null : <Header />}
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
