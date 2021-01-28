import Link from 'next/link';
import { useRouter } from 'next/router';

import { useCart } from '../../hooks/cart';
import styles from './PigCard.module.css';

type PigCardProps = {
  id?: string;
  breed: string;
  img: string;
  description?: string;
};

const PigCard = ({ id, breed, img, description }: PigCardProps) => {
  const router = useRouter();
  const [handleAddToCart, handleDeleteFromCart] = useCart();
  const isCartPage = router.pathname.includes('cart');

  return (
    <div className={styles.pigCard}>
      <p>{breed}</p>
      <img className={styles.pigImg} src={img} />
      <p>{description}</p>
      {!isCartPage ? (
        <button
          className={styles.addToCartBtn}
          onClick={() => handleAddToCart(id as string)}
        >
          add to cart
        </button>
      ) : (
        <button onClick={() => handleDeleteFromCart(id as string)}>
          remove from cart
        </button>
      )}
      {!description && (
        <Link href={`/pig/${id}`}>
          <a>view details</a>
        </Link>
      )}
    </div>
  );
};

export default PigCard;
