"use client";

import SceneImage from "@/components/SceneImage/SceneImage";
import { useHoverToggle } from "@/hooks/useHoverToggle";
import deskHandleSvg from "@/assets/images/office/desk-mug-handle.svg";
import deskSteamSvg from "@/assets/images/office/desk-mug-steam.svg";
import sideTableHandleSvg from "@/assets/images/side-table/side-mug-handle.svg";
import sideTableSteamSvg from "@/assets/images/side-table/side-mug-steam.svg";
import "./CoffeeMug.css";

type CoffeeMugProps = {
  variant: "desk" | "side-table";
  className?: string;
};

const MUG_IMAGES = {
  desk: { handle: deskHandleSvg, steam: deskSteamSvg },
  "side-table": { handle: sideTableHandleSvg, steam: sideTableSteamSvg },
};

/** Steaming mug. Hovering it makes the steam rise and fade. */
export default function CoffeeMug({ variant, className = "" }: CoffeeMugProps) {
  const { hoverProps } = useHoverToggle();
  const images = MUG_IMAGES[variant];

  return (
    <div className={`coffee-mug coffee-mug--${variant} ${className}`} aria-hidden="true" {...hoverProps}>
      <div className="coffee-mug__body" />
      <div className="coffee-mug__rim" />
      <SceneImage src={images.handle} className="coffee-mug__handle" />
      <SceneImage src={images.steam} className="coffee-mug__steam" />
    </div>
  );
}
