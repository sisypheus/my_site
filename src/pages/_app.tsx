import { type AppType } from "next/dist/shared/lib/utils";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      {/* @ts-ignore */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(MyApp);
