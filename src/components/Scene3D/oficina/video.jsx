import React from 'react';
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';


export default  function VideoTextureCBLUNA (props)  {

  const texture = useVideoTexture('./videos/cblunavideo.mp4');
       
  return (
    <mesh {...props} position={[0,5,-5]}>
      <planeGeometry args={[30,20]} />
      <meshBasicMaterial  map={texture} encoding={THREE.SRGBColorSpace} toneMapped={true}  />
    </mesh>
  );
};

