"use client";

import SceneImage from "@/components/SceneImage/SceneImage";
import Laptop from "@/components/Laptop/Laptop";
import { useHoverToggle } from "@/hooks/useHoverToggle";
import faceSvg from "@/assets/images/girl/face.svg";
import hairTopSvg from "@/assets/images/girl/hair-top.svg";
import hairLeftSvg from "@/assets/images/girl/hair-left.svg";
import hairRightSvg from "@/assets/images/girl/hair-right.svg";
import eyeSvg from "@/assets/images/girl/eye.svg";
import smileSvg from "@/assets/images/girl/smile.svg";
import neckSvg from "@/assets/images/girl/neck.svg";
import dressSvg from "@/assets/images/girl/dress.svg";
import crossedLegLeftSvg from "@/assets/images/girl/crossed-leg-left.svg";
import crossedLegRightSvg from "@/assets/images/girl/crossed-leg-right.svg";
import upperArmSvg from "@/assets/images/girl/upper-arm.svg";
import handSvg from "@/assets/images/girl/hand.svg";
import waveLine1Svg from "@/assets/images/girl/wave-line-1.svg";
import waveLine2Svg from "@/assets/images/girl/wave-line-2.svg";
import waveLine3Svg from "@/assets/images/girl/wave-line-3.svg";
import restingArmSvg from "@/assets/images/girl/resting-arm.svg";
import "./Girl.css";

/** Saumya sitting cross-legged with her laptop. Hovering her plays the wave. */
export default function Girl() {
  const { hoverProps } = useHoverToggle();

  return (
    <div className="girl" {...hoverProps}>
      <SceneImage src={faceSvg} className="girl__face" />
      <SceneImage src={hairTopSvg} className="girl__hair-top" />
      <SceneImage src={hairLeftSvg} className="girl__hair-left" />
      <SceneImage src={hairRightSvg} className="girl__hair-right" />
      <SceneImage src={eyeSvg} className="girl__eye girl__eye--left" />
      <SceneImage src={eyeSvg} className="girl__eye girl__eye--right" />
      <SceneImage src={smileSvg} className="girl__smile" />
      <SceneImage src={neckSvg} className="girl__neck" />
      <SceneImage src={dressSvg} className="girl__dress" />
      <SceneImage src={crossedLegLeftSvg} className="girl__leg girl__leg--left" />
      <SceneImage src={crossedLegRightSvg} className="girl__leg girl__leg--right" />
      <SceneImage src={upperArmSvg} className="girl__upper-arm" />
      <div className="girl__forearm" aria-hidden="true" />
      <SceneImage src={handSvg} className="girl__hand" />
      <SceneImage src={waveLine1Svg} className="girl__wave-line girl__wave-line--1" />
      <SceneImage src={waveLine2Svg} className="girl__wave-line girl__wave-line--2" />
      <SceneImage src={waveLine3Svg} className="girl__wave-line girl__wave-line--3" />
      <SceneImage src={restingArmSvg} className="girl__resting-arm" />
      <Laptop className="girl__laptop" />
    </div>
  );
}
