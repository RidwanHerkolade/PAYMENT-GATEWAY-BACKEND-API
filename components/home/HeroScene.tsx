"use client";

import { Canvas } from "@react-three/fiber";
import { PaymentBaubles } from "@/components/three/PaymentBaubles";

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 42,
        }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[4, 5, 6]}
          intensity={3}
        />

        <pointLight
          position={[-2, 1, 3]}
          intensity={12}
          distance={12}
        />

        <pointLight
          position={[4, -2, 2]}
          intensity={8}
          distance={10}
        />

        <PaymentBaubles />
      </Canvas>
    </div>
  );
}