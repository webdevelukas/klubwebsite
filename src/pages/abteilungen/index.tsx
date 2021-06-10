import { GetStaticProps } from "next";
import styled from "styled-components";
import NextImage from "next/image";
import Pictogram from "elements/Pictogram";

type DepartmentPagesProps = {
  departments: { name: string; image: string }[];
};

function DepartmentPages({ departments }: DepartmentPagesProps) {
  return (
    <>
      <Title>Unsere Abteilungen</Title>
      <GridContainer>
        {departments.map(({ name, image }, index) => (
          <a key={index}>
            <DepartmentBox>
              <NextImage src={image} layout="fill" objectFit="cover" />
              <DepartmentName>{name}</DepartmentName>
              <Container>
                <Pictogram fill={"rgb(var(--main-color))"} />
              </Container>
              <GradientBackground />
            </DepartmentBox>
          </a>
        ))}
      </GridContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const departments = [
    {
      name: "Fußball",
      image:
        "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    },
    {
      name: "Tennis",
      image:
        "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Gymnastik",
      image:
        "https://images.unsplash.com/photo-1610410543954-ed0ad75ce68a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Stockschiessen",
      image:
        "https://images.unsplash.com/photo-1576720488416-cb0dc4735870?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
    {
      name: "Theatergruppe",
      image:
        "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];
  return { props: { departments } };
};

export default DepartmentPages;

const Title = styled.h1`
  color: rgb(var(--main-color));
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;

  @media screen and (min-width: 576px) {
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

const DepartmentBox = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 16rem;
  background-color: white;
`;

const DepartmentName = styled.h2`
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
  color: white;
  z-index: 20;
`;

const Container = styled.div`
  position: absolute;
  background: white;
  padding: 0.5rem;
  width: 3rem;
  height: 4rem;
  z-index: 15;
  right: 1.5rem;
  top: 0;
  display: flex;
  align-items: flex-end;
  border-bottom: 0.25rem solid rgb(var(--main-color));
`;

const GradientBackground = styled.div`
  background: linear-gradient(
    rgba(var(--main-color), 0),
    rgba(var(--main-color), 0.7)
  );
  position: absolute;
  height: 40%;
  z-index: 10;
  bottom: 0;
  width: 100%;
`;
