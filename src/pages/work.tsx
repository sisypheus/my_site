import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import FadeIn from "../components/FadeIn";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/ui/button";
import { NextSeo } from "next-seo";

const Work: NextPage = () => {
  const { t } = useTranslation("work");

  return (
    <>
      <Head>
        <title>Theo Poette - Work</title>
        <meta name="description" content="Theo Poette's work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Theo Poette - Work"
        description="Learn about Theo Poette's work experience and professional background."
        openGraph={{
          title: "Theo Poette - Work",
          description: "Learn about Theo Poette's work experience and professional background.",
          images: [
            {
              url: "/nextraining.png",
              width: 400,
              height: 400,
              alt: "Nextraining Logo",
            },
            {
              url: "/bouge.png",
              width: 600,
              height: 400,
              alt: "Bouge Logo",
            },
            {
              url: "/lama.png",
              width: 400,
              height: 400,
              alt: "Lamafactory Logo",
            },
            {
              url: "/kbrw.png",
              width: 600,
              height: 600,
              alt: "KBRW Logo",
            },
          ],
        }}
      />
      <FadeIn>
        <div className="container mx-auto h-full w-full">
          <div className="wrap relative h-full overflow-hidden p-1 py-8 sm:p-6">
            <div className="border-2-2 absolute left-1/2 h-full border border-gray-500 border-opacity-20"></div>
            <div className="left-timeline mb-8 flex w-full items-center justify-between">
              <div className="order-1 flex w-5/12 flex-col items-center justify-center space-y-1 rounded-lg bg-blue-200/70 p-4">
                <Image
                  src="/nextraining.png"
                  alt="Picture of me"
                  className="h-12 w-24 "
                  width={400}
                  height={400}
                />
                <p className="text-lg font-bold text-gray-900 sm:text-xl">
                  Nextraining
                </p>
                <p className="text-center text-sm font-semibold leading-snug tracking-wide text-gray-900">
                  {t("title")}
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (6 {t("months")})
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-xs font-semibold text-white sm:text-lg">
                  2020
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 p-4 shadow-xl">
                <div>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white">
                    {t("nextraining_tech")}
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-300 sm:text-sm">
                    {t("nextraining_1")}
                    <br />
                    {t("nextraining_2")}
                  </p>
                </div>
              </div>
            </div>

            <div className="left-timeline mb-8 mt-16 flex w-full items-center justify-between">
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 p-3 shadow-xl sm:p-4">
                <div>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white">
                    {t("bouge_tech")}
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-300 sm:text-sm">
                    {t("bouge_1")}
                    <br />
                    {t("bouge_2")}
                    <br />
                    {t("bouge_3")}
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-xs font-semibold text-white sm:text-lg">
                  2021
                </h1>
              </div>
              <div className="order-1 flex w-5/12 flex-col items-center justify-center space-y-1 rounded-lg bg-blue-200/70 p-4">
                <Image
                  src="/bouge.png"
                  alt="Picture of me"
                  className="h-12 w-32"
                  width={600}
                  height={400}
                />
                <p className="text-lg font-bold text-gray-900 sm:text-xl">
                  Bouge
                </p>
                <p className="text-center text-sm font-semibold leading-snug tracking-wide text-gray-900">
                  {t("title")}
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (6 {t("months")})
                </p>
              </div>
            </div>

            <div className="left-timeline mb-8 mt-16 flex w-full items-center justify-between">
              <div className="order-1 flex w-5/12 flex-col items-center justify-center space-y-1 rounded-lg bg-blue-200/70 p-4">
                <Image
                  src="/lama.png"
                  alt="Picture of me"
                  className="h-12 w-12"
                  width={400}
                  height={400}
                />
                <p className="text-lg font-bold text-gray-900 sm:text-xl">
                  Lamafactory
                </p>
                <p className="text-center text-sm font-semibold leading-snug tracking-wide text-gray-900">
                  {t("title")}
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (5 {t("months")})
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-xs font-semibold text-white sm:text-lg">
                  2022
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 p-4 shadow-xl">
                <div>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white">
                    {t("lama_tech")}
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-200 sm:text-sm">
                    {t("lama_1")}
                    <br />
                    {t("lama_2")}
                    <br />
                    {t("lama_3")}
                  </p>
                </div>
              </div>
            </div>

            <div className="left-timeline mb-8 mt-16 flex w-full items-center justify-between">
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 p-3 shadow-xl sm:p-4">
                <div>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white">
                    {t("kbrw_tech")}
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-300 sm:text-sm">
                    {t("kbrw_1")}
                    <br />
                    {t("kbrw_2")}
                    <br />
                    {t("kbrw_3")}
                  </p>
                </div>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-xs font-semibold text-white sm:text-lg">
                  2023
                </h1>
              </div>
              <div className="order-1 flex w-5/12 flex-col items-center justify-center space-y-1 rounded-lg bg-blue-200/70 p-4">
                <Image
                  src="/kbrw.png"
                  alt="KBRW logo"
                  className="w-24"
                  width={600}
                  height={600}
                />
                <p className="text-lg font-bold text-gray-900 sm:text-xl">
                  KBRW
                </p>
                <p className="text-center text-sm font-semibold leading-snug tracking-wide text-gray-900">
                  {t("title")}
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  {t("permanent_contract")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex w-fit flex-col items-center justify-center rounded-lg p-6">
          <p className="text-white">{t("free")}</p>
          <Button>
            <Link href="/contact">
              {t("contact")}
            </Link>
          </Button>
        </div>
      </FadeIn>
    </>
  );
};

export default Work;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["work", "menu"])),
    },
  };
}
