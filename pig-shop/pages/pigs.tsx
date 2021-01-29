import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import getContent from '../utils/getContent';

import PigCard from '../src/components/PigCard';
import styles from '../styles/pigs.module.css';
import { PigFields } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const allPigData = await getContent('pigItem')

  return {
    props: {
      allPigData,
    },
    revalidate: 15,
  };
};

type PigListProps = {
  allPigData: PigFields[];
};

const PigList = ({ allPigData }: PigListProps) => {
  return (
    <div className={styles.pigListContainer}>
      <h3>Our pig offers for 2021</h3>
      <div className={styles.pigList}>
        {allPigData?.map((pig, index) => (
          <PigCard
            key={pig.fields.id}
            id={pig.fields.id}
            img={pig.fields.img.fields.file?.url}
            breed={pig.fields.breed}
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
