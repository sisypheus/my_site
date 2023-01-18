import { NextPage } from "next";
import Head from "next/head";
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
        <h1 className="text-xl text-white">Projects</h1>
        <div className="grid grid-cols-1 gap-12 sm:gap-8 sm:grid-cols-2 mt-4">
          <ProjectShowcase
            name="Babble"
            description="Messaging app for business owners"
            image="/projects/babble.png"
            github=""
          />
          <ProjectShowcase
            name="My blog"
            description="My personal blog"
            image="/projects/blog.png"
            github=""
          />
          <ProjectShowcase
            name="Amazon tracker"
            description="Amazon price wishlist price tracker"
            image="/projects/tracker.png"
            github=""
          />
          <ProjectShowcase
            name="Artnet"
            description="Social media app for artists"
            image="/projects/artnet.png"
            github=""
          />
        </div>
      </FadeIn>
    </>
  );
};

export default Projects;
