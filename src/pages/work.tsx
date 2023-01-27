import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import FadeIn from "../components/FadeIn";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Theo Poette - Work</title>
        <meta name="description" content="Work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  Full-stack engineer
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (6 months)
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
                    Javascript, PHP, MySQL
                  </p>
                  <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-300">
                    - Development of a new part of the existing learning
                    platform
                    <br />- Creation and upgrade of existing functionalities
                  </p>
                </div>
              </div>
            </div>

            <div className="left-timeline mb-8 mt-16 flex w-full items-center justify-between">
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 p-3 shadow-xl sm:p-4">
                <div>
                  <p className="text-sm font-semibold leading-snug tracking-wide text-white">
                    React, Typescript, AWS, Node, Postgres, Express
                  </p>
                  <p className="text-xs leading-snug tracking-wide text-gray-300 sm:text-sm">
                    - Back-end redesign to improve scalability
                    <br />
                    - Implementation of new statistics for member cities
                    <br />- Creation of a new front-end for member cities
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
                  Full-stack engineer
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (6 months)
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
                  Full-stack engineer
                </p>
                <p className="text-center text-xs font-semibold leading-snug tracking-wide text-gray-900">
                  (5 months)
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
                    React, Typescript, AWS, Node, MongoDB, Express
                  </p>
                  <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-200">
                    - Development of the back & front-end for a new offering
                    <br />
                    - Improvements on the current website for customers
                    <br />- Creation of new functionalities for the current
                    website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex w-fit flex-col items-center justify-center rounded-lg p-6">
          <p className="text-lg font-semibold text-white">Now</p>
          <p className="text-white">I'm open to new opportunities !</p>
          <Link
            className="mt-2 rounded-lg bg-blue-300 px-4 py-2 shadow"
            href="/contact"
          >
            Contact me
          </Link>
        </div>
      </FadeIn>
    </>
  );
};

export default Work;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      /* ...(await serverSideTranslations(locale, ["common"])), */
    },
  };
}
