import { useAnimations, useGLTF } from '@react-three/drei'
/*  import { useLoader } from '@react-three/fiber' 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' */ 
import React from 'react'
import { useEffect } from 'react'
import { useControls } from 'leva'


export default function ZorroModel(props)
{
    const fox = useGLTF('./Fox/glTF-Binary/Fox.glb', true);
    useGLTF.preload('./Fox/glTF-Binary/Fox.glb');
    const animations = useAnimations(fox.animations, fox.scene)

    
    const { animationName } = useControls({
        animationName: { options: animations.names }
    })


    useEffect(() =>
    {
        const action = animations.actions[animationName]
        action
            .reset()
            .fadeIn(0.5)
            .play()
    
            return () =>
            {
                action.fadeOut(0.5)
            }
    }, [animationName ])

  return <>

  <primitive object={ fox.scene }  {...props}/>
  </>
  
}



