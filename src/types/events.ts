export type Event = {
  dateandtime: Date;
  department: { name: string };
  group: {
    name: string;
  };
};

export type Events = [Event];
