import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import FadeIn from "./components/FadeIn";

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
          <div className="wrap relative h-full overflow-hidden p-10">
            <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
            <div className="left-timeline mb-8 flex w-full items-center justify-between">
              <div className="order-1 flex w-5/12 flex-col items-center justify-center rounded-lg bg-blue-300 px-4 py-2">
                <Image
                  src="/me.jpg"
                  alt="Picture of me"
                  className="h-24 w-24 "
                  width={400}
                  height={400}
                />
                <p className="mb-1 text-xl font-bold text-gray-800">
                  Nextraining
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Full-stack engineer
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">
                  2020
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  yes i did some things whatever
                </p>
              </div>
            </div>

            <div className="left-timeline mb-8 flex w-full items-center justify-between">
              <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  yes i did some things whatever
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">
                  2021
                </h1>
              </div>
              <div className="order-1 flex w-5/12 flex-col items-center justify-center rounded-lg bg-blue-300 px-4 py-2">
                <Image
                  src="/me.jpg"
                  alt="Picture of me"
                  className="h-24 w-24 "
                  width={400}
                  height={400}
                />
                <p className="mb-1 text-xl font-bold text-gray-800">
                  Nextraining
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Full-stack engineer
                </p>
              </div>
            </div>

            <div className="left-timeline mb-8 flex w-full items-center justify-between">
              <div className="order-1 flex w-5/12 flex-col items-center justify-center rounded-lg bg-blue-300 px-4 py-2">
                <Image
                  src="/me.jpg"
                  alt="Picture of me"
                  className="h-24 w-24 "
                  width={400}
                  height={400}
                />
                <p className="mb-1 text-xl font-bold text-gray-800">
                  Nextraining
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Full-stack engineer
                </p>
              </div>
              <div className="z-20 order-1 flex items-center shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">
                  2022
                </h1>
              </div>
              <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  yes i did some things whatever
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Work;
