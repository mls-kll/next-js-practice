import Link from 'next/link';
import styles from './PigCard.module.css';

export default function PigList({ index, breed, img, description }) {
  return (
    <div className={styles.pigCard}>
      <p>{breed}</p>
      <img className={styles.pigImg} src={img} />
      <p>{description}</p>
      {!description && (
        <Link href={`/pig/${index}`}>
          <a>view details</a>
        </Link>
      )}
    </div>
  );
}
