import Image, { type StaticImageData } from "next/image";
import "./SceneImage.css";

type SceneImageProps = {
  src: StaticImageData;
  className?: string;
};

/** A decorative SVG piece of the illustration, positioned by the caller's className. */
export default function SceneImage({ src, className = "" }: SceneImageProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="eager"
      className={`scene-image ${className}`}
    />
  );
}
