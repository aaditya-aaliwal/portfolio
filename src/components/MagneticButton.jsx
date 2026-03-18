import { useRef } from "react";

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-full sm:w-auto flex justify-center transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default MagneticButton;