import { useState } from "react";
import styled from "styled-components";
import { Matches, SoccerStandings, TeamMembers } from "../../types";
import FixturesList from "../sports/fixtures/FixturesList";
import Standings from "../sports/standings/Standings";
import TeamMembersGrid from "../sports/teamMembers/TeamMembersGrid";

export type TabContainerProps = {
  matches: Matches;
  standings: SoccerStandings;
  teamMembers: TeamMembers;
};
function TabContainer({ matches, standings, teamMembers }: TabContainerProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <Tabs>
        {matches && (
          <Tab onClick={() => setActiveTab(0)} active={activeTab === 0}>
            <H3>Spiele</H3>
          </Tab>
        )}
        {standings && (
          <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>
            <H3>Tabelle</H3>
          </Tab>
        )}
        {teamMembers && (
          <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>
            <H3>Kader</H3>
          </Tab>
        )}
      </Tabs>
      <div>
        {matches && activeTab === 0 && (
          <FixturesList layout="minified" matches={matches} />
        )}
        {standings && activeTab === 1 && <Standings standings={standings} />}
        {teamMembers && activeTab === 2 && (
          <Wrapper>
            <TeamMembersGrid teamMembers={teamMembers} />
          </Wrapper>
        )}
      </div>
    </section>
  );
}

export default TabContainer;

const Tabs = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  column-gap: 1px;
`;
const Tab = styled.div<{ active: boolean }>`
  padding: var(--medium-spacing) var(--small-spacing);
  background-color: ${({ active }) =>
    active
      ? "var(--content-background)"
      : "var(--content-background-alternative)"};
  text-align: center;
  color: ${({ active }) =>
    active ? "var(--text-color)" : "var(--main-color)"};
  cursor: pointer;
`;

const H3 = styled.h3`
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  padding: var(--small-spacing);
  background-color: var(--content-background);

  @media screen and (min-width: 576px) {
    padding: var(--medium-spacing);
  }
`;
