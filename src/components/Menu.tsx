import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import FadeIn from "./FadeIn";
import Github from "./Github";
import MenuIcon from "./MenuIcon";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const Menu: NextPage = () => {
  const router = useRouter();
  const { locale } = router;
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t } = useTranslation("menu");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleLang = () => {
    setLangOpen((prev) => !prev);
  };

  const changeLocale = () => {
    router.push(router.pathname, router.asPath, {
      locale: locale === "en" ? "fr" : "en",
    });
    toggleLang();
  };

  return (
    <div className="sticky top-0 z-10 w-full px-4 backdrop-blur-md">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-center space-x-4 py-4">
          <Link href="/">
            <p className="text-lg font-semibold tracking-tighter hover:underline">
              Theo Poette
            </p>
          </Link>
          <div>
            <div className="relative mt-1">
              <button
                type="button"
                className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-6 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={toggleLang}
              >
                <span className="flex items-center">
                  <p className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xl">
                    {locale === "en" ? "🇬🇧" : "🇫🇷"}
                  </p>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center p-1">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              {langOpen && (
                <ul
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  tabIndex={-1}
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  <li
                    className="relative cursor-default select-none py-2 text-gray-900"
                    id="listbox-option-0"
                    role="option"
                    aria-selected
                  >
                    <div
                      onClick={changeLocale}
                      className="flex cursor-pointer items-center justify-center"
                    >
                      <span className="flex items-center">
                        <p className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xl">
                          {locale === "fr" ? "🇬🇧" : "🇫🇷"}
                        </p>
                      </span>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
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
              <div className="absolute top-0 right-0 mt-6 flex w-48 flex-col space-y-2 rounded-lg bg-slate-700 py-2 items-center">
                <ActiveLink
                  href="/projects"
                  className="pl-4 hover:underline"
                  onClick={toggleMenu}
                >
                  {t("projects")}
                </ActiveLink>
                <ActiveLink
                  href="/work"
                  className="pl-4 hover:underline"
                  onClick={toggleMenu}
                >
                  {t("work")}
                </ActiveLink>
                <ActiveLink
                  href="/contact"
                  className="pl-4 hover:underline"
                  onClick={toggleMenu}
                >
                  Contact
                </ActiveLink>
                <ActiveLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.theopoette.me"
                  className="pl-4 hover:underline"
                  onClick={toggleMenu}
                >
                  Blog
                </ActiveLink>
                <ActiveLink
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sisypheus"
                  className="pl-4 hover:underline"
                  onClick={toggleMenu}
                >
                  Github
                </ActiveLink>
              </div>
            </FadeIn>
          )}
        </div>

        {/* desktop */}
        <div className="ml-6 hidden items-center justify-center py-2 md:flex md:space-x-4">
          <ActiveLink
            href="/projects"
          >
            {t("projects")}
          </ActiveLink>
          <ActiveLink
            href="/work"
          >
            {t("work")}
          </ActiveLink>
          <ActiveLink
            href="/contact"
          >
            Contact
          </ActiveLink>
          <a target="_blank" rel="noreferrer" href="https://blog.theopoette.me">
            <Button variant="expandIcon" Icon={MoveUpRight} iconPlacement="right" iconSize={14}>
              Blog
            </Button>
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://github.com/sisypheus">
            <Button variant="expandIcon" Icon={MoveUpRight} iconPlacement="right" iconSize={14} className="space-x-2">
              <div className="fill-current text-white">
                <Github />
              </div>
              <p className="text-md">Github</p>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
