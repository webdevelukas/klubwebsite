import React from "react";
import List from "../../../elements/List";
import { Match } from "../../../types";
import Fixture, { FixtureLayoutVariants } from "./Fixture";

export type FixturesListProps = {
  layout: FixtureLayoutVariants;
  matches: Match[];
};

function FixturesList({ layout, matches }: FixturesListProps) {
  return (
    <List>
      {matches.map((match, index) => (
        <Fixture key={index} layout={layout} match={match} />
      ))}
    </List>
  );
}

export default FixturesList;
