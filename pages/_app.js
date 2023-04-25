import '@/styles/globals.css';
import { Pacifico, Josefin_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={pacifico.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
