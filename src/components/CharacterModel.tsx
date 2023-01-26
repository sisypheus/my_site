import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const CharacterModel = () => {
  const materials = useLoader(MTLLoader, "/character/character.mtl");
  const model = useLoader(OBJLoader, "/character/character.obj", (loader) => {
    loader.setMaterials(materials);
  });

  model.receiveShadow = true;
  model.castShadow = true;

  model.traverse((node) => {
    if ((node as any).isMesh) {
      (node as any).material.shininess = 0;
    }
  });

  return <primitive object={model} dispose={null} scale={10} />;
};

export default CharacterModel;
