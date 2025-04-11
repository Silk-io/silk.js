import React from "react";

function CircleIcon({
  icon,
  color = "#e5e7eb",
  hoverColor = "#91a5c2",
  size = 60,
  iconSize = 30,
  iconFilter,
  onClick,
}) {
  return (
    <div
      className="flex items-center justify-center rounded-full transition-colors duration-100"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = color)}
      onClick={onClick}
    >
      <img
        src={icon}
        alt="icon"
        style={{
          width: iconSize,
          height: iconSize,
          filter: iconFilter ? iconFilter : "none",
        }}
      />
    </div>
  );
}

export default CircleIcon;
