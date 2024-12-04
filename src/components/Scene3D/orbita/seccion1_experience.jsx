import { Text, Sparkles, Environment, ScrollControls, useScroll, OrbitControls, Scroll,AdaptiveDpr, Html, Clouds, Cloud, Stars, MeshWobbleMaterial, Float  } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig, enviromentConfig } from './../js/scene_config';

import OrbitaModel from './orbita_model.jsx';


import { TextComponents } from './text/maintext';
import CloudWords  from './text/spheretext';

import * as THREE from 'three';



export default function Experienc(props) {


  return (
<>
<AdaptiveDpr pixelated /> 
 {/*  <Perf position="top-left" /> */}
  {/* <color attach="background" args={['#0D0E26']} /> */}
      <Suspense fallback={null}>
        <EffectComposer multisampling={1}>
          <ToneMapping {...toneMappingConfig} />
          {/* <Vignette {...vignetteConfig} /> */}
      {/*     <ChromaticAberration {...chromaticAberrationConfig} /> */}
          <Bloom {...bloomConfig} />
          {/* <Noise {...noiseConfig} /> */}
        </EffectComposer>
      </Suspense>
  <Environment {...enviromentConfig} />
  <ambientLight intensity={10} color={'#5d5d5d'} />

  
  <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]} />}>


 {/*      <Float
        speed={0.3} 
        rotationIntensity={0.2} 
        floatIntensity={1} 
        floatingRange={[-0.1, 0.1]} 
      >

      </Float> */}

    <OrbitaModel position={[-1, 0, -18]} scale={1} rotation={[0, 0, 0]} />
    <TextComponents posicion={[0, -3, -6]} scale={1} rotation={[0, 0, 0]} texto='Creemos productos del futuro, juntos' texto_tamaño={0.5}/>
   
{/*     <group rotation={[10, 10.5, 10]} scale={0.1}>
    <CloudWords count={4} radius={20} />
        </group>
 */}

   {/*      <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,0,3]} scale={10} size={10} /> */}
{/* <Clouds position={[0,-25,-10]} material={THREE.MeshBasicMaterial}>
  <Cloud segments={40} bounds={[0, 10, 2]} volume={20} color="blue" fade={10}/>
  <Cloud seed={1} bounds={[0, 15, 2]} scale={2} volume={8} color="#bd00ff" fade={10} />
</Clouds> */}



  <Stars radius={100} depth={5} count={1000} factor={4} saturation={1} fade speed={1} />
   

    

  </Suspense>

</>
  );
}
