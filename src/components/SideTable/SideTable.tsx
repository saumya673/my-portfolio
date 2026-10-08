import SceneImage from "@/components/SceneImage/SceneImage";
import CoffeeMug from "@/components/CoffeeMug/CoffeeMug";
import sideTableTopSvg from "@/assets/images/side-table/side-table-top.svg";
import sideTableBaseSvg from "@/assets/images/side-table/side-table-base.svg";
import "./SideTable.css";

/** Round side table next to the sofa, with a mug on top. */
export default function SideTable() {
  return (
    <div className="side-table">
      <SceneImage src={sideTableTopSvg} className="side-table__top" />
      <div className="side-table__stem" aria-hidden="true" />
      <SceneImage src={sideTableBaseSvg} className="side-table__base" />
      <CoffeeMug variant="side-table" className="side-table__mug" />
    </div>
  );
}
