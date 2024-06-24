'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePathname } from 'next/navigation';
import TanstackProvider from '@/providers/TanstackProviders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../supports/context/userContext';
import { useState } from 'react';
// import ReduxProvider from '@/providers/ReduxProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataUser, setDataUser] = useState(null);
  const path = usePathname();
  const admin = '/admin';

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
      <html lang="en">
        <body className={inter.className}>
          {/* <ReduxProvider> */}
            <TanstackProvider>
              <ToastContainer />
              {path.includes(admin) ? null : <Header />}
              {children}
              {path.includes(admin) ? null : <Footer />}
            </TanstackProvider>
          {/* </ReduxProvider> */}
        </body>
      </html>
    </UserContext.Provider>

  );
}
