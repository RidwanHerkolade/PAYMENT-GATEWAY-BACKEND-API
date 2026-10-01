"use client";

import { PaymentBauble } from "@/components/three/PaymentBauble";

const BAUBLES = [
  {
    position: [1.6, 0.8, 0] as [number, number, number],
    scale: 0.72,
    color: "#d6fff2",
    speed: 0.65,
    phase: 0,
  },
  {
    position: [2.35, 0.25, -0.2] as [number, number, number],
    scale: 0.9,
    color: "#9fffe0",
    speed: 0.5,
    phase: 1.4,
  },
  {
    position: [1.25, -0.35, 0.1] as [number, number, number],
    scale: 0.62,
    color: "#7de8c3",
    speed: 0.72,
    phase: 2.2,
  },
  {
    position: [2.9, 0.95, 0.15] as [number, number, number],
    scale: 0.58,
    color: "#b9ffe9",
    speed: 0.82,
    phase: 3.1,
  },
  {
    position: [3.05, -0.55, -0.15] as [number, number, number],
    scale: 0.76,
    color: "#67d9ae",
    speed: 0.56,
    phase: 4.2,
  },
  {
    position: [1.95, -1.05, 0.1] as [number, number, number],
    scale: 0.52,
    color: "#d5fff4",
    speed: 0.92,
    phase: 5.1,
  },
  {
    position: [3.45, 0.2, 0.3] as [number, number, number],
    scale: 0.5,
    color: "#b0fbe4",
    speed: 0.68,
    phase: 0.8,
  },
  {
    position: [2.3, 1.45, -0.15] as [number, number, number],
    scale: 0.48,
    color: "#8ef3cd",
    speed: 0.76,
    phase: 2.9,
  },
];

export function PaymentBaubles() {
  return (
    <group position={[-0.4, 0, 0]}>
      {BAUBLES.map((bauble, index) => (
        <PaymentBauble
          key={index}
          {...bauble}
        />
      ))}
    </group>
  );
}