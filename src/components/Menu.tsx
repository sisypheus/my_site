import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import FadeIn from "./FadeIn";
import Github from "./Github";
import MenuIcon from "./MenuIcon";

const Menu: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-10 w-full backdrop-blur-md px-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-center py-4">
          <Link href="/">
            <p className="text-lg font-semibold tracking-tighter hover:underline">
              Theo Poette
            </p>
          </Link>
        </div>

        {/* mobile */}
        <div className="ml-6 flex items-center justify-center py-2 md:hidden">
          <button
            onClick={toggleMenu}
            className="rounded border border-gray-500 p-2 shadow-xl"
          >
            <MenuIcon />
          </button>

          {isOpen && (
            <FadeIn>
              <div className="absolute top-0 right-0 mt-6 flex w-48 flex-col space-y-2 rounded-lg bg-slate-700 py-2">
                <ActiveLink
                  href="/projects"
                  activeClassName="text-blue-300"
                  className="pl-4 hover:underline"
                >
                  Projects
                </ActiveLink>
                <ActiveLink
                  href="/work"
                  activeClassName="text-blue-300"
                  className="pl-4 hover:underline"
                >
                  Work
                </ActiveLink>
                <ActiveLink
                  href="/contact"
                  activeClassName="text-blue-300"
                  className="pl-4 hover:underline"
                >
                  Contact
                </ActiveLink>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.theopoette.me"
                >
                  <p className="pl-4 hover:underline">Blog</p>
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/sisypheus"
                  className="flex items-center space-x-1 pl-4 hover:underline"
                >
                  Github
                </a>
              </div>
            </FadeIn>
          )}
        </div>

        {/* desktop */}
        <div className="ml-6 hidden items-center justify-center py-2 md:flex">
          <ActiveLink
            href="/projects"
            activeClassName="text-gray-900 font-semibold bg-blue-300 py-2 rounded"
            className="px-4 font-light underline-offset-2 hover:underline"
          >
            Projects
          </ActiveLink>
          <ActiveLink
            href="/work"
            activeClassName="text-gray-900 font-semibold bg-blue-300 py-2 rounded"
            className="px-4 font-light underline-offset-2 hover:underline"
          >
            <p>Work</p>
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName="text-gray-300">
            <p className="px-4 font-light  underline-offset-2 hover:underline">
              Contact
            </p>
          </ActiveLink>
          <a target="_blank" rel="noreferrer" href="https://blog.theopoette.me">
            <p className="px-4  font-light underline-offset-2 hover:underline">
              Blog
            </p>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/sisypheus"
            className="flex items-center space-x-1 px-4 underline-offset-2 hover:underline"
          >
            <div className="fill-current text-white">
              <Github />
            </div>
            <p className="font-light">Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
