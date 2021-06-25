import { GetStaticProps } from "next";

type DepartmentPagesProps = {};

function DepartmentPages({}: DepartmentPagesProps) {
  return <div>Hallo, wir sind die Abteilungen.</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default DepartmentPages;
