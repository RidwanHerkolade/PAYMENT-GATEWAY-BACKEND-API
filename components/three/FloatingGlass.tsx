"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils } from "three";
import type { Group } from "three";
import { useRef } from "react";

export function FloatingGlass() {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current) return;

    const time = state.clock.getElapsedTime();

    // Mouse controls the object's position.
    const targetX = 1.35 + pointer.x * 0.35;
    const targetY =
      pointer.y * 0.2 + Math.sin(time * 1.2) * 0.08;

    // Smooth movement.
    group.current.position.x = MathUtils.damp(
      group.current.position.x,
      targetX,
      4,
      delta,
    );

    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      targetY,
      4,
      delta,
    );

    // Slow continuous rotation + mouse reaction.
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.3 + Math.sin(time * 0.4) * 0.05,
      2.5,
      delta,
    );

    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      time * 0.18 + pointer.x * 0.5,
      2.5,
      delta,
    );

    group.current.rotation.z = MathUtils.damp(
      group.current.rotation.z,
      pointer.x * -0.15,
      2.5,
      delta,
    );

    // Very subtle floating scale animation.
    const targetScale =
      1 + Math.sin(time * 0.8) * 0.015;

    const scale = MathUtils.damp(
      group.current.scale.x,
      targetScale,
      3,
      delta,
    );

    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group} position={[1.35, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.5, 4]} />

        <meshPhysicalMaterial
          color="#dff8ff"
          transmission={1}
          thickness={1.2}
          roughness={0.08}
          ior={1.45}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>
    </group>
  );
}