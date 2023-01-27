import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import CharacterModel from "./CharacterModel";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";

const ThreeLayout = () => {
  const [target, setTarget] = useState(new THREE.Vector3(-0.5, 12.2, 0));

  const { camera } = useThree();

  useEffect(() => {
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      20,
      20 * Math.cos(0.2 * Math.PI)
    );
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);
  }, []);

  return (
    <mesh>
      <directionalLight
        position={[0, 15, 5]}
        intensity={0.8}
        color={0xcccccc}
      />
      <directionalLight
        position={[0, -15, 5]}
        intensity={0.8}
        color={0xcccccc}
      />
      <directionalLight
        position={[10, 0, -5]}
        intensity={0.8}
        color={0xcccccc}
      />
      <directionalLight
        position={[-10, 0, -5]}
        intensity={0.8}
        color={0xcccccc}
      />
      <OrbitControls autoRotate target={target} />
      <CharacterModel />
    </mesh>
  );
};

export default ThreeLayout;
