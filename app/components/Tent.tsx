import React, { PropsWithChildren } from "react";
import TheLogo from "./TheLogo";

interface IProps extends PropsWithChildren {
  status: number | string;
  statusText: string;
}

const Tent: React.FC<IProps> = ({ children, status, statusText }) => {
  console.log("🚀 ~ Tent");
  return (
    <main className="flex-centered gap-1">
      <figure className="flex-col-center">
        <TheLogo width={48} />
        <figcaption className="mt-5 flex gap-2 text-2xl">
          <h1 className="font-bold">{status}</h1> |
          <h2 className="font-medium">{statusText}</h2>
        </figcaption>
      </figure>

      {/* CHILDREN */}
      {children}
    </main>
  );
};

export default React.memo(Tent);
