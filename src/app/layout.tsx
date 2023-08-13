import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ApolloWrapper } from './ApolloWrapper';
import Navbar from '@components/navbar';
import Hero from '@src/sections/hero';
import { navbarProps } from '@components/navbar/mock-data';
import Footer from '@components/footer';
import { footerProps } from '@components/footer/mock-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'React Conference - firasel',
  description:
    'Stay updated with the latest on the React Conference. This platform, built with Next.js and a GraphQL API, provides real-time information on schedules, speakers, and topics. Connect with the global React community and explore the latest in React technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar {...navbarProps} />
          </div>
          {children}
          <Footer {...footerProps} />
        </ApolloWrapper>
      </body>
    </html>
  );
}
