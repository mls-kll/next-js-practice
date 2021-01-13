import PigCard from '../src/components/PigCard';
import pigData from '../pigData/pigData.json';
import { useCartContext } from '../src/context/cartContext';

export async function getStaticProps() {
  const allPigData = pigData;
  return {
    props: {
      allPigData,
    },
  };
}

export default function CartPage ({ allPigData }) {
  const { cartState } = useCartContext();
  return(
    <>
      <div>CART PAGE</div>
      <div>
      {cartState.map((item, index) => (
          <PigCard index={item.index} key={index} img={allPigData.pigs[item.index].img} breed={allPigData.pigs[item.index].breed} />
        ))}
      </div>
    </>  
  )
}
