import { Match } from "../../../types";
import { Normal, Detailed, Minified } from "./variants";

export type FixtureLayoutVariants = "normal" | "detailed" | "minified";

export type FixtureProps = {
  layout?: FixtureLayoutVariants;
  match: Match;
};

function Fixture({ layout, match }: FixtureProps) {
  switch (layout) {
    case "normal":
      return <Normal match={match} />;
    case "detailed":
      return <Detailed match={match} />;
    case "minified":
      return <Minified match={match} />;
    default:
      return <Normal match={match} />;
  }
}

export default Fixture;
