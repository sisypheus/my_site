import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import ProjectShowcase from "../components/ProjectShowcase";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Theo Poette - Projects</title>
        <meta name="description" content="My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FadeIn>
        <h1 className="text-xl font-medium tracking-wide text-white underline underline-offset-4">
          Projects
        </h1>
        <div className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
          <ProjectShowcase
            name="Babble"
            description="Messaging app for business owners"
            image="/projects/babble.png"
            github="https://github.com/sisypheus/babble-website"
            website="https://babble.fr/"
          />
          <ProjectShowcase
            name="My blog"
            description="My personal blog"
            image="/projects/blog.png"
            github="https://github.com/sisypheus/blogv2"
            website="https://blog.theopoette.me"
          />
          <ProjectShowcase
            name="Artnet"
            description="Social media app for artists"
            image="/projects/artnet.png"
            github="https://github.com/sisypheus/artnet"
            website="https://artnet.netlify.app/"
          />
          <ProjectShowcase
            name="Amazon tracker"
            description="Amazon price wishlist price tracker"
            image="/projects/tracker.png"
            github="https://github.com/sisypheus/amz-tracker"
            website="https://amz-tracker.netlify.app/"
          />
          <ProjectShowcase
            name="Dashboard"
            description="Modular and customizable dashboard with widgets"
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
            description="Mobile app for improving your health"
            image="/projects/sidekick.png"
            github="https://github.com/Sidekick-EIP"
          />
          <ProjectShowcase
            name="Chatapp"
            description="Chat app with rooms made with go and react"
            image="/projects/chatapp.png"
            github="https://github.com/sisypheus/chatappv2"
          />
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Link
            className="rounded-lg bg-blue-300 px-4 py-2 shadow"
            href="/contact"
          >
            Contact me
          </Link>
        </div>
      </FadeIn>
    </>
  );
};

export default Projects;
