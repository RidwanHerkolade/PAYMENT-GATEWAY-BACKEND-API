// "use client";

// import { PaymentBauble } from "@/components/three/PaymentBauble";

// const BAUBLES = [
//   {
//     position: [1.6, 0.8, 0] as [number, number, number],
//     scale: 0.72,
//     color: "#d6fff2",
//     speed: 0.65,
//     phase: 0,
//   },
//   {
//     position: [2.35, 0.25, -0.2] as [number, number, number],
//     scale: 0.9,
//     color: "#9fffe0",
//     speed: 0.5,
//     phase: 1.4,
//   },
//   {
//     position: [1.25, -0.35, 0.1] as [number, number, number],
//     scale: 0.62,
//     color: "#7de8c3",
//     speed: 0.72,
//     phase: 2.2,
//   },
//   {
//     position: [2.9, 0.95, 0.15] as [number, number, number],
//     scale: 0.58,
//     color: "#b9ffe9",
//     speed: 0.82,
//     phase: 3.1,
//   },
//   {
//     position: [3.05, -0.55, -0.15] as [number, number, number],
//     scale: 0.76,
//     color: "#67d9ae",
//     speed: 0.56,
//     phase: 4.2,
//   },
//   {
//     position: [1.95, -1.05, 0.1] as [number, number, number],
//     scale: 0.52,
//     color: "#d5fff4",
//     speed: 0.92,
//     phase: 5.1,
//   },
//   {
//     position: [3.45, 0.2, 0.3] as [number, number, number],
//     scale: 0.5,
//     color: "#b0fbe4",
//     speed: 0.68,
//     phase: 0.8,
//   },
//   {
//     position: [2.3, 1.45, -0.15] as [number, number, number],
//     scale: 0.48,
//     color: "#8ef3cd",
//     speed: 0.76,
//     phase: 2.9,
//   },
// ];

// export function PaymentBaubles() {
//   return (
//     <group position={[-0.4, 0, 0]}>
//       {BAUBLES.map((bauble, index) => (
//         <PaymentBauble
//           key={index}
//           {...bauble}
//         />
//       ))}
//     </group>
//   );
// }

"use client";

import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import * as THREE from "three";
import { useRef } from "react";
import { PaymentBauble } from "./PaymentBauble";

const baubles = [
  {
    size: 1.25,
    color: "#8df5bd",
    position: [-1.1, 0.6, 0.2] as [number, number, number],
    phase: 0,
    speed: 0.8,
    rotationSpeed: 0.25,
  },
  {
    size: 0.72,
    color: "#d8dee5",
    position: [0.7, 1.1, -0.8] as [number, number, number],
    phase: 1.4,
    speed: 1.1,
    rotationSpeed: -0.35,
  },
  {
    size: 0.5,
    color: "#6ee7a2",
    position: [1.5, -0.2, 0.4] as [number, number, number],
    phase: 2.8,
    speed: 1.3,
    rotationSpeed: 0.45,
  },
  {
    size: 0.9,
    color: "#adb5bd",
    position: [-0.9, -1.1, -0.7] as [number, number, number],
    phase: 1.8,
    speed: 0.65,
    rotationSpeed: -0.2,
  },
  {
    size: 0.38,
    color: "#b7f7d0",
    position: [0.1, -0.9, 0.8] as [number, number, number],
    phase: 3.3,
    speed: 1.45,
    rotationSpeed: 0.55,
  },
  {
    size: 0.58,
    color: "#f0f2f4",
    position: [1.25, 1.65, 0.6] as [number, number, number],
    phase: 4.1,
    speed: 0.9,
    rotationSpeed: -0.3,
  },
  {
    size: 0.3,
    color: "#7ee8ac",
    position: [-1.8, 1.35, -0.5] as [number, number, number],
    phase: 2.2,
    speed: 1.2,
    rotationSpeed: 0.35,
  },
];

export function PaymentBaubles() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!group.current) return;

    const targetRotationY = pointer.x * 0.12;
    const targetRotationX = pointer.y * -0.08;

    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      targetRotationY,
      3,
      delta
    );

    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      targetRotationX,
      3,
      delta
    );

    group.current.position.x = MathUtils.damp(
      group.current.position.x,
      pointer.x * 0.18,
      3,
      delta
    );

    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      pointer.y * 0.12,
      3,
      delta
    );
  });

  return (
    <group ref={group}>
      {baubles.map((bauble, index) => (
        <PaymentBauble
          key={index}
          size={bauble.size}
          color={bauble.color}
          position={bauble.position}
          phase={bauble.phase}
          speed={bauble.speed}
          rotationSpeed={bauble.rotationSpeed}
        />
      ))}
    </group>
  );
}