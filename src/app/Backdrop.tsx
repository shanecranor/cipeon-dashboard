"use client";
import React, { useCallback } from "react";
import { Graphics } from "@pixi/react";

export function Backdrop({
  width,
  height,
  res,
  time,
}: {
  width: number;
  height: number;
  res: number;
  time: number;
}) {
  const tempTime = time / 10000;
  const draw = useCallback(
    (g) => {
      g.clear();
      for (let x = 0; x < width; x += res) {
        for (let y = 0; y < height; y += res) {
          g.beginFill(
            // The original
            // Math.abs((x % 100) * y * Math.tan(x * 0.1 + tempTime)) % 0xffffff
            // Mountains
            Math.abs((x % 100) * y * Math.tan(x * 1000 + tempTime)) % 0xffffff
            // DVD Waveform (try changing timestep above)
            // Math.abs((x % 101) * y * Math.tan(x * (Math.sin(tempTime/100000) * 1000)  + tempTime)) % 0xffffff
            // scanner
            // Math.abs((x % 101) * (1/(y-5)) * 100 * Math.tan(x * (Math.sin(tempTime/100000) * 1000)  + tempTime)) % 0xffffff
            // the spine
            // Math.abs((x % 101) * (1/(y-500.1)) * 100 * Math.tan(x * (Math.sin(tempTime/100000) * 1000)  + tempTime)) % 0xffffff
            // diagonal
            // Math.abs((x % 101) * (1/(y-500.1 + ((0.5 * x) - 500))) * 100 * Math.tan(x * (Math.sin(tempTime/100000) * 1000)  + tempTime)) % 0xffffff
          );
          g.drawRect(x, y, res, res);
          g.endFill();
        }
      }
    },
    [width, height, res, tempTime]
  );

  return <Graphics draw={draw} />;
}
