import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CharacterModel = () => {
  const model = useLoader(GLTFLoader, "/character/character.glb");

  model.scene.receiveShadow = true;
  model.scene.castShadow = true;

  model.scene.traverse((node) => {
    if ((node as any).isMesh) {
      (node as any).material.shininess = 0;
    }
  });

  return <primitive object={model.scene} dispose={null} scale={10} />;
};

export default CharacterModel;
