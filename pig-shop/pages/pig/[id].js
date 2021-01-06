import Link from 'next/link';
import { useRouter } from 'next/router';

import PigCard from '../../components/PigCard';
import pigData from '../../pigData/pigData.json';

export async function getServerSideProps() {
  const allPigData = pigData;
  return {
    props: {
      allPigData
    },
  };
}

export default function Pig({ allPigData }) {
  const router = useRouter();
  const { id } = router.query;
  const pigId = parseInt(id);

  return (
    <>
      <PigCard
        breed={allPigData.pigs[pigId].breed}
        img={allPigData.pigs[pigId].img}
        description={allPigData.pigs[pigId].description}
      />
      <Link href='/pigs'>
        <a>Back to pigs</a>
      </Link>
    </>
  );
}
