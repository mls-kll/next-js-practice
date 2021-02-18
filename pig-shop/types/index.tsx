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
  _id: string;
  breed: string;
  img: string;
  description: string;
};

export type PigFields = {
  fields: PigItem;
};
