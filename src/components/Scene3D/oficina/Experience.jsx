import { Text, Sparkles, Environment, ScrollControls, useScroll, OrbitControls, Scroll,AdaptiveDpr, Html, Clouds, Cloud, Stars, MeshWobbleMaterial, Float  } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { Suspense, useState, useRef, useEffect } from 'react';
import Placeholder from './Placeholder';
import { ToneMapping, ChromaticAberration, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

import { vignetteConfig, chromaticAberrationConfig, bloomConfig, noiseConfig, toneMappingConfig, enviromentConfig } from '../js/scene_config';

import Llave from './Llave_model.jsx';

import VideoTextureCBLUNA from './video';
import { TextComponents } from './text/maintext';
import RiveComponent from '../../../components/global/animations/riveComponent.jsx';
import Scenestyles from "./sceneStyle.module.css";
import * as THREE from 'three';



import IndexSeccion1 from '../../../components/index/Secciones/IndexSeccion1.jsx';
import IndexSeccion2 from '../../../components/index/Secciones/IndexSeccion2.jsx';
import IndexSeccion3 from '../../../components/index/Secciones/IndexSeccion3.jsx';
import IndexSeccion4 from '../../../components/index/Secciones/IndexSeccion4.jsx';
import IndexSeccion5 from '../../../components/index/Secciones/IndexSeccion5.jsx';
/* import IndexSeccion5 from '../../../components/index/Secciones/DividerNeon2.jsx'; */
import DividerNeon2 from '../../index/DividerRive1.jsx';
import IndexSeccion6 from '../../index/Secciones/IndexSeccion6.jsx';



export default function Experienc(props) {


  return (
<>
<AdaptiveDpr pixelated /> 
 {/*  <Perf position="top-left" /> */}
  <color attach="background" args={['#17171e']} />
      <Suspense fallback={null}>
        <EffectComposer multisampling={1}>
          <ToneMapping {...toneMappingConfig} />
          <Vignette {...vignetteConfig} />
          <ChromaticAberration {...chromaticAberrationConfig} />
          <Bloom {...bloomConfig} />
          {/* <Noise {...noiseConfig} /> */}
        </EffectComposer>
      </Suspense>
{/*   <Environment {...enviromentConfig} />
  <ambientLight intensity={7} color={'#5d5d5d'} /> */}

  
  <Suspense fallback={<Placeholder position-y={0} scale={[2, 3, 2]} />}>
    <ScrollControls 
    pages={6} 
    distance={0.5}
    maxSpeed={10}
    prepend={false}
    style={{/* overflow: 'hidden',  *//* position: 'fixed', */ width: '100%', height: '100vh', zIndex: 1000}}
    >
      <Scroll>

      <Float
        speed={0.3} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >

    <Llave position={[-2.8, -7, 2]} scale={1.6} rotation={[1.2, 5, 0]} />
      </Float>

  
        


      {/*   <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,-25,0]} scale={10} size={10} />
        <Sparkles color={"#00FFF8"} count={50} speed={0.1} position={[0,-30,0]} scale={10} size={10} /> */}
        <Sparkles color={"#003aff"} count={150} speed={0.1} position={[0,-40,0]} scale={10} size={15} />
<Clouds position={[0,-25,0]} material={THREE.MeshBasicMaterial}>
  <Cloud segments={40} bounds={[0, 10, 2]} volume={20} color="blue" fade={10}/>
  <Cloud seed={1} bounds={[0, 15, 2]} scale={2} volume={8} color="#bd00ff" fade={10} />
</Clouds>



  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
   

      </Scroll>

  <Scroll  html={true} style={{  
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
    width: "100vw",   
    height: "auto",
    /* backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 1px), 
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 1px)
    `,
    backgroundSize: "100px 100px" */}}>


{/* <TopStart /> */}
	  <IndexSeccion1 />
	  <IndexSeccion2 />
	  <IndexSeccion3 />
	  <IndexSeccion4 />

	  <IndexSeccion6 />
	  <IndexSeccion5 />
  </Scroll>

    </ScrollControls>
  </Suspense>

</>
  );
}
