import StickyNote from "@/components/StickyNote/StickyNote";
import "./Pinboard.css";

/** Cork pinboard holding the About / Skills / Contact sticky notes. */
export default function Pinboard() {
  return (
    <div className="pinboard">
      <div className="pinboard__surface" aria-hidden="true" />
      <StickyNote label="About" color="orange" pin="dark" className="pinboard__note pinboard__note--about" />
      <StickyNote label="Skills" color="cream" pin="orange" className="pinboard__note pinboard__note--skills" />
      <StickyNote label="Contact" color="sky" pin="dark" className="pinboard__note pinboard__note--contact" />
    </div>
  );
}
