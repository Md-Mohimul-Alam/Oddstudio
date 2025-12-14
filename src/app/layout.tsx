import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from '@/components/shared/scroll-to-top';
import { Analytics } from '@vercel/analytics/next';

const faviconDataUri = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23E63946' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'/%3e%3ccircle cx='12' cy='13' r='3'/%3e%3c/svg%3e";

export const metadata: Metadata = {
  title: 'Odd Studio',
  description: 'A creative advertising agency.',
  icons: {
    icon: faviconDataUri,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
          {children}
          <Analytics />
          <Toaster />
          <ScrollToTop />
      </body>
    </html>
  );
}
