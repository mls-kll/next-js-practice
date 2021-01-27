import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import fetchDataWithCache from '../utils/fetchDataWithCache';
import styles from '../styles/Home.module.css';
import DataRenderer from '../src/components/DataRenderer';

export const getServerSideProps: GetServerSideProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  const pageData = await await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/content/home`
  );
  return {
    props: {
      pageData,
    },
  };
}

type HomeProps = {
  pageData: string[]
}

const Home = ({ pageData }: HomeProps) => {
  const customContent = pageData
    .map((data) => data.fields)
    .map((content: object) => content.customContent);
  return (
    <div className={styles.homeContainer}>
      {customContent.map((content: object, index: number) => (
        <DataRenderer key={index} document={content} />
      ))}
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
}

export default Home;
