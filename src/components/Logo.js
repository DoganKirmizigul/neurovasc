import React from "react";

function Logo() {
  return (
    <div className="logo-container">
      <svg
        width="200"
        height="50"
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="35"
          fill="#e63946"
          fontFamily="Arial"
          fontSize="32"
          fontWeight="bold"
        >
          Neurovasc
        </text>
      </svg>
    </div>
  );
}

export default Logo;
