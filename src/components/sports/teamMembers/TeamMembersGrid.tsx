import TeamMember from "./TeamMember";
import { TeamMembers } from "../../../types";
import styled from "styled-components";

export type TeamMembersGridProps = { teamMembers: TeamMembers };

function TeamMembersGrid({ teamMembers }: TeamMembersGridProps) {
  return (
    <GridContainer>
      {teamMembers.map((teamMember, index) => (
        <TeamMember key={index} teamMember={teamMember} />
      ))}
    </GridContainer>
  );
}

export default TeamMembersGrid;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--small-spacing);

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: var(--medium-spacing);
  }
`;
