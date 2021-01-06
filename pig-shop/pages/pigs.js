import Link from 'next/link';
import pigData from '../pigData/pigData.json';
import PigCard from '../components/PigCard';
import styles from '../styles/pigs.module.css';

export async function getStaticProps() {
  const allPigData = pigData;
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
        {allPigData.pigs.map((pig, index) => (
          <PigCard index={index} key={pig.id} img={pig.img} breed={pig.breed} />
        ))}
      </div>
      <Link href='/'>
        <a>Back to home page</a>
      </Link>
    </div>
  );
}
