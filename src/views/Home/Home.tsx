import SceneStage from "@/components/SceneStage/SceneStage";
import RoomBackdrop from "@/components/RoomBackdrop/RoomBackdrop";
import RoomWindow from "@/components/RoomWindow/RoomWindow";
import WallClock from "@/components/WallClock/WallClock";
import HangingPlant from "@/components/HangingPlant/HangingPlant";
import HomeOffice from "@/components/HomeOffice/HomeOffice";
import Sofa from "@/components/Sofa/Sofa";
import SideTable from "@/components/SideTable/SideTable";
import Rug from "@/components/Rug/Rug";
import Girl from "@/components/Girl/Girl";
import SpeechBubble from "@/components/SpeechBubble/SpeechBubble";
import "./Home.css";

/** Main screen — the illustrated room from Figma "Main Frame" (node 5:2). Order = stacking order. */
export default function Home() {
  return (
    <main className="home">
      <SceneStage>
        <RoomBackdrop />
        <RoomWindow />
        <WallClock />
        <HangingPlant />
        <HomeOffice />
        <Sofa />
        <SideTable />
        <Rug />
        <Girl />
        <SpeechBubble />
      </SceneStage>
    </main>
  );
}
