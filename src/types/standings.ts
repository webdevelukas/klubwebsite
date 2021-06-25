import { Team } from "./team";

export type SoccerStandings = {
  season: string;
  league: string;
  region: string;
  promotedTeams: number;
  promotedQualifierTeams: number;
  relegatedQualifierTeams: number;
  relegatedTeams: number;
  teams: Team[];
};
