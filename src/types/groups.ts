import { Image } from "./image";

export type Group = {
  name: string;
  image: Image;
  slug: string;
};

export type Groups = Group[];
