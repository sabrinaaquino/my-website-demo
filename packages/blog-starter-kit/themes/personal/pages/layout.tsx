import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';


export const metadata = {
    metadataBase: new URL('https://sabrinaaquino.dev'),
    title: {
      default: 'Sabrina Aquino',
      template: '%s | Sabrina Aquino',
    },
    description: 'My personal website',
    openGraph: {
      title: 'Sabrina Aquino',
      description: 'My personal website',
      url: 'https://sabrinaaquino.dev',
      siteName: 'Sabrina Aquino',
      locale: 'en_US',
      type: 'website',
    },
  };

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html
        lang="en"
        className={clsx(
          'text-black bg-white dark:text-white dark:bg-[#111010]',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children}
          </main>
        </body>
      </html>
    );
  }