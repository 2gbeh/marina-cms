import React from "react";
import { TabsList, TabsTrigger } from "~/components/_shadcn/ui/tabs";

interface IProps {
  tabs: Record<string, string>;
}

const TabButtons: React.FC<IProps> = ({ tabs }) => {
  console.log("🚀 ~ TabButtons");
  return (
    <TabsList>
      {Object.entries(tabs).map(([value, label]) => (
        <TabsTrigger key={value} value={value}>
          {label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default React.memo(TabButtons);
