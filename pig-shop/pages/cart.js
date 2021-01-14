import getConfig from 'next/config';

import PigCard from '../src/components/PigCard';
import { useCartContext } from '../src/context/cartContext';

export async function getServerSideProps() {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/api/pigs`);
  const allPigData = await res.json();

  return {
    props: {
      allPigData,
    },
  };
}

export default function CartPage({ allPigData }) {
  const { cartState } = useCartContext();
  const cartContent = allPigData
    .map((pigData, index) => {
      return allPigData.filter((data) => {
        return data.fields.id === cartState[index]?.id;
      });
    })
    .flat();

  return (
    <>
      <div>CART PAGE</div>
      <div>
        {cartContent.map((item, index) => (
          <PigCard
            key={item.fields.id}
            id={item.fields.id}
            img={item.fields.img.fields.file?.url}
            breed={item.fields.breed}
          />
        ))}
      </div>
    </>
  );
}
