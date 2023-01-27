import { Canvas } from "@react-three/fiber";
import ThreeLayout from "./ThreeLayout";

const Character = () => {
  return (
    <div className="h-80">
      <Canvas>
        <ThreeLayout />
      </Canvas>
    </div>
  );
};

export default Character;
