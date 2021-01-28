import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';

import PigCard from '../src/components/PigCard';
import fetchDataWithCache from '../utils/fetchDataWithCache';
import { useCartContext } from '../src/context/cartContext';
import { PigFields } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  const allPigData = await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/pigs`
  );

  return {
    props: {
      allPigData,
    },
    revalidate: 90,
  };
};

type CartPageProps = {
  allPigData: PigFields[];
};

const CartPage = ({ allPigData }: CartPageProps) => {
  const { cartState } = useCartContext();
  const cartData = allPigData.map((pigData, index) => {
    return allPigData.filter((data) => {
      return data.fields.id === cartState?.[index]?.id;
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
            id={item.fields.id}
            img={item.fields.img.fields.file?.url}
            breed={item.fields.breed}
          />
        ))}
      </div>
    </>
  );
};

export default CartPage;
