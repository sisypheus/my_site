import { type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Circle from "../components/Circle";
import FadeIn from "../components/FadeIn";
import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const animRef = useRef<HTMLDivElement>(null);

  const [circlesMaxSize, setCirclesMaxSize] = useState(0);

  useEffect(() => {
    if (!animRef.current) return;

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [animRef]);

  const updateSize = () => {
    if (!animRef.current) return;
    setCirclesMaxSize(animRef.current.clientWidth);
  };

  return (
    <>
      <Head>
        <title>Theo Poette - Homepage</title>
        <meta name="description" content="Theo Poette home website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <div className="mt-8 flex w-full items-center justify-center rounded-lg bg-primary px-8 py-4">
          <p className="text-center text-white opacity-100">{t("greeting")}</p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
          <div className="flex-col">
            <p className="text-center text-3xl font-semibold tracking-wide text-white sm:text-left">
              Theo Poette
            </p>
            <p className="text-center text-lg font-light tracking-wide text-white sm:text-left">
              {t("title")}
            </p>
          </div>
          <Image
            className="mx-auto mt-4 h-32 w-32 overflow-hidden rounded-full border-2 border-white sm:m-0"
            src="/me.jpg"
            alt="Picture of me"
            width={400}
            height={400}
          />
        </div>

        <div className="mt-8">
          <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            {t("about_title")}
          </h1>
          <p className="mt-2 font-light text-white">
            <span className="ml-4" />
            {t("about")}
          </p>
        </div>

        <div
          ref={animRef}
          className="relative mt-8 flex flex-col"
          id="skills"
        >
          <p className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            {t("skills_title")}
          </p>

          <div style={{ height: circlesMaxSize * 0.85 }}>
            <Circle
              icons={["cpp.png", "rust.png", "go.png"]}
              size={(circlesMaxSize ?? 0) * 0.2}
              speed={5}
              direction="cw"
            />
            <Circle
              icons={["js.png", "ts.png", "node.png", "react.png", "next.png"]}
              size={(circlesMaxSize ?? 0) * 0.45}
              speed={2}
              direction="ccw"
            />
            <Circle
              icons={[
                "postgres.png",
                "linux.png",
                "docker.png",
                "github.png",
                "aws.png",
                "nest.png",
                "do.png",
              ]}
              speed={1}
              size={(circlesMaxSize ?? 0) * 0.7}
              direction="cw"
            />
          </div>
        </div>
        <p className="text-white">
          {t("skills")}
        </p>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <Button>
            <Link href="/projects">
              Projects
            </Link>
          </Button>
          <Button>
            <Link href="/work">
              Work
            </Link>
          </Button>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
    },
  };
}
