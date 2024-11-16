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

import DividerNeon2 from '../../index/DividerRive1.jsx';
import IndexSeccion6 from '../../index/Secciones/IndexSeccion6.jsx';
import Footer from '../../global/footer/Footer.jsx';



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
  prepend={true} 
  damping={0.1}
  style={{
    width: '100%', 
    height: '100vh', 
    zIndex: 1000,
    overflowY: 'scroll',  // Para habilitar el scroll vertical
    scrollbarWidth: 'thin',  // Firefox: scrollbar más delgado
    scrollbarColor: '#003a8c rgba(0, 0, 0, 0.2)',  // Firefox: thumb color y track color
    
    // Webkit para Chrome, Edge, Safari
    '::-webkit-scrollbar': {
      width: '8px',  // Ancho del scrollbar
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#003a8c',  // Color del thumb
      borderRadius: '8px',  // Bordes redondeados
      boxShadow: '0 0 6px rgba(0, 0, 0, 0.2)',  // Efecto de sombra
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',  // Color de fondo del track
      borderRadius: '8px',  // Bordes redondeados en el track
    },
  }}
>
      <Scroll>

      <Float
        speed={0.3} 
        rotationIntensity={0.2} 
        floatIntensity={1} 
        floatingRange={[-0.1, 0.1]} 
      >

    <Llave position={[-2.8, -7.5, 2]} scale={1.6} rotation={[1.2, 5, 0]} />
      </Float>

  
        



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

	  <IndexSeccion5 />
	  <IndexSeccion6 />
    <Footer />
  </Scroll>

    </ScrollControls>
  </Suspense>

</>
  );
}
