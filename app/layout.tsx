import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReactQueryConfigContext from '@/provider/ReactQueryConfigContext';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'DashBunny - POS',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.variable} antialiased`}>
        <ReactQueryConfigContext>{children}</ReactQueryConfigContext>
      </body>
    </html>
  );
}
