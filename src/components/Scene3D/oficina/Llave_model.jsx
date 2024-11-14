
import { useAnimations, useGLTF, PerspectiveCamera } from '@react-three/drei'
import React, { useRef }  from 'react'
import { useEffect } from 'react'
import { TextComponents } from './text/maintext';
//import Text from drei

import HolographicMaterial from '../js/HolographicMaterial.jsx';

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
  
    const { nodes, materials, animations } = useGLTF("./models/llave.gltf", true);
    const { actions } = useAnimations(animations, group)


/*     useEffect(() => {
    console.log(actions);
    actions["CamaraActions"].play();
    }, []) */

    return (
        <group {...props} dispose={null}>
          <mesh
            name="Cube001_0"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials['Material.001']}
            scale={[0.056, 0.02, 0.105]}
            
          >
                    <HolographicMaterial 
                    fresnelAmount={0.2}
                    fresnelOpacity={0.15}
                    hologramBrightness={0.7}
                    scanlineSize={6}
                    signalSpeed={1}
                    hologramColor={"#00fffb"}
                    hologramOpacity={1.0}
                    blinkFresnelOnly={true}
                    enableBlinking={true}
                    enableAdditive={true}
                    side={"FrontSide"}
                />
      
            </mesh>
        </group>
      )
}

useGLTF.preload("./models/llave.gltf");
