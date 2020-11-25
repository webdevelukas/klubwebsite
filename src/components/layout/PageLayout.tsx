import NavigationContainer from "./NavigationContainer";
import Footer from "./Footer";
import GlobalStyles from "../../styles/GlobalStyles";
import PartnersSection from "../sections/PartnersSection";
import styled from "styled-components";
import Head from "next/head";

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
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
      <main>{children}</main>
      <PartnersSection />
      <Footer />
    </Layout>
  );
}

export default PageLayout;

const Layout = styled.div`
  height: 100vh;
`;
