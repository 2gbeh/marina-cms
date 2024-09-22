import React from "react";

interface IProps {
  width?: number;
}

const TheLogo: React.FC<IProps> = ({ width = 32 }) => {
  console.log("🚀 ~ TheLogo");
  return (
    <img
      src={width > 48 ? "/logo.png" : "/favicon.ico"}
      width={width}
      alt=""
      style={{ display: "inline-block" }}
    />
  );
};

export default React.memo(TheLogo);
