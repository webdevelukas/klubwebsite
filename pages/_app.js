import PageLayout from "components/layout/PageLayout";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
export default MyApp;
