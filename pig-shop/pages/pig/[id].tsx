import React from 'react';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import getConfig from 'next/config';

import PigCard from '../../src/components/PigCard';
import { PigFields } from '../../types';
import getContent from '../../utils/getContent';

type PigIdType = {
  id: string;
};

type PigType = {
  fields: PigIdType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { publicRuntimeConfig } = getConfig();
  const allPigData = await getContent('pigItem')
  const paths = allPigData.map((pig: PigType) => ({
    params: { id: pig.fields.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pigData = await getContent('pigItem')

  return {
    props: {
      pigData,
    },
    revalidate: 15,
  };
};

type PigProps = {
  pigData: PigFields[];
};

const Pig = ({ pigData }: PigProps) => {
  const { breed, img, desc, id } = pigData?.[0]?.fields;
  return (
    <>
      <PigCard breed={breed} img={img.fields.file.url} description={desc} id={id} />
      <Link href='/pigs'>
        <a>Back to pigs</a>
      </Link>
    </>
  );
};

export default Pig;
