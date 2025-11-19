"use client";

import type { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  hover?: boolean;
  speed?: number;
  keepLastFrame?: boolean;
  ariaLabel?: string;
  style?: CSSProperties;
}

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false, suspense: true }
);

function PlayerWrapper({
  src,
  className,
  loop,
  autoplay,
  hover,
  speed,
  keepLastFrame,
  ariaLabel,
  style,
}: LottieAnimationProps) {
  return (
    <Player
      src={src}
      loop={loop}
      autoplay={autoplay}
      hover={hover}
      speed={speed}
      keepLastFrame={keepLastFrame}
      className={className}
      style={style}
      aria-label={ariaLabel}
    />
  );
}

export function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
  hover,
  speed,
  keepLastFrame,
  ariaLabel,
  style,
}: LottieAnimationProps) {
  return (
    <Suspense
      fallback={
        <div
          className={className}
          style={{
            ...style,
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.22), rgba(59,130,246,0.18))",
            filter: "blur(2px)",
          }}
          aria-hidden="true"
        />
      }
    >
      <PlayerWrapper
        src={src}
        className={className}
        loop={loop}
        autoplay={autoplay}
        hover={hover}
        speed={speed}
        keepLastFrame={keepLastFrame}
        ariaLabel={ariaLabel}
        style={style}
      />
    </Suspense>
  );
}


