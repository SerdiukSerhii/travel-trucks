import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import 'modern-normalize/modern-normalize.css';
import './globals.css';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'TravelTrucks',
  description: 'TravelTrucks — camper rental service.',
  icons: {
    icon: '/favicon.svg',
  },

  openGraph: {
    title: 'TravelTrucks',
    description: 'TravelTrucks — camper rental service.',
    images: [
      {
        url: '/traveltrucks-og.webp',
        width: 1200,
        height: 630,
        alt: 'TravelTrucks camper rental service',
      },
    ],
  },
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
