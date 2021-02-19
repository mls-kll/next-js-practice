import React from 'react';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Link href='/pigs'>
        <a>Check our pig offers</a>
      </Link>
      <Link href='/create'>
        <a>Create your own pig!</a>
      </Link>
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
};

export default Home;
