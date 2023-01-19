import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Theo Poette - Work</title>
        <meta name="description" content="Work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FadeIn>
        <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
          Get in touch
        </h1>

        <ContactForm />

        <div className="mt-8">
          <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            Or connect with me on
          </h1>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/theo-poette/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/logos/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.github.com/sisypheus"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/logos/github.svg"
                alt="Github"
                width={40}
                height={40}
                className="rounded-full bg-white p-2"
              />
            </a>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Contact;
