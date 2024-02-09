import React from "react";

export default function Description(props) {
  const { children, className } = props;
  return (
    <div className={`text-[#c3cad5] tracking-wide ${className}`}>
      {children}
    </div>
  );
}
