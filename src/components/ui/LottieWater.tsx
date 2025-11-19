"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

interface LottieWaterProps {
  animationPath?: string;
  className?: string;
}

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false, suspense: true }
);

function LottiePlayer({ animationPath, className }: LottieWaterProps) {
  return (
    <Player
      autoplay
      loop
      src={animationPath ?? "/lottie/water-pulse.json"}
      className={className}
      style={{ filter: "drop-shadow(0px 20px 40px rgba(14, 165, 233, 0.45))" }}
    />
  );
}

export function LottieWater({ animationPath = "/lottie/water-pulse.json", className }: LottieWaterProps) {
  return (
    <Suspense
      fallback={
        <div
          className={className}
          style={{
            filter: "drop-shadow(0px 12px 24px rgba(14, 165, 233, 0.25))",
            background: "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(14,165,233,0.25))",
            borderRadius: "9999px",
          }}
        />
      }
    >
      <LottiePlayer animationPath={animationPath} className={className} />
    </Suspense>
  );
}
