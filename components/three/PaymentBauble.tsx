"use client";

import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import * as THREE from "three";
import { useRef } from "react";

type PaymentBaubleProps = {
  size: number;
  color: string;
  position: [number, number, number];
  phase: number;
  speed: number;
  rotationSpeed: number;
};

export function PaymentBauble({
  size,
  color,
  position,
  phase,
  speed,
  rotationSpeed,
}: PaymentBaubleProps) {
  const group = useRef<THREE.Group>(null);
  const elapsed = useRef(0);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;

    elapsed.current += delta;

    const time = elapsed.current;

    // Gentle floating motion
    const floatY = Math.sin(time * speed + phase) * 0.16;
    const floatX = Math.cos(time * speed * 0.7 + phase) * 0.08;

    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      position[1] + floatY,
      4,
      delta,
    );

    group.current.position.x = MathUtils.damp(
      group.current.position.x,
      position[0] + floatX,
      4,
      delta,
    );

    // Small continuous rotation
    group.current.rotation.y += delta * rotationSpeed;
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.12,
      3,
      delta,
    );

    group.current.rotation.z = MathUtils.damp(
      group.current.rotation.z,
      pointer.x * 0.08,
      3,
      delta,
    );
  });

  return (
    <group ref={group} position={position}>
      {/* Main glass/chrome body */}
      <mesh scale={size}>
        <sphereGeometry args={[1, 48, 48]} />

        <meshPhysicalMaterial
          color={color}
          metalness={0.4}
          roughness={0.12}
          transmission={0.3}
          thickness={0.8}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>

      {/* Metal cap */}
      <mesh position={[0, size * 0.92, 0]}>
        <cylinderGeometry args={[size * 0.2, size * 0.24, size * 0.18, 24]} />

        <meshStandardMaterial
          color="#9ca3af"
          metalness={0.9}
          roughness={0.18}
        />
      </mesh>

      {/* Small ring underneath the cap */}
      <mesh position={[0, size * 0.81, 0]}>
        <torusGeometry args={[size * 0.18, size * 0.035, 12, 32]} />

        <meshStandardMaterial color="#6b7280" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}
