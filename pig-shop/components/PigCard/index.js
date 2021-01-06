import Link from 'next/link';
import styles from './PigCard.module.css';

export default function PigList({ id, breed, img, description }) {
  return (
    <div className={styles.pigCard}>
      <p>{breed}</p>
      <img className={styles.pigImg} src={img} />
      <p>{description}</p>
      {!description && (
        <Link href={`/pig/${id}`}>
          <a>view details</a>
        </Link>
      )}
    </div>
  );
}
