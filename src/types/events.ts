export type Event = {
  title: string;
  dateandtime: Date;
  department: { name: string };
  group: {
    name: string;
  };
};

export type Events = [Event];
