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
};

export type Posts = [Post];
