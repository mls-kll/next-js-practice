import React from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

import fetchDataWithCache from '../../utils/fetchDataWithCache';
import PigCard from '../../src/components/PigCard';

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params;
  const { publicRuntimeConfig } = getConfig();
  const pigData = await fetchDataWithCache(
    `${publicRuntimeConfig.baseUrl}/api/pig/${id}`
  );

  return {
    props: {
      pigData,
    },
  };
}

type PigImageUrl = {
  url: string;
}

type PigImageFile = {
  file: PigImageUrl;
}

type PigImage = {
  fields: PigImageFile;
}

type PigItem = {
  breed: string;
  img: PigImage;
  desc: string;
}

type PigFields = {
  fields: PigItem;
}

type PigProps = {
  pigData: PigFields[];
}

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
}

export default Pig;
