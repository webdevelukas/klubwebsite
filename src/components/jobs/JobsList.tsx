import styled from "styled-components";
import JobsListItem from "./JobsListItem";

type JobsListProps = {
  jobs: { title: string; new: boolean; location: string; company: string }[];
};

function JobsList({ jobs }: JobsListProps) {
  return (
    <Container>
      {jobs.map((job, index) => (
        <JobsListItem key={index} job={job} />
      ))}
    </Container>
  );
}

export default JobsList;

const Container = styled.section`
  max-width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 1rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }
`;
