
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import * as THREE from 'three';
import mainStyle from './mainStyle.module.css';

const MyCanvas = () => {
  return <>
{/*   <div className={mainStyle.overlay}/> */}
    

    <Canvas
      dpr={[0.5, 1]}
      style={{
        height: '100vh', 
        width: '100vw',
        
        
      }}
      performance={{
        current: 1,
        min: 0.1,
        max: 1,
        debounce: 200,
        regress: 0.5
      }}
     /*  shadows */
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: false,
        toneMapping: THREE.NoToneMapping,
        toneMappingExposure: 0.6,
        gammaOutput: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      
      >
      <Experience />
    </Canvas>
    </>
  
};

export default MyCanvas;
