import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";
import Github from "./Github";

const Menu: NextPage = () => {
  return (
    <div className="sticky opacity-90">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-center py-4">
          <Link href="/">
            <p className="text-lg font-semibold tracking-tighter hover:underline">
              Theo Poette
            </p>
          </Link>
        </div>
        <div className="ml-6 flex items-center justify-center space-x-6 py-2">
          <ActiveLink href="/about" activeClassName="text-gray-300">
            <p className="font-light hover:underline">About</p>
          </ActiveLink>
          <ActiveLink
            href="/projects"
            activeClassName="text-gray-900 font-semibold bg-blue-300 px-4 py-2 rounded"
            className="font-light hover:underline"
          >
            Project
          </ActiveLink>
          <ActiveLink
            href="/work"
            activeClassName="text-gray-900 font-semibold bg-blue-300 px-4 py-2 rounded"
            className="font-light hover:underline"
          >
            Work
          </ActiveLink>
          <ActiveLink href="/contact" activeClassName="text-gray-300">
            <p className="font-light  hover:underline">Contact</p>
          </ActiveLink>
          <a target="_blank" href="https://blog.theopoette.me">
            <p className="font-light  hover:underline">Blog</p>
          </a>
          <a
            href="https://github.com/sisypheus"
            className="ml-6 flex items-center space-x-1 hover:underline"
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
