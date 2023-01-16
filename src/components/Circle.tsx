import { useSpring, animated } from "@react-spring/web";
import { info } from "console";
import React from "react";
import RoundIcon from "./RoundIcon";

interface Props {
  icons: string[];
  size: number;
  speed: number;
  direction: "ccw" | "cw";
}

const Circle = ({ icons, size, speed, direction }: Props) => {
  size = (size ?? 1) / 2;
  const divs = [];
  const duration = 40000 / speed;

  const transform = useSpring({
    from: { transform: direction === "cw" ? "rotate(0deg)" : "rotate(360deg)" },
    to: { transform: direction === "cw" ? "rotate(360deg)" : "rotate(0deg)" },
    config: { duration },
    loop: true,
  });

  for (let i = 0; i < icons.length; i++) {
    const angle = (i / icons.length) * 2 * Math.PI;
    const x = size * Math.cos(angle);
    const y = size * Math.sin(angle);

    const counter = useSpring({
      from: { transform: direction === "cw" ? "rotate(0deg)" : "rotate(0deg)" },
      to: {
        transform: direction === "cw" ? "rotate(-360deg)" : "rotate(360deg)",
      },
      config: { duration },
      loop: true,
    });

    divs.push(
      <div
        key={i}
        className="absolute -translate-x-1/2 -translate-y-1/2 transform"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
        }}
      >
        <animated.div style={counter}>
          <RoundIcon icon={"/logos/" + icons[i]} />
        </animated.div>
      </div>
    );
  }

  return (
    <animated.div
      className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full border border-white/10"
      style={{
        width: size * 2,
        height: size * 2,
        ...transform,
      }}
    >
      {divs}
    </animated.div>
  );
};

export default Circle;
