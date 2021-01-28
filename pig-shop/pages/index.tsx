import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';

import fetchDataWithCache from '../utils/fetchDataWithCache';
import styles from '../styles/Home.module.css';
import DataRenderer from '../src/components/DataRenderer';
import { Document } from '@contentful/rich-text-types';
import { FieldType } from 'contentful';
import { title } from 'process';

export const getStaticProps: GetStaticProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  const pageData = await await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/content/home`
  );
  return {
    props: {
      pageData,
    },
    revalidate: 90,
  };
};

type SlugType = {
  slug: string;
  title: string;
  customContent: Document;
};

type PageDataType = {
  fields: SlugType;
};

type HomeProps = {
  pageData: PageDataType[];
};

const Home = ({ pageData }: HomeProps) => {
  const customContent = pageData
    .map((data) => data.fields)
    .map((content) => content.customContent);
  return (
    <div className={styles.homeContainer}>
      {customContent.map((content: Document, index: number) => (
        <DataRenderer key={index} document={content} />
      ))}
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
};

export default Home;
