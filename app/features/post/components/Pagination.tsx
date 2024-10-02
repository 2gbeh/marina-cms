import React from "react";
import { CardFooter } from "~/components/_shadcn/ui/card";

interface IProps {
  total?: number;
}

const Pagination: React.FC<IProps> = ({ total = 0 }) => {
  console.log("🚀 ~ Pagination");
  return (
    <CardFooter>
      <div className="text-xs text-muted-foreground">
        Showing <strong>1-{total}</strong> of <strong>{total}</strong>{" "}
        records
      </div>
    </CardFooter>
  );
};

export default React.memo(Pagination);
