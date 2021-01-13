import Link from 'next/link';
import getConfig from 'next/config';

import PigCard from '../src/components/PigCard';
import styles from '../styles/pigs.module.css';

export async function getServerSideProps() {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/api/pigs`);
  const allPigData = await res.json();

  return {
    props: {
      allPigData,
    },
  };
}

export default function PigList({ allPigData }) {
  return (
    <div className={styles.pigListContainer}>
      <h3>Our pig offers for 2021</h3>
      <div className={styles.pigList}>
        {allPigData?.map((pig, index) => (
          <PigCard
            index={index}
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
