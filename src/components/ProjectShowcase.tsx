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
          className="rounded-xl border border-gray-600 shadow-lg hover:blur-sm"
        />
        {isHovered && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center space-x-4">
              <button onClick={() => console.log("tes")} className="">test</button>
              <button className="">test</button>
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
