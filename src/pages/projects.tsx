import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import ProjectShowcase from "../components/ProjectShowcase";
import { Button } from "@/components/ui/button";
import { NextSeo } from "next-seo";

const Projects: NextPage = () => {
  const { t } = useTranslation("projects");
  return (
    <>
      <Head>
        <title>Theo Poette - Projects</title>
        <meta name="description" content="Theo Poette's projects and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Theo Poette - Projects"
        description="Explore Theo Poette's projects and portfolio"
        openGraph={{
          title: "Theo Poette - Projects",
          description: "Explore Theo Poette's projects and portfolio",
          images: [
            {
              url: "/projects/babble.png",
              width: 800,
              height: 600,
              alt: "Babble Project",
            },
            {
              url: "/projects/blog.png",
              width: 800,
              height: 600,
              alt: "Theo Poette's Blog",
            },
            {
              url: "/projects/artnet.png",
              width: 800,
              height: 600,
              alt: "Artnet Project",
            },
            {
              url: "/projects/tracker.png",
              width: 800,
              height: 600,
              alt: "Amazon Tracker Project",
            },
            {
              url: "/projects/dashboard.png",
              width: 800,
              height: 600,
              alt: "Dashboard Project",
            },
            {
              url: "/projects/sidekick.png",
              width: 800,
              height: 600,
              alt: "Sidekick Project",
            },
            {
              url: "/projects/chatapp.png",
              width: 800,
              height: 600,
              alt: "Chat App Project",
            },
          ],
        }}
      />

      <FadeIn>
        <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
          Projects
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
          <ProjectShowcase
            name="Babble"
            description={t("babble")}
            image="/projects/babble.png"
            github="https://github.com/sisypheus/babble-website"
            website="https://babbles.fr/"
          />
          <ProjectShowcase
            name="My blog"
            description={t("blog")}
            image="/projects/blog.png"
            github="https://github.com/sisypheus/blogv2"
            website="https://blog.theopoette.me"
          />
          <ProjectShowcase
            name="Artnet"
            description={t("artnet")}
            image="/projects/artnet.png"
            github="https://github.com/sisypheus/artnet"
            website="https://artnet.netlify.app/"
          />
          <ProjectShowcase
            name="Amazon tracker"
            description={t("amz")}
            image="/projects/tracker.png"
            github="https://github.com/sisypheus/amz-tracker"
            website="https://amz-tracker.netlify.app/"
          />
          <ProjectShowcase
            name="Dashboard"
            description={t("dashboard")}
            image="/projects/dashboard.png"
            github="https://github.com/sisypheus/dashboardv2"
            website="https://v2-dashboard.netlify.app/"
          />
        </div>

        <h1 className="mt-16 text-xl font-medium tracking-wide text-white underline underline-offset-4">
          Other
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
          <ProjectShowcase
            name="Sidekick"
            description={t("sidekick")}
            image="/projects/sidekick.png"
            github="https://github.com/Sidekick-EIP"
          />
          <ProjectShowcase
            name="Chatapp"
            description={t("chatapp")}
            image="/projects/chatapp.png"
            github="https://github.com/sisypheus/chatappv2"
          />
        </div>

        <div className="mt-16 flex items-center justify-center">
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

export default Projects;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["projects", "menu"])),
    },
  };
}
