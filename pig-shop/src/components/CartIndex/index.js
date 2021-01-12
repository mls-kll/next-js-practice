import Link from 'next/link';

export default function CartIndex({ items }) {
  const cartItems = items.length < 1 ? 0 : items.length;
  return (
    <>
      <Link href='/cart'>
        <a>{`Cart ${cartItems}`}</a>
      </Link>
    </>
  );
}
