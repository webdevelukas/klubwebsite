import { Image } from "./image";

export type User = {
  image: Image;
  name: string;
  role?: string;
  email?: string;
  phone?: string;
};

export type Users = User[];
