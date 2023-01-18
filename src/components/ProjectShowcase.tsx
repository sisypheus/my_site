import Image from "next/image";
import { useState } from "react";

interface Props {
  name: string;
  description: string;
  image: string;
  github: string;
  website?: string;
}

const ProjectShowcase = ({
  name,
  description,
  image,
  github,
  website,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className={`h-44 w-96 rounded-xl border border-gray-600 shadow-lg transition-all duration-200 ${
            isHovered ? "blur-xs" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex w-full items-center justify-center space-x-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-400 px-4 py-2 text-white"
              >
                Code
              </a>
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-gray-400 px-4 py-2 text-white"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-bold text-gray-100 sm:text-xl">{name}</p>
        <p className="text-center text-sm leading-snug tracking-wide text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectShowcase;
