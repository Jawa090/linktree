"use client";
import React, { useId, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    className,
    particleColor = "#FFFFFF",
  } = props;
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  const particles = [];
  const particleCount = particleDensity;

  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const animationDelay = Math.random() * 3;
    const animationDuration = Math.random() * 2 + 2;

    particles.push(
      <div
        key={i}
        className="absolute animate-sparkle pointer-events-none"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: particleColor,
          borderRadius: "50%",
          animationDelay: `${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
          opacity: Math.random() * 0.9 + 0.1,
          boxShadow: `0 0 ${size * 4}px ${particleColor}, 0 0 ${size * 8}px ${particleColor}40`,
          filter: 'blur(0.5px)',
        }}
      />
    );
  }

  return (
    <div className={cn("relative", className)} style={{ background }}>
      {init && particles}
    </div>
  );
};