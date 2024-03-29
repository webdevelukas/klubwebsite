import NavigationContainer from "./NavigationContainer";
import Footer from "./Footer";
import GlobalStyles from "../../styles/GlobalStyles";
import PartnersSection from "../partners/PartnersSection";
import styled from "styled-components";
import Head from "next/head";
import { Partners } from "types/partners";

type PageLayoutProps = {
  children: React.ReactNode;
  partners: Partners;
};

function PageLayout({ children, partners }: PageLayoutProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/wxc5bog.css"
        ></link>
      </Head>
      <GlobalStyles />
      <NavigationContainer />
      <Main>{children}</Main>
      <PartnersSection partners={partners} />
      <Footer />
    </>
  );
}

export default PageLayout;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-page-width);
`;
