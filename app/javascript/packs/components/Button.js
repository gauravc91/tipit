import React from "react";

const Button = ({ style, label, pressed, onClick }) => {
  return (
    <button
      style={{
        ...style,
        opacity: `${pressed ? 0.5 : 1}`
      }}
      type="button"
      className="btn btn-default"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
