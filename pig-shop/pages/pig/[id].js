import Link from 'next/link';
import getConfig from 'next/config';

import PigCard from '../../src/components/PigCard';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.baseUrl}/api/pig/${id}`);
  const pigData = await res.json();

  return {
    props: {
      pigData,
    },
  };
}

export default function Pig({ pigData }) {
  const { breed, img, desc } = pigData[0].fields;
  return (
    <>
      <PigCard breed={breed} img={img.fields.file.url} description={desc} />
      <Link href='/pigs'>
        <a>Back to pigs</a>
      </Link>
    </>
  );
}
