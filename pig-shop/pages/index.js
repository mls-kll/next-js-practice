import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p>
        <Link href='/pigs'>
          <a>Check our pig offers</a>
        </Link>
      </p>
      <img className={styles.coverImg} src='/images/pig.jpeg' />
    </div>
  );
}
