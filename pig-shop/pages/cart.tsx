import React from 'react';
import { GetStaticProps } from 'next';

import PigCard from '../src/components/PigCard';
import { useCartContext } from '../src/context/cartContext';
import { PigItem } from '../types';
import { getPigs } from '../utils/getContent';

export const getStaticProps: GetStaticProps = async () => {
  const allPigData = await getPigs();
  return {
    props: {
      allPigData,
    },
    revalidate: 15,
  };
};

type CartPageProps = {
  allPigData: PigItem[];
};

const CartPage = ({ allPigData }: CartPageProps) => {
  const { cartState } = useCartContext();
  const cartData = allPigData.map((pigData, index) => {
    return allPigData.filter((data) => {
      return data._id === cartState?.[index]?.id;
    });
  });

  const cartContent = cartData[0].length > 0 ? cartData.flat() : [];
  return (
    <>
      <div>CART PAGE</div>
      <div>
        {cartContent.map((item, index) => (
          <PigCard
            key={index}
            id={item._id}
            img={`data:image/png;base64, ${item.img || ''}`}
            breed={item.breed}
          />
        ))}
      </div>
    </>
  );
};

export default CartPage;
