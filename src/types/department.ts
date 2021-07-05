import { Image } from "./image";

export type Department = {
  name: string;
  image: Image;
  slug: string;
};

export type Departments = Department[];
