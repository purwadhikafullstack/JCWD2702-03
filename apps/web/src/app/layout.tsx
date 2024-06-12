'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePathname } from 'next/navigation';
import TanstackProvider from '@/providers/TanstackProviders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
          {children}
          {path.includes(admin) ? null : <Footer />}
        </TanstackProvider>
      </body>
    </html>
  );
}
