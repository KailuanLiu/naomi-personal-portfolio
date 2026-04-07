"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const witchFrames = [
  "/Witch1.png",
  "/Witch2.png",
  "/Witch3.png",
];

export default function AnimatedWitch() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % witchFrames.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={witchFrames[frame]}
      alt="Animated witch"
      width={64}
      height={64}
      className="pixelated"
    />
  );
}