import { Event } from "./events";
import { Groups } from "./groups";

export type Post = {
  title: string;
  titleimage: {
    url: string;
    alt: string;
  };
  event: Event;
  department: { name: string; uid: string };
  groups: Groups;
  id: string;
  content: { html: string };
  author: {
    image: { url: string; alt: string };
    name: string;
    position: string;
  };
  images: [{ url: string; alt: string; width: number; height: number }];
};

export type Posts = [Post];
