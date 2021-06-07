import styled from "styled-components";
import NextLink from "next/link";

type SubmenuProps = {
  submenuItems: {
    url: string;
    title: string;
    links?: { url: string; title: string }[] | undefined;
  }[];
  onMouseLeave: () => void;
};

function Submenu({ submenuItems }: SubmenuProps) {
  const submenuItemsWithSublinks = submenuItems.filter(({ links }) => {
    if (links) return links.length > 0;
  });
  const submenuItemsWithoutSublinks = submenuItems.filter(
    ({ links }) => !links || links?.length === 0
  );

  return (
    <Container>
      <GridContainer>
        <Wrapper>
          {submenuItemsWithoutSublinks.map(({ url, title }, index) => (
            <NextLink key={index} href={url} passHref>
              <Link bold>{title}</Link>
            </NextLink>
          ))}
        </Wrapper>
        {submenuItemsWithSublinks.map(({ url, title, links }, index) => (
          <Wrapper key={index}>
            <NextLink href={url} passHref>
              <Link bold>{title}</Link>
            </NextLink>
            {links?.map((link, index) => (
              <NextLink key={index} href={link.url}>
                <Link>{link.title}</Link>
              </NextLink>
            ))}
          </Wrapper>
        ))}
      </GridContainer>
    </Container>
  );
}

export default Submenu;

const Container = styled.div`
  position: absolute;
  max-height: "auto";
  bottom: 0;
  left: 0;
  background: white;
  transform: translate(0, 100%);
  width: 100%;
  overflow: hidden;
  transition: all 0.3ms ease-in-out;
  box-shadow: 0 0.25rem 0 rgba(var(--main-color), 0.15);
`;

const GridContainer = styled.div`
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : null)};
  border-bottom: 1px solid lightgray;
`;
