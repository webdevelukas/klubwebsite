import { GetStaticProps } from "next";
import styled from "styled-components";
import Card from "components/departments/Card";
import { Departments } from "types";
import HeroImage from "components/layout/HeroImage";
import NextLink from "next/link";

type DepartmentPagesProps = {
  departments: Departments;
};

function DepartmentPages({ departments }: DepartmentPagesProps) {
  return (
    <PageLayout>
      <HeroImage
        title="Abteilungen des TSV Paunzhausen"
        subtitle="602 Mitglieder"
        image={{
          url: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80",
          alt: "",
        }}
      />
      <ContentLayout>
        {departments.map((department, index) => (
          <NextLink
            key={index}
            href={`/abteilungen/${department.slug}`}
            passHref
          >
            <a>
              <Card data={department} />
            </a>
          </NextLink>
        ))}
      </ContentLayout>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const departments = [
    {
      name: "Fußball",
      image: {
        url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        alt: "",
      },
      slug: "fussball",
    },
    {
      name: "Tennis",
      image: {
        url: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        alt: "",
      },
      slug: "tennis",
    },
    {
      name: "Gymnastik",
      image: {
        url: "https://images.unsplash.com/photo-1610410543954-ed0ad75ce68a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        alt: "",
      },
      slug: "gymnastik",
    },
    {
      name: "Stockschiessen",
      image: {
        url: "https://images.unsplash.com/photo-1576720488416-cb0dc4735870?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
        alt: "",
      },
      slug: "stockschiessen",
    },
    {
      name: "Theatergruppe",
      image: {
        url: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "",
      },
      slug: "theatergruppe",
    },
  ];
  return { props: { departments } };
};

export default DepartmentPages;

const PageLayout = styled.div`
  display: grid;
  row-gap: var(--large-spacing);
  max-width: var(--max-content-width);
  margin: 0 auto;
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: var(--medium-spacing);
  padding: 0 var(--medium-spacing);

  @media screen and (min-width: 576px) {
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: var(--large-spacing);
  }
`;
