import Link from 'next/link';

type CartIndexProps = {
  items: string[]
}

const CartIndex = ({ items }: CartIndexProps) => {
  const cartItems = items.length;
  return (
    <>
      <Link href='/cart'>
        <a>{`Cart ${cartItems}`}</a>
      </Link>
    </>
  );
}

export default CartIndex;
