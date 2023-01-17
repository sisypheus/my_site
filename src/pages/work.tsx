import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

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
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-sm font-semibold text-white sm:text-lg">
                  2020
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-200">
                  yes i did some things whatever
                </p>
              </div>
            </div>

            <div className="left-timeline mb-8 mt-16 flex w-full items-center justify-between">
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-200">
                  yes i did some things whatever
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-sm font-semibold text-white sm:text-lg">
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
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-sm font-semibold text-white sm:text-lg">
                  2022
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-600 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-200">
                  yes i did some things whatever
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex w-fit flex-col items-center justify-center rounded-lg bg-gray-500 p-6">
          <p className="text-lg font-semibold text-white">Present</p>
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
