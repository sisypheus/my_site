import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./components/FadeIn";

const Home: NextPage = () => {
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
          <p className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            About me
          </p>
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
