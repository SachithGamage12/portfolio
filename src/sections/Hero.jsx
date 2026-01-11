import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Victor } from "../components/Vicetober_snapped";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} />
            
            <Float
              speed={1.5}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <RotatingVictor 
                isMobile={isMobile}
                scale={isMobile ? 0.3 : 0.4}
                position={isMobile ? [1, -2, 0] : [2.5, -1.8, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function RotatingVictor({ isMobile, scale, position }) {
  const modelRef = useRef();
  
  useFrame((state) => {
    if (modelRef.current) {
      // Rotate model based on mouse position
      modelRef.current.rotation.y = -Math.PI / 4 + state.mouse.x * 0.5;
      modelRef.current.rotation.x = state.mouse.y * 0.2;
    }
  });
  
  return (
    <group ref={modelRef}>
      <Victor scale={scale} position={position} />
    </group>
  );
}

export default Hero;