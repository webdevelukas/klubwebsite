import styled from "styled-components";
import NextImage from "next/image";
import { TeamMember as TeamMemberType } from "../../../types";

export type TeamMemberProps = {
  teamMember: TeamMemberType;
};

function TeamMember({ teamMember }: TeamMemberProps) {
  const { image, name } = teamMember;
  const [firstName, lastName] = name.split(" ");
  const imageAlt =
    image.alt || image.url ? `${firstName} ${lastName}` : "Placeholder image";

  return (
    <article>
      <ImageWrapper>
        <NextImage
          src={image.url || "/placeholders/avatar.svg"}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Description>
        <Name>{firstName}</Name>
        <Name>{lastName}</Name>
      </Description>
    </article>
  );
}

export default TeamMember;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 120%;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;
const Description = styled.div`
  background-color: var(--content-background-alternative);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  padding: var(--medium-spacing);
  text-align: left;
`;
const Name = styled.p`
  font-weight: normal;

  :first-of-type {
    font-weight: bold;
    margin-bottom: 0.25rem;

    @media screen and (min-width: 576px) {
      font-size: 1.25rem;
    }
  }
`;
