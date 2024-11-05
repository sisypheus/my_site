import { type AppType } from "next/dist/shared/lib/utils";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextSeo
        title="Theo Poette - Personal Website"
        description="Theo Poette's personal website showcasing his work, projects, and contact information."
        openGraph={{
          type: "website",
          url: "https://theopoette.me",
          title: "Theo Poette - Personal Website",
          description: "Theo Poette's personal website showcasing his work, projects, and contact information.",
          images: [
            {
              url: "/me.jpg",
              width: 400,
              height: 400,
              alt: "Theo Poette Profile Picture",
            },
          ],
        }}
      />
      {/* @ts-ignore */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(MyApp);
