import React, { useState } from 'react';
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
  const [pigData, setPigData] = useState(allPigData);

  const handleDeletePig = async (id: string) => {
    const response = await fetch(`http://localhost:8080/pig/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    setPigData(result);
    return response;
  };

  return (
    <div className={styles.pigListContainer}>
      <h3>Our pig offers for 2021</h3>
      <div className={styles.pigList}>
        {pigData?.map((pig, index) => (
          <PigCard
            key={pig._id}
            id={pig._id}
            img={`data:image/png;base64, ${pig.img || ''}`}
            breed={pig.breed}
            handleDeletePig={handleDeletePig}
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
