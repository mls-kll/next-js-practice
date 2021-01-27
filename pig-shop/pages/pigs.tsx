import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

import PigCard from '../src/components/PigCard';
import styles from '../styles/pigs.module.css';
import fetchDataWithCache from '../utils/fetchDataWithCache';

export const getServerSideProps: GetServerSideProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  const allPigData = await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/pigs`
  );

  return {
    props: {
      allPigData,
    },
  };
}

type PigImageUrl = {
  url: string;
}

type PigImageFile = {
  file: PigImageUrl;
}

type PigImage = {
  fields: PigImageFile;
}

type PigItem = {
  id: string;
  breed: string;
  img: PigImage;
  desc: string;
}

type PigFields = {
  fields: PigItem;
}

type PigListProps = {
  allPigData: PigFields[];
}

const PigList = ({ allPigData } : PigListProps) => {
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
}

export default PigList;
