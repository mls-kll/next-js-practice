import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PigCard from '../src/components/PigCard';
import styles from '../styles/pigs.module.css';
import { PigItem } from '../types';
import { getPigs } from '../utils/getContent';

export const getStaticProps: GetStaticProps = async () => {
  const allPigData = await getPigs();
  return {
    props: {
      allPigData,
    },
    revalidate: 15,
  };
};

type PigListProps = {
  allPigData: PigItem[];
};

const PigList = ({ allPigData }: PigListProps) => {
  return (
    <div className={styles.pigListContainer}>
      <h3>Our pig offers for 2021</h3>
      <div className={styles.pigList}>
        {allPigData?.map((pig, index) => (
          <PigCard
            key={pig._id}
            id={pig._id}
            img={`data:image/png;base64, ${pig.img || ''}`}
            breed={pig.breed}
          />
        ))}
      </div>
      <Link href='/'>
        <a>Back to home page</a>
      </Link>
    </div>
  );
};

export default PigList;
