import Link from 'next/link';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';
import DataRenderer from '../src/components/DataRenderer';

export async function getServerSideProps() {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/api/content`);
  const allPigData = await res.json();
  return {
    props: {
      allPigData,
    },
  };
}

export default function Home({ allPigData }) {
  const homePageData = allPigData.filter((data) => data.fields.slug === 'home');
  const customContent = homePageData
    .map((data) => data.fields)
    .map((content) => content.customContent);
  return (
    <div className={styles.homeContainer}>
      {customContent.map((content, index) => (
        <DataRenderer key={index} document={content} />
      ))}
      <p>
        <Link href='/pigs'>
          <a>Check our pig offers</a>
        </Link>
      </p>
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
}
