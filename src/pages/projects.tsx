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
            name="Amazon tracker"
            description="Amazon price wishlist price tracker"
            image="/projects/tracker.png"
            github="https://github.com/sisypheus/amz-tracker"
            website="https://amz-tracker.netlify.app/"
          />
          <ProjectShowcase
            name="Artnet"
            description="Social media app for artists"
            image="/projects/artnet.png"
            github="https://github.com/sisypheus/artnet"
            website="https://artnet.netlify.app/"
          />
        </div>

        <h1 className="text-xl text-white mt-16">Other</h1>
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
            name="Amazon tracker"
            description="Amazon price wishlist price tracker"
            image="/projects/tracker.png"
            github="https://github.com/sisypheus/amz-tracker"
            website="https://amz-tracker.netlify.app/"
          />
          <ProjectShowcase
            name="Artnet"
            description="Social media app for artists"
            image="/projects/artnet.png"
            github="https://github.com/sisypheus/artnet"
            website="https://artnet.netlify.app/"
          />
        </div>
      </FadeIn>
    </>
  );
};

export default Projects;
