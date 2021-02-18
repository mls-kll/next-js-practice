import React from 'react';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

import PigCard from '../../src/components/PigCard';
import { PigItem } from '../../types';
import { getPigs, getPig } from '../../utils/getContent';

type PigType = {
  _id: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPigData = await getPigs();
  const paths = allPigData.map((pig: PigType) => {
    return {
      params: { id: pig._id },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pigData = await await getPig(params?.id as string);

  return {
    props: {
      pigData,
    },
    revalidate: 15,
  };
};

type PigProps = {
  pigData: PigItem;
};

const Pig = ({ pigData }: PigProps) => {
  const { breed, img, description, _id } = pigData;
  return (
    <>
      <PigCard
        breed={breed}
        img={`data:image/png;base64, ${img || ''}`}
        description={description}
        id={_id}
      />
      <Link href='/pigs'>
        <a>Back to pigs</a>
      </Link>
    </>
  );
};

export default Pig;
