import Link from 'next/link';
import styles from '../styles/Home.module.css';

import DataRenderer from '../src/components/DataRenderer';

export async function  getServerSideProps () {
  const res = await fetch(`http://localhost:3000/api/content`)
  const allPigData = await res.json()
  console.log('allPigData', allPigData);
  return {
    props: {
      allPigData
    }
  }
}

export default function Home({ allPigData }) {
  const homePageData = allPigData.filter(data => data.fields.slug === 'home');
  const homePageContent = homePageData.map(data => data.fields).map(content => content.customContent)
  return (
    <div className={styles.homeContainer}>
      {homePageContent.map((content, index) => <DataRenderer key={index} document={content} />)}
      <p>
        <Link href='/pigs'>
          <a>Check our pig offers</a>
        </Link>
      </p>
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
}
