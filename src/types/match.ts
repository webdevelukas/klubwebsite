import { Image } from "./image";

export type Match = {
  homeTeam: { name: string; logo: Image };
  awayTeam: { name: string; logo: Image };
  result: string;
  date: string;
  time: string;
  competitionName?: string;
  newsUrl?: string;
  matchday?: number;
};

export type Matches = Match[];
