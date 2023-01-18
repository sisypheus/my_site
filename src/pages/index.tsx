import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Circle from "../components/Circle";
import FadeIn from "../components/FadeIn";

const Home: NextPage = () => {
  const animRef = useRef<HTMLDivElement>(null);
  const [circlesMaxSize, setCirclesMaxSize] = useState(0);

  useEffect(() => {
    if (!animRef.current) return;

    setCirclesMaxSize(animRef.current.clientWidth);
  }, [animRef]);

  const age = () => {
    const today = new Date();
    const birthDate = new Date("2002-05-01");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Head>
        <title>Theo Poette - Homepage</title>
        <meta name="description" content="Theo Poette home website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <div className="mt-8 flex w-full items-center justify-center rounded-lg bg-blue-200/70 px-8 py-4">
          <p className="text-center text-white opacity-100">
            Hello, I'm Theo, a software engineer based in France 🇫🇷 !
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-between">
          <div className="flex-col">
            <p className="text-center text-3xl font-semibold tracking-wide text-white sm:text-left">
              Theo Poette
            </p>
            <p className="text-center text-lg font-light tracking-wide text-white sm:text-left">
              Full-stack software engineer
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
            About me
          </h1>
          <p className="mt-2 font-light text-white">
            <span className="ml-4" />
            I'm {age()}, and I'm a french computer science student that
            specializes in web development, especially towards backend and
            fullstack development as well as devops. I've studied in France, at
            <a className="text-blue-300" href="https://www.epitech.eu/">
              {" "}
              Epitech
            </a>
            , and in Canada at the{" "}
            <a className="text-blue-300" href="https://www.ulaval.ca/">
              Université Laval
            </a>
            , where I studied computer science. I'm working on a lot of
            projects, both personal and professional, and I'm always open to new
            opportunities to grow and learn.
          </p>
        </div>

        <div
          ref={animRef}
          className="relative mt-8 flex flex-col"
          /* style={{ height: circlesMaxSize * 0.7 }} */
          id="skills"
        >
          <p className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            Skills
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
          I am mainly working in the JavaScript (Typescript) ecosystem and have
          experience with React, Next.js, Node.js, Nest.js, and PostgreSQL. I am
          also familiar with Docker, Github, and cloud platforms like AWS and
          DigitalOcean. I work primarily on Linux and am always looking to
          expand my skillset. I prefer backend development, and I'm learning
          Rust and Go.
        </p>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <Link
            className="rounded-lg bg-blue-300 px-4 py-2 shadow"
            href="/projects"
          >
            Projects
          </Link>
          <Link className="rounded-lg bg-blue-300 px-4 py-2" href="/work">
            Work
          </Link>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
