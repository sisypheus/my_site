import { animated, useSpring } from "@react-spring/web";

const FadeIn = ({ children, duration = 300 }: any) => {
  const springs = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: {
      duration,
    },
  });

  return <animated.div style={springs}>{children}</animated.div>;
};

export default FadeIn;
