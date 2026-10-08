import SceneImage from "@/components/SceneImage/SceneImage";
import officeChairSvg from "@/assets/images/office/office-chair.svg";
import "./OfficeChair.css";

/** Office chair in front of the desk. */
export default function OfficeChair() {
  return <SceneImage src={officeChairSvg} className="office-chair" />;
}
