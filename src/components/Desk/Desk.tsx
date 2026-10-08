import "./Desk.css";

/** Desk surface, legs and crossbar. */
export default function Desk() {
  return (
    <div className="desk" aria-hidden="true">
      <div className="desk__surface" />
      <div className="desk__leg desk__leg--left" />
      <div className="desk__leg desk__leg--right" />
      <div className="desk__crossbar" />
    </div>
  );
}
