import Link from 'next/link';
import { useRouter } from 'next/router';

import { useCartContext } from '../../context/cartContext';
import styles from './PigCard.module.css';

export default function PigCard({ id, breed, img, description }) {
  const router = useRouter();
  const { cartState, setCartState } = useCartContext();
  const handleAddToCart = (id) =>
    setCartState((oldState) => [...oldState, { id }]);

  const handleDeleteFromCart = (selectedId) => {
    const newState = cartState.filter(item => item.id !== selectedId)
    setCartState(newState);
  };

  const isCartPage = router.pathname.includes('cart');

  return (
    <div className={styles.pigCard}>
      <p>{breed}</p>
      <img className={styles.pigImg} src={img} />
      <p>{description}</p>
      {!isCartPage ? (
        <button
          className={styles.addToCartBtn}
          onClick={() => handleAddToCart(id)}
        >
          add to cart
        </button>
      ) : (
        <button onClick={() => handleDeleteFromCart(id)}>remove from cart</button>
      )}
      {!description && (
        <Link href={`/pig/${id}`}>
          <a>view details</a>
        </Link>
      )}
    </div>
  );
}
