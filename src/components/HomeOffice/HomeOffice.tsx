import Desk from "@/components/Desk/Desk";
import Monitor from "@/components/Monitor/Monitor";
import DeskLamp from "@/components/DeskLamp/DeskLamp";
import OfficeChair from "@/components/OfficeChair/OfficeChair";
import Pinboard from "@/components/Pinboard/Pinboard";
import CoffeeMug from "@/components/CoffeeMug/CoffeeMug";
import "./HomeOffice.css";

/**
 * Figma group "02 Office" (x 940, y 300). Children are positioned in this
 * group's coordinate space, in the same stacking order as the Figma layers.
 */
export default function HomeOffice() {
  return (
    <div className="home-office">
      <Desk />
      <Monitor />
      <DeskLamp />
      <OfficeChair />
      <Pinboard />
      <CoffeeMug variant="desk" className="home-office__mug" />
    </div>
  );
}
