'use client';

<<<<<<< HEAD
import type { Metadata } from 'next';
import ReduxProvider from '@/providers/ReduxProvider'
=======
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
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
// import ReduxProvider from '@/providers/ReduxProvider';


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
=======
  const [dataUser, setDataUser] = useState(null);
>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
  const path = usePathname();
  const admin = '/admin';
  const [dataUser, setDataUser] = useState(null);

  return (
<<<<<<< HEAD
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
=======
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

>>>>>>> cd8008a6c4c38056e1c2139b97ff56298293824b
  );
}
