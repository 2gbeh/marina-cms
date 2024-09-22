import React from "react";

interface IProps {
  title: string;
}

const Heading: React.FC<IProps> = ({ title }) => {
  console.log("🚀 ~ Heading");
  return (
    <section className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
    </section>
  );
};

export default React.memo(Heading);
