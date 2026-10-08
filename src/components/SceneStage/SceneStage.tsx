"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import "./SceneStage.css";

const SCENE_WIDTH = 1440;
const SCENE_HEIGHT = 1024;

type SceneStageProps = {
  children: ReactNode;
};

/**
 * Hosts the 1440 × 1024 Figma artboard and scales it uniformly so the whole
 * room is always visible (desktop, tablet and phone alike).
 */
export default function SceneStage({ children }: SceneStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateScale = () => {
      const { width, height } = stage.getBoundingClientRect();
      setScale(Math.min(width / SCENE_WIDTH, height / SCENE_HEIGHT));
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={stageRef}
      className="scene-stage"
      data-ready={scale === null ? undefined : ""}
      style={{ "--scene-scale": scale ?? 1 } as CSSProperties}
    >
      <div className="scene-stage__viewport">
        <div className="scene-stage__scene">{children}</div>
      </div>
    </div>
  );
}
