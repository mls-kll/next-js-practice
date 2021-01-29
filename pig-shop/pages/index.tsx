import React from 'react';
import getContent from '../utils/getContent';
import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css';
import DataRenderer from '../src/components/DataRenderer';
import { Document } from '@contentful/rich-text-types';

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getContent('pageContent')

  return {
    props: {
      pageData,
    },
    revalidate: 15,
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
