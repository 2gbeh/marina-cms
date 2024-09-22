import React from "react";
import {
  FcAssistant,
  FcContacts,
  FcDonate,
  FcLowPriority,
} from "react-icons/fc";
import DashboardCard from "~/components/cards/DashboardCard";
// ///////////////////////////////////////////////
import { TDashboardLoader_Summary } from "../core/dashboard.interface";
import { DashboardPipe } from "../core/dashboard.pipe";

interface IProps {
  data: TDashboardLoader_Summary;
}

const DashboardCards: React.FC<IProps> = ({ data }) => {
  console.log("🚀 ~ DashboardCards");
  const iconProps = { className: "h-4 w-4 text-muted-foreground" };
  // renders
  return Object.entries(data).map(([key, item], i) => {
    const pipe = DashboardPipe.transform(item, key)!;
    return (
      <DashboardCard key={key} {...pipe} positive={item.rate > 0}>
        {
          {
            collectors: <FcAssistant {...iconProps} />,
            customers: <FcContacts {...iconProps} />,
            deposits: <FcDonate {...iconProps} />,
            withdrawals: <FcLowPriority {...iconProps} />,
          }[key]
        }
      </DashboardCard>
    );
  });
};

export default React.memo(DashboardCards);
