import React, { useEffect } from "react";
import { Suspense } from "react";
import { useLoader, Canvas, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Goldman } from "next/font/google";

const isMobileOrTablet = () => {
  if (typeof window !== "undefined") {
    return /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/i.test(navigator.userAgent);
  }
  return false;
};

const Wolf = () => {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/wolf/textured wolf v2.gltf");
    const { size } = useThree();
    gltf.scene.children[0].position.set(0, -0.002, 0);

    useEffect(() => {
      if (isMobileOrTablet()) {
        gltf.scene.scale.set(250, 250, 250);
      } else {
        gltf.scene.scale.set(380, 380, 380);
      }
    }, [gltf.scene]);

    return (
      <>
        <primitive dispose={null} object={gltf.scene} />
      </>
    );
  };

  return (
    <div className="relative w-full h-full z-1">
      <Canvas className="z-50" shadows dpr={[1, 2]} camera={{ position: [0, 9, 15], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} angle={1} penumbra={8} position={[8, 8, 10]} />

        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 3}
          minAzimuthAngle={-Math.PI / 3}
          rotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
};

export default Wolf;
