import { useRef } from "react";
import "./ShineButton.css";

export const ShineButton = ({ children = "Click", onClick }) => {
  const btnRef = useRef(null);
  const shineRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    shineRef.current.style.left = `${e.clientX - rect.left}px`;
    shineRef.current.style.top = `${e.clientY - rect.top}px`;
  };

  return (
    <button
      ref={btnRef}
      className="shine-btn"
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <span ref={shineRef} className="shine-btn__radial" />
      <span className="shine-btn__sweep" />
      <span className="shine-btn__label">{children}</span>
    </button>
  );
};

export default function App() {
  return (
    <div className="page">
      <ShineButton onClick={() => alert("clicked!")}>
        Click me
      </ShineButton>
    </div>
  );
}