export type PigImageUrl = {
  url: string;
};

export type PigImageFile = {
  file: PigImageUrl;
};

export type PigImage = {
  fields: PigImageFile;
};

export type PigItem = {
  id: string;
  breed: string;
  img: PigImage;
  desc: string;
};

export type PigFields = {
  fields: PigItem;
};
