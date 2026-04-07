"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ghostFrames = [
  "/Ghost1.png",
  "/Ghost2.png",
  "/Ghost3.png",
];

export default function AnimatedGhost() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % ghostFrames.length);
    }, 220);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={ghostFrames[frame]}
      alt="Animated ghost"
      width={64}
      height={64}
      className="pixelated"
    />
  );
}