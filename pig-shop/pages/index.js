import Link from 'next/link';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import DataRenderer from '../src/components/DataRenderer';

export async function getServerSideProps() {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/api/content/home`);
  const pageData = await res.json();
  return {
    props: {
      pageData,
    },
  };
}

export default function Home({ pageData }) {
  const customContent = pageData
    .map((data) => data.fields)
    .map((content) => content.customContent);
  return (
    <div className={styles.homeContainer}>
      {customContent.map((content, index) => (
        <DataRenderer key={index} document={content} />
      ))}
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
}
