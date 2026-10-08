import "./RoomBackdrop.css";

/** Wall, baseboard, floor and floor grain — Figma group "01 Wall". */
export default function RoomBackdrop() {
  return (
    <div className="room-backdrop" aria-hidden="true">
      <div className="room-backdrop__wall" />
      <div className="room-backdrop__baseboard" />
      <div className="room-backdrop__floor" />
      <div className="room-backdrop__floor-grain" />
    </div>
  );
}
