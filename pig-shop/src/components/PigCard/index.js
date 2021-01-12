import Link from 'next/link';
import { useRouter } from 'next/router'

import { useCartContext } from '../../context/cartContext';
import styles from './PigCard.module.css';

export default function PigList({ index, id, breed, img, description }) {
  const router = useRouter()
  const { cartState, setCartState } = useCartContext();
  const handleAddToCart = (index) => setCartState(oldState => [...oldState, {index, id}])
  const handleDeleteFromCart = (index) => {console.log('remove')}
  const isCartPage = router.pathname.includes('cart');

  return (
    <div className={styles.pigCard}>
      <p>{breed}</p>
      <img className={styles.pigImg} src={img} />
      <p>{description}</p>
      {!isCartPage ? <button className={styles.addToCartBtn} onClick={() => handleAddToCart(index, id)}>add to cart</button> : <button onClick={handleDeleteFromCart}>remove from cart</button>}
      {!description && (
        <Link href={`/pig/${index}`}>
          <a>view details</a>
        </Link>
      )}
    </div>
  );
}
