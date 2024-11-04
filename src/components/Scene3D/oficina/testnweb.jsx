
import { useAnimations, useGLTF, PerspectiveCamera } from '@react-three/drei'
import React, { useRef }  from 'react'
import { useEffect } from 'react'
import { TextComponents } from './text/maintext';
//import Text from drei



export default function Cbl(props)
{
  

  const handleOnClick = (intersect) => {
    

    intersect.stopPropagation();
    start();
    
    console.log(intersect);
    console.log(intersect.object.name);
    //get material current color
    console.log(intersect.object.material.color);
    //change material color
  
    // if color is red, change to blue
    if (intersect.object.material.color === '#ff0000') {
      intersect.object.material.color.set('"#0000ff"');
    }
    else {
      intersect.object.material.color.set('#ff0000');

    }

};

const handleOnPointerEnter = (intersect) => {
  intersect.stopPropagation() 
  document.body.style.cursor = 'pointer';
};

const handleOnPointerLeave = (intersect) => {
  intersect.stopPropagation() 
    document.body.style.cursor = 'default';
};

const group = useRef()
  
    const { nodes, materials, animations } = useGLTF("./models/cblf.gltf", true);
    const { actions } = useAnimations(animations, group)


/*     useEffect(() => {
    console.log(actions);
    actions["CamaraActions"].play();
    }, []) */

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
       {/*    <group
            name="seccion1"
            position={[0, 25, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[10, 5, 3.483]}>
            <mesh
              name="Plano002"
              castShadow
              receiveShadow
              geometry={nodes.Plano002.geometry}
              material={materials.seccion5}
            />
            <mesh
              name="Plano002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plano002_1.geometry}
              material={materials.seccion2}
            />
            <mesh
              name="Plano002_2"
              castShadow
              receiveShadow
              geometry={nodes.Plano002_2.geometry}
              material={materials.seccion3}
            />
            <mesh
              name="Plano002_3"
              castShadow
              receiveShadow
              geometry={nodes.Plano002_3.geometry}
              material={materials.seccion4}
            />
            <mesh
              name="Plano002_4"
              castShadow
              receiveShadow
              geometry={nodes.Plano002_4.geometry}
              material={materials.secion1}
            />
          </group> */}
  {/*         <group
            name="Sketchfab_model"
            position={[0, 22.587, -5.648]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.849}>
            <group name="Root">
              <group name="Circle" rotation={[0, 0, -3.015]} scale={0.167}>
                <mesh
                  name="Circle_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle_0.geometry}
                  material={materials['Material.010']}
                />
                <group name="Icosphere002" position={[1, 0, 0]} scale={0.063}>
                  <mesh
                    name="Icosphere002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere002_0.geometry}
                    material={materials['Material.008']}
                  />
                </group>
              </group>
              <group name="Circle455" scale={0.176}>
                <mesh
                  name="Circle455_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle455_0.geometry}
                  material={materials['Material.007']}
                  morphTargetDictionary={nodes.Circle455_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.Circle455_0.morphTargetInfluences}
                />
              </group>
              <group name="Circle643" scale={4.787}>
                <mesh
                  name="Circle643_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle643_0.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group name="Sphere002" rotation={[0, 0, -3.015]} scale={0.965}>
                <mesh
                  name="Sphere002_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere002_0.geometry}
                  material={materials['Material.006']}
                />
              </group>
              <group name="TERRE1" scale={3.27}>
                <mesh
                  name="TERRE1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.TERRE1_0.geometry}
                  material={materials['Material.005']}
                />
              </group>
            </group>
          </group> */}
          <mesh
            name="sphere"
            castShadow
            receiveShadow
            geometry={nodes.sphere.geometry}
            material={materials.sphere}
            position={[-14.414, 30.683, -33.811]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={9.806}
          />
          <mesh
            name="sphere001"
            castShadow
            receiveShadow
            geometry={nodes.sphere001.geometry}
            material={materials['sphere.001']}
            position={[15.138, 45.097, -24.572]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={16.559}
          />
          <group name="Cubo001" position={[0, 30.972, 0.643]} scale={[5.558, 0.078, 0.686]}>
            <mesh
              name="Cubo001_1"
              castShadow
              receiveShadow
              geometry={nodes.Cubo001_1.geometry}
              material={materials.negro}
            />
            <mesh
              name="Cubo001_2"
              castShadow
              receiveShadow
              geometry={nodes.Cubo001_2.geometry}
              material={materials.LuzProyeccion}
            />
          </group>
          <mesh
            name="Plano001"
            castShadow
            receiveShadow
            geometry={nodes.Plano001.geometry}
            material={materials.bgproyeccion}
            position={[-0.069, 34.953, 0.225]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[5.271, 0.638, 3.015]}
          />
          <mesh
            name="sphere002"
            castShadow
            receiveShadow
            geometry={nodes.sphere002.geometry}
            material={materials['sphere.002']}
            position={[10.897, 17.239, -20.549]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={8.057}
          />
        </group>
      </group>
    )
}

useGLTF.preload("./models/cblf.gltf");
