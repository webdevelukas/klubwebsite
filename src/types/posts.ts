import { Event } from "./events";
import { Groups } from "./groups";

export type Post = {
  title: string;
  titleimage: {
    url: string;
    alt: string;
  };
  event: Event;
  department: { name: string };
  groups: Groups;
  id: string;
  content: { html: string };
  author: {
    image: { url: string; alt: string };
    name: string;
    position: string;
  };
  images: [{ url: string; alt: string }];
};

export type Posts = [Post];
