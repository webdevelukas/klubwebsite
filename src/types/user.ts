export type User = {
  image: {
    url: string;
  };
  name: string;
  role?: string;
  email?: string;
  phone?: string;
};

export type Users = User[];
