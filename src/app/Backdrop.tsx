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
            Math.abs((x % 100) * y * Math.tan(x * 0.1 + tempTime)) % 0xffffff
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
