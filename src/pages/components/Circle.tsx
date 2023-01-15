import React from "react";
import RoundIcon from "./RoundIcon";

interface Props {
  icons: string[];
  size: number;
}

const Circle = ({ icons, size }: Props) => {
  if (!icons) return null;
  size = (size ?? 1) / 2;
  const divs = [];
  for (let i = 0; i < icons.length; i++) {
    const angle = (i / icons.length) * 2 * Math.PI;
    const x = size * Math.cos(angle);
    const y = size * Math.sin(angle);
    divs.push(
      <div
        key={i}
        className="absolute -translate-x-1/2 -translate-y-1/2 transform"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
        }}
      >
        <RoundIcon icon={"/logos/" + icons[i]} />
      </div>
    );
  }

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
      style={{
        width: size * 2,
        height: size * 2,
      }}
    >
      {divs}
    </div>
  );
};
export default Circle;
