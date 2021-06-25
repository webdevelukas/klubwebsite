import styled from "styled-components";
import NextImage from "next/image";

export type AvatarProps = {
  user: {
    image: {
      url: string;
      alt?: string;
    };
    name: string;
    role: string;
  };
  alignCenter?: boolean;
};

export function Avatar({ user, alignCenter }: AvatarProps) {
  return (
    <Container alignCenter={alignCenter}>
      <Picture>
        <NextImage src={user.image.url} layout="fill" objectFit="cover" />
      </Picture>
      <User alignCenter={alignCenter}>
        <Name>{user.name}</Name>
        <Role>{user.role}</Role>
      </User>
    </Container>
  );
}

const User = styled.div<{ alignCenter?: boolean }>`
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
`;

const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const Container = styled.div<{ alignCenter?: boolean }>`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-auto-flow: ${({ alignCenter }) => (alignCenter ? "row" : "column")};
  justify-content: center;
  grid-gap: 0.5rem 1rem;
  place-items: center center;
`;

const Picture = styled.picture`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  > div:first-child {
    border-radius: 50%;
  }
`;

const Role = styled.p`
  line-height: 0.8rem;
`;
