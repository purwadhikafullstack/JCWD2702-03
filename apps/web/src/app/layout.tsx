'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import TanstackProvider from '../providers/TanstackProvider';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../supports/context/userContext';
import { CartProvider } from '@/supports/context/cartContext';
import { useState } from 'react';
// import ReduxProvider from '@/providers/ReduxProvider';


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
      <CartProvider>
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
      </CartProvider>
    </UserContext.Provider>

  );
}
