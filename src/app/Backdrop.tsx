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
  const draw = useCallback(
    (g) => {
      g.clear();
      for (let x = 0; x < width; x += res) {
        for (let y = 0; y < height; y += res) {
          g.beginFill(Math.abs(x * y * Math.tan(x + time)) % 0xffffff);
          g.drawRect(x, y, res, res);
          g.endFill();
        }
      }
    },
    [width, height, res, time]
  );

  return <Graphics draw={draw} />;
}
