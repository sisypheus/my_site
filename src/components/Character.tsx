import { Canvas } from "@react-three/fiber";
import ThreeLayout from "./ThreeLayout";

const Character = () => {
  return (
    <div className="h-80">
      <group dispose={null}>
        <Canvas>
          <ThreeLayout />
        </Canvas>
      </group>
    </div>
  );
};

export default Character;
