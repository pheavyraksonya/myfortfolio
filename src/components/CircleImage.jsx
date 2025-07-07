// src/components/CircleImage.jsx
import React from "react";

const CircleImage = ({ src, alt = "profile", size = 150 }) => {
  return (
    <div
      className={`rounded-full overflow-hidden border-4 border-purple-500 shadow-lg`}
      style={{ width: size, height: size }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default CircleImage;
