import { useAnimations, useGLTF, MeshReflectorMaterial } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';
import HolographicMaterial from './HolographicMaterial';  

export default function OrbitaModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./../models/redes1.gltf', true);
  const { actions } = useAnimations(animations, group);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        console.log(`Reproduciendo animación: ${actionName}`);
        const action = actions[actionName];
        action.timeScale = 0.5; // Reducir la velocidad a la mitad
        action.play(); // Reproducir la animación
      });
    }
  }, [actions]);

  const handlePointerEnter = () => {
    document.body.style.cursor = 'pointer';
    setHovered(true);
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = true; // Pausar todas las animaciones
      });
    }
  };

  const handlePointerLeave = () => {
    document.body.style.cursor = 'auto';
    setHovered(false);
    if (actions) {
      Object.keys(actions).forEach((actionName) => {
        actions[actionName].paused = false; // Reanudar todas las animaciones
      });
    }
  };

  const openSocialMedia = (url, event) => {
    event.stopPropagation(); // Detener la propagación del evento
    window.open(url, '_blank');
  };

  return (
    <group {...props} dispose={null}>
      <group
        name="youtube_container"
        position={[1.38, 1.332, 0.134]}
        rotation={[Math.PI, -1.554, Math.PI]}
        scale={[0.099, 1.114, 0.76]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={(event) => openSocialMedia('https://www.youtube.com', event)}
      >
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['background.001']}
        />
        <mesh
          name="Cube003_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube003_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials['marco.001']}
        />
        <mesh
          name="Cube003_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials['glass.001']}
        />
        <mesh
          name="Cube003_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube003_4.geometry}
          material={materials['text.001']}
        />
      </group>

      <group
        name="twitter_container"
        position={[-4.063, 1.341, 0.363]}
        rotation={[0, -1.425, 0]}
        scale={[0.099, 1.114, 0.76]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={(event) => openSocialMedia('https://www.twitter.com', event)}
      >
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['background.002']}
        />
        <mesh
          name="Cube005_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube005_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['marco.002']}
        />
        <mesh
          name="Cube005_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials['glass.002']}
        />
        <mesh
          name="Cube005_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials['text.002']}
        />
      </group>

      <group
        name="facebook_container"
        position={[3.78, 1.299, 0.818]}
        rotation={[Math.PI / 2, 0, 0.465]}
        scale={[4.837, 3.136, 5.287]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={(event) => openSocialMedia('https://www.facebook.com', event)}
      >
        <mesh
          name="Curve006"
          castShadow
          receiveShadow
          geometry={nodes.Curve006.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Curve006_1"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_1.geometry}
          material={materials['marco.003']}
        />
        <mesh
          name="Curve006_2"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_2.geometry}
          material={materials['glass.003']}
        />
        <mesh
          name="Curve006_3"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_3.geometry}
          material={materials['background.003']}
        />
        <mesh
          name="Curve006_4"
          castShadow
          receiveShadow
          geometry={nodes.Curve006_4.geometry}
          material={materials['text.004']}
        />
      </group>

      <group
        name="telegram_container"
        position={[-1.194, 1.337, -0.082]}
        rotation={[Math.PI, -1.554, Math.PI]}
        scale={[0.099, 1.114, 0.76]}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={(event) => openSocialMedia('https://www.telegram.org', event)}
      >
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.background}
        />
        <mesh
          name="Cube_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.glass}
        />
        <mesh
          name="Cube_2"
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.marco}
        />
        <mesh
          name="Cube_3"
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.iconWhite}
        />
        <mesh
          name="Cube_4"
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials['text.003']}
        />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[500, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={20}
          roughness={1}
          depthScale={2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#212121"
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('./../models/redes1.gltf');
