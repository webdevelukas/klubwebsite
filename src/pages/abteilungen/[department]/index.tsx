import mainNavItems from "api/mainNavItems";
import { GetStaticPaths, GetStaticProps } from "next";

type DepartmentPageProps = {
  department: string;
};

function DepartmentPage({ department }: DepartmentPageProps) {
  return <div>Hallo, wir sind die Abteilung {department}.</div>;
}

export default DepartmentPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const department = params?.department;

  return { props: { department: department } };
};

type DepartmentProps = {
  url: string;
  title: string;
  slug?: string;
  links?: { url: string; title: string }[] | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const departments = mainNavItems[1].submenuItems;

  const paths = departments.map((department: DepartmentProps) => ({
    params: { department: department.slug },
  }));

  return { paths, fallback: false };
};
