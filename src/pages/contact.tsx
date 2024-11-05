import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import Script from "next/script";
import Alert from "../components/Alert";
import { useRef, useState } from "react";
import CopyIcon from "../components/CopyIcon";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import CVDownload from "@/components/CVDownload";

const Contact: NextPage = () => {
  const [error, setErrror] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef<any>(null);
  const { t } = useTranslation("contact");

  const copyEmail = () => {
    navigator.clipboard.writeText(emailRef.current.textContent);
    setSuccess("Email copied to clipboard");
  };

  return (
    <>
      <Head>
        <title>Theo Poette - Contact</title>
        <meta name="description" content="Get in touch with Theo Poette" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Theo Poette - Contact"
        description="Contact Theo Poette for more information or collaboration opportunities."
        openGraph={{
          title: "Theo Poette - Contact",
          description: "Contact Theo Poette for more information or collaboration opportunities.",
          images: [
            {
              url: "/logos/linkedin.svg",
              width: 40,
              height: 40,
              alt: "LinkedIn Logo",
            },
            {
              url: "/logos/github.svg",
              width: 40,
              height: 40,
              alt: "GitHub Logo",
            },
          ],
        }}
      />
      <Script src="https://www.google.com/recaptcha/api.js" />
      <FadeIn>
        <h1 className="mt-8 text-2xl font-medium tracking-wide text-white underline underline-offset-4">
          {t("contact")}
        </h1>

        <ContactForm setSuccess={setSuccess} setError={setErrror} />

        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-center text-xl leading-6 tracking-tight text-white">
            {t("or")}
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
            {t("connect")}
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

        <div className="mt-8">
          <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
            {t("download_cv")}
          </h1>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <CVDownload />
          </div>
        </div>
      </FadeIn>
      {success && <Alert message={success} type="success" />}
      {error && <Alert message={error} type="error" />}
    </>
  );
};

export default Contact;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "menu"])),
    },
  };
}
