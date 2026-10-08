import type { CSSProperties } from "react";
import "./Rug.css";

const DIAMOND_COUNT = 6;

/** Patterned rug under the girl. Diamonds alternate orange and cream. */
export default function Rug() {
  return (
    <div className="rug" aria-hidden="true">
      <div className="rug__border rug__border--outer" />
      <div className="rug__border rug__border--inner" />
      {Array.from({ length: DIAMOND_COUNT }, (_, index) => (
        <div
          key={index}
          className={`rug__diamond ${index % 2 === 0 ? "rug__diamond--orange" : "rug__diamond--cream"}`}
          style={{ "--diamond-index": index } as CSSProperties}
        />
      ))}
    </div>
  );
}
