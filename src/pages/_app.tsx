import App from "next/app";
import type { AppProps, AppContext } from "next/app";
import PageLayout from "components/layout/PageLayout";
import graphCMS from "services/graphCMS";
import { Partners } from "types/partners";

interface MyAppProps extends AppProps {
  partners: Partners;
}

function MyApp({ Component, pageProps, partners }: MyAppProps) {
  return (
    <PageLayout partners={partners}>
      <Component {...pageProps} />
    </PageLayout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { partners } = await graphCMS(`{
    partners {
      logo {
        url
        alt
        width
        height
      }
      url
    }
  }
  `);

  return { ...appProps, partners };
};

export default MyApp;
