import React from "react";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";

interface IProps {
  variant: "add";
  value: string;
  handleClick: () => void;
}

const CTAButton: React.FC<IProps> = ({ variant, value, handleClick }) => {
  console.log("🚀 ~ CTAButton");
  return (
    <Button size="sm" onClick={handleClick} className="h-7 gap-1">
      {{ add: <PlusCircleIcon className="h-3.5 w-3.5" /> }[variant]}
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        {value}
      </span>
    </Button>
  );
};

export default React.memo(CTAButton);
