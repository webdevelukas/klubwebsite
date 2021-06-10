import styled from "styled-components";
import { Avatar } from "./Avatar";

type AvatarListProps = {
  users: {
    image: {
      url: string;
      alt?: string;
    };
    name: string;
    role: string;
  }[];
};

function AvatarList({ users }: AvatarListProps) {
  return (
    <GridContainer>
      {users.map((user, index) => (
        <Avatar key={index} user={user} />
      ))}
    </GridContainer>
  );
}

export default AvatarList;

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 1rem;
`;
