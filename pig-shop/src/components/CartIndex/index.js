import Link from 'next/link';

export default function CartIndex({ items }) {
  const cartItems = items.length;
  return (
    <>
      <Link href='/cart'>
        <a>{`Cart ${cartItems}`}</a>
      </Link>
    </>
  );
}
