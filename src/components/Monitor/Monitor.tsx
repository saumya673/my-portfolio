import "./Monitor.css";

/** Desk monitor showing "Projects →". No prototype interaction is wired to it yet. */
export default function Monitor() {
  return (
    <div className="monitor">
      <div className="monitor__screen" aria-hidden="true" />
      <div className="monitor__inner" aria-hidden="true" />
      <p className="monitor__text">Projects →</p>
      <div className="monitor__stand" aria-hidden="true" />
      <div className="monitor__base" aria-hidden="true" />
    </div>
  );
}
