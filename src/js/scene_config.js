
import { BlendFunction, Resolution } from 'postprocessing'
import * as THREE from 'three'
// scene_config.js


/* LUCES y entorno */

 export const enviromentConfig = {
    encoding:THREE.SRGBColorSpace,
    files: [
        './enviroments/px.png',
        './enviroments/nx.png',
        './enviroments/py.png',
        './enviroments/ny.png',
        './enviroments/pz.png',
        './enviroments/nz.png'
    ]
    };

    export const pointLightConfig = {
        name: 'directional_light',
        castShadow: true,
        intensity: 16,
        position: [2.9, 7, 7],
        penumbra: 0.5,
        color: '#2e2e30',
      };

export const vignetteConfig = {
    offset: 0.1,
    darkness: 0.7,
    blendFunction: BlendFunction.OVERLAY,
  };

 export const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );
spotLight.map = new THREE.TextureLoader().load(   './enviroments/nz.png' );

  
  export const chromaticAberrationConfig = {
    offset: [0.0005, 0.0005],
    blendFunction: BlendFunction.SCREEN,
  };
  
  export const bloomConfig = {
    mipmapBlur: true,
    intensity: 1,
    luminanceThreshold: 0.7,
    luminanceSmoothing: 0.7,
    resolutionX: Resolution.AUTO_SIZE,
    resolutionY: Resolution.AUTO_SIZE,
    kernelSize: 1,
    blendFunction: BlendFunction.SCREEN,
  };
  
  export const noiseConfig = {
    opacity: 0.6,
    blendingFunction: BlendFunction.NORMAL,
    premultiply: true,
  };
  
  export const toneMappingConfig = {
    blendFunction: BlendFunction.NORMAL,
    mode: 3
    };

