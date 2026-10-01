"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";
import type { Group } from "three";

type PaymentBaubleProps = {
  position: [number, number, number];
  scale?: number;
  color: string;
  speed: number;
  phase: number;
};

export function PaymentBauble({
  position,
  scale = 1,
  color,
  speed,
  phase,
}: PaymentBaubleProps) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime() + phase;

    const targetX =
      position[0] + Math.sin(time * speed) * 0.08;

    const targetY =
      position[1] +
      Math.cos(time * speed * 0.8) * 0.08;

    const targetZ =
      position[2] +
      Math.sin(time * speed * 0.6) * 0.05;

    group.current.position.x = MathUtils.damp(
      group.current.position.x,
      targetX,
      2.5,
      delta,
    );

    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      targetY,
      2.5,
      delta,
    );

    group.current.position.z = MathUtils.damp(
      group.current.position.z,
      targetZ,
      2.5,
      delta,
    );

    group.current.rotation.x += delta * 0.08;
    group.current.rotation.y += delta * 0.12;
  });

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
    >
      {/* Ornament cap */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.18, 16]} />

        <meshStandardMaterial
          color="#d4af37"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Main bauble */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.95, 48, 48]} />

        <meshPhysicalMaterial
          color={color}
          metalness={0.18}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0.05}
          transmission={0.05}
          thickness={0.5}
        />
      </mesh>

      {/* Small highlight inside the cap */}
      <mesh position={[0, 1.05, 0]}>
        <torusGeometry args={[0.12, 0.035, 12, 24]} />

        <meshStandardMaterial
          color="#f5d76e"
          metalness={1}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}