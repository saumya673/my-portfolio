import SceneImage from "@/components/SceneImage/SceneImage";
import sofaSvg from "@/assets/images/sofa/sofa.svg";
import "./Sofa.css";

/** Sofa with two cushions. */
export default function Sofa() {
  return <SceneImage src={sofaSvg} className="sofa" />;
}
