import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const hoverOn = () => setHover(true);
    const hoverOff = () => setHover(false);

    document.addEventListener("mousemove", move);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className={`cursor ${hover ? "cursor-hover" : ""}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default Cursor;