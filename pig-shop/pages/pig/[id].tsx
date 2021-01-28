import React from 'react';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import getConfig from 'next/config';

import fetchDataWithCache from '../../utils/fetchDataWithCache';
import PigCard from '../../src/components/PigCard';
import { PigFields } from '../../types';

type PigIdType = {
  id: string;
};

type PigType = {
  fields: PigIdType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { publicRuntimeConfig } = getConfig();
  const allPigData = await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/pigs`
  );
  const paths = allPigData.map((pig: PigType) => ({
    params: { id: pig.fields.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { publicRuntimeConfig } = getConfig();
  const pigData = await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/pig/${params?.id}`
  );

  return {
    props: {
      pigData,
    },
    revalidate: 90,
  };
};

type PigProps = {
  pigData: PigFields[];
};

const Pig = ({ pigData }: PigProps) => {
  const { breed, img, desc } = pigData?.[0]?.fields;
  return (
    <>
      <PigCard breed={breed} img={img.fields.file.url} description={desc} />
      <Link href='/pigs'>
        <a>Back to pigs</a>
      </Link>
    </>
  );
};

export default Pig;
