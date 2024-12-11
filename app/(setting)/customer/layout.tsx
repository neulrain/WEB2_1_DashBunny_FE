import type { Metadata } from 'next';
import styles from './customer.module.scss';
import NavCustomer from '../components/navCustomer/page';

export const metadata: Metadata = {
  title: 'DashBunny - POS',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.flex}>
      <NavCustomer />
      {children}
    </div>
  );
}
