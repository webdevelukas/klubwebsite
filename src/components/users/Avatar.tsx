import styled from "styled-components";
import NextImage from "next/image";
import { Mail, Phone } from "../../elements/icons";
import { User } from "../../types";

export type Props = {
  user: User;
};

function Avatar({ user }: Props) {
  const { image, name, role, email, phone } = user;
  const hasEmailOrPhone = email || phone;

  return (
    <Container>
      <ImageWrapper>
        <NextImage
          src={image.url || "/placeholders/avatar.svg"}
          alt={image.url ? name : `Placeholder Image for ${name}`}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Wrapper>
        <Details>
          <Name>{name}</Name>
          {role && <Role>{role}</Role>}
        </Details>
        {hasEmailOrPhone && (
          <IconList>
            {email && (
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone />
              </a>
            )}
          </IconList>
        )}
      </Wrapper>
    </Container>
  );
}

export default Avatar;

const Container = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: var(--medium-spacing);
  place-items: center left;
  justify-content: left;
  background-color: var(--content-background);
  padding: var(--medium-spacing);

  @media screen and (min-width: 992px) {
    grid-template-columns: auto 30%;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 5.625rem;
  border-radius: 50%;

  > div:first-child {
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--medium-spacing);
`;

const IconList = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: left;
  column-gap: var(--medium-spacing);
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Details = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--small-spacing);
`;

const Role = styled.p`
  line-height: 0.8rem;
`;
