export type Author = {
  name: string;
  position: string;
  boardMember: boolean;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Authors = [Author];
