import NextImage from "next/image";
import NextLink from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { colors } from "styles/colors";
import styled from "styled-components";

type JobsListItem = {
  job: { title: string; new: boolean; location: string; company: string };
};

function JobsListItem({ job }: JobsListItem) {
  const [isTablet] = useMediaQuery("(min-width: 768px)");

  return (
    <NextLink href="/" passHref>
      <JobContainer isNew={job.new}>
        <Wrapper>
          <LogoContainer>
            <NextImage
              src="/tsv-paunzhausen.png"
              alt="club logo"
              layout="fill"
              objectFit="contain"
            />
          </LogoContainer>
        </Wrapper>
        <JobDescription>
          <MetaWrapper isNew={job.new}>
            {job.new && <Special>Neu</Special>}
            <Meta>M/W/D - {job.location}</Meta>
          </MetaWrapper>
          <JobTitle>{job.title}</JobTitle>
          {!isTablet && (
            <NextLink href="/">
              <Link>zur Stellenanzeige</Link>
            </NextLink>
          )}
          {isTablet && <Company>{job.company}</Company>}
        </JobDescription>
        {isTablet && <ArrowBox>›</ArrowBox>}
      </JobContainer>
    </NextLink>
  );
}

export default JobsListItem;

const JobTitle = styled.h2`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.25rem;
  hyphens: auto;
  line-break: normal;
  word-break: break-word;

  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 1;
  }
`;

const JobContainer = styled.article<{ isNew: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 30% 1fr;
  background: white;
  min-height: 4rem;
  ${({ isNew }) => (isNew ? `border: 1px solid ${colors.main.default}` : null)};

  @media screen and (min-width: 768px) {
    grid-template-columns: 15% 1fr auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  border-right: 1px solid lightgray;
  padding: 0.75rem 0.75rem;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const JobDescription = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  font-size: 0.75rem;
  color: ${colors.main.default};
`;

const MetaWrapper = styled.div<{ isNew: boolean }>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ isNew }) => (isNew ? "auto 1fr" : "auto")};
  grid-column-gap: 0.5rem;
  margin-bottom: 0.25rem;
  min-height: 1.375rem;
`;

const Meta = styled.p`
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: lightgray;
`;

const Special = styled.div`
  background: ${colors.main.default};
  font-weight: bold;
  font-size: 0.75rem;
  color: white;
  padding: 0 0.25rem;
  text-transform: uppercase;
`;

const ArrowBox = styled.div`
  display: flex;
  background-color: ${colors.main.default};
  width: 30px;
  color: white;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
`;

const Company = styled.p`
  font-size: 0.875rem;
`;
