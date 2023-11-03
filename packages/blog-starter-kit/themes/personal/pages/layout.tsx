import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';


export const metadata: Metadata = {
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

