import { GetStaticPaths, GetStaticProps } from "next";

type DepartmentPageProps = {
  department: string;
  group: string;
};

function DepartmentPage({ department, group }: DepartmentPageProps) {
  return (
    <div>
      Hallo, wir sind die Abteilung {department} - {group}.
    </div>
  );
}

export default DepartmentPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const department = params?.department;
  const group = params?.group;

  return { props: { department: department, group: group } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { department: "fussball", group: "1-mannschaft" } },
    { params: { department: "fussball", group: "2-mannschaft" } },
    { params: { department: "fussball", group: "u15-junioren" } },
    { params: { department: "fussball", group: "u13-junioren" } },
    { params: { department: "fussball", group: "u11-junioren" } },
    { params: { department: "fussball", group: "u9-junioren" } },
    { params: { department: "fussball", group: "u9-junioren-2" } },
    { params: { department: "tennis", group: "1-mannschaft" } },
    { params: { department: "tennis", group: "2-mannschaft" } },
    { params: { department: "tennis", group: "u15-junioren" } },
    { params: { department: "tennis", group: "u13-junioren" } },
  ];

  return {
    paths,
    fallback: false,
  };
};
