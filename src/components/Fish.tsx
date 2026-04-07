"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fishFrames = [
  "/Fish1.png",
  "/Fish2.png",
  "/Fish3.png",
  "/Fish4.png",
];

export default function Fish() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % fishFrames.length);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={fishFrames[frame]}
      alt="Animated fish"
      width={64}
      height={64}
      className="pixelated"
    />
  );
}