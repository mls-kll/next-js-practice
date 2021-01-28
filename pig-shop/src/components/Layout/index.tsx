import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { useCartContext } from '../../context/cartContext';
import CartIndex from '../CartIndex';
import styles from './layout.module.css';

type LayoutProps = {
  children: React.ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  const { cartState } = useCartContext();
  return (
    <div className={styles.container}>
      <Head>
        <title>Pig Shop Home Page</title>
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <h1>PIG SHOP</h1>
          </a>
        </Link>
        <CartIndex items={(cartState as unknown) as string[]} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
