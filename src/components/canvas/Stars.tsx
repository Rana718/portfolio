import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
//@ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";
import { Points as ThreePoints } from "three";

interface StarsProps {
  [key: string]: any;
}

const Stars = (props: StarsProps) => {
  const ref = useRef<ThreePoints>(null);
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
    try {
      const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
      // Validate positions
      if (positions.some(isNaN)) {
        console.error("Invalid sphere positions detected");
        return;
      }
      setSphere(positions);
    } catch (error) {
      console.error("Error generating sphere:", error);
    }
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 3;
      ref.current.rotation.y -= delta / 3;
    }
  });

  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default function StarsCanvas() {
  return (
    <div className='w-full h-full absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};