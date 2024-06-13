'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import TanstackProvider from '../providers/TanstackProvider';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../supports/context/userContext';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const admin = '/admin';
  const [dataUser, setDataUser] = useState(null);

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          {path.includes(admin) ? null : <Header />}
          <ToastContainer />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
    </UserContext.Provider>
  
  );
}
