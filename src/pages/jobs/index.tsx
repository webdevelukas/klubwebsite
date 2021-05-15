import JobsList from "components/jobs/JobsList";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const jobs = [
  {
    title: "Trainer*in für Basketball AGs an Schulen und Kindergärten",
    new: true,
    location: "Paunzhausen",
    company: "TSV Paunzhausen e. V.",
  },
  {
    title: "Trainer*in für Basketball AGs an Schulen",
    new: false,
    location: "Aiterbach",
    company: "TSV Paunzhausen e. V.",
  },
  {
    title:
      "Trainer*in für Basketball AGs an Schulen und in Sportfördereinrichtungen",
    new: false,
    location: "Paunzhausen",
    company: "TSV Paunzhausen e. V.",
  },
];

function JobsPage() {
  return (
    <>
      <Headline>Jobs</Headline>
      <JobsList jobs={jobs} />
    </>
  );
}
export default JobsPage;

export async function getStaticProps() {
  return { props: {} };
}

const Headline = styled.h1`
  color: ${colors.main.default};
  margin: 2rem 0 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
  text-align: center;
`;
