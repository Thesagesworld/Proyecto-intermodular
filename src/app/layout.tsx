import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTopButton } from '@/components/layout/BackToTopButton';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  title: 'Proyecto Intermodular',
  description: 'Análisis turístico y sostenible 2025.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get('x-pathname') || '';
  const isHomePage = pathname === '/';

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased bg-background', poppins.variable)}>
        <div className="flex flex-col min-h-screen">
          {!isHomePage && <Header />}
          <main className="flex-1">
            {children}
          </main>
          {!isHomePage && (
            <>
              <Footer />
              <BackToTopButton />
            </>
          )}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
