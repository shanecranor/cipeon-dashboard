"use client";
import { Backdrop } from "./Backdrop";
import { Stage, Container, Sprite, Text } from "@pixi/react";
import { useState, useEffect, useRef } from "react";
export default function Pixi() {
  const [dim, setDim] = useState({
    width: 1000,
    height: 1000,
  });
  const [unixTimestamp, setUnixTimestamp] = useState(
    Math.floor(Date.now() / 1000)
  );
  const [currentTime, setCurrentTime] = useState(new Date());

  const requestRef = useRef();
  const updateTimestamp = () => {
    setUnixTimestamp(Date.now());
    requestRef.current = requestAnimationFrame(updateTimestamp);
  };
  useEffect(() => {
    setDim({ width: window.innerWidth, height: window.innerHeight });
    requestRef.current = requestAnimationFrame(updateTimestamp);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  return (
    <Stage
      className="c-pixi-bg"
      width={dim.width}
      height={dim.height}
      options={{ background: 0x1099bb }}
    >
      <Backdrop
        width={dim.width}
        height={dim.height}
        res={20}
        time={unixTimestamp}
      />
    </Stage>
  );
}
