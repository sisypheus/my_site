import { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import Script from "next/script";
import Alert from "../components/Alert";
import { useRef, useState } from "react";
import CopyIcon from "../components/CopyIcon";

const Contact: NextPage = () => {
  const [error, setErrror] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef<any>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailRef.current.textContent);
    setSuccess("Email copied to clipboard");
  };

  return (
    <>
      <Head>
        <title>Theo Poette - Work</title>
        <meta name="description" content="Work experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://www.google.com/recaptcha/api.js" />
      <FadeIn>
        <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
          Get in touch
        </h1>

        <ContactForm setSuccess={setSuccess} setError={setErrror} />

        <div className="mt-8 flex flex-col items-center justify-center">
          <h1 className="text-xl tracking-tight text-white">
            Or send me an email from your preferred app
          </h1>

          <div
            className="flex cursor-pointer items-center justify-center space-x-4 rounded-lg border border-gray-700 p-2 drop-shadow-2xl"
            onClick={copyEmail}
          >
            <h1 ref={emailRef} className="text-white">
              poette.theo@gmail.com
            </h1>
            <CopyIcon />
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            Connect with me on
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
      {success && <Alert message={success} type="success" />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default Contact;
