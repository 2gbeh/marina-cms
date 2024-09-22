import React from "react";

interface IProps {
  title: string;
  subtitle?: string;
}

const AuthHeading: React.FC<IProps> = ({ title, subtitle }) => {
  console.log("🚀 ~ AuthHeading");
  return (
    <header className="mb-5 grid gap-2 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
    </header>
  );
};

export default React.memo(AuthHeading);
