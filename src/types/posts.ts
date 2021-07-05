import { Event } from "./events";
import { Groups } from "./groups";
import { Image } from "./image";

export type Post = {
  slug: string;
  title: string;
  titleimage: Image;
  event: Event;
  department: { name: string; uid: string };
  groups: Groups;
  id: string;
  content: { html: string };
  author: {
    image: Image;
    name: string;
    position: string;
  };
  images: [{ url: string; alt: string; width: number; height: number }];
  createdAt: string;
};

export type Posts = Post[];
