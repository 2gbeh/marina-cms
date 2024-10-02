import React from "react";
import { ListFilterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/_shadcn/ui/dropdown-menu";
import { Button } from "~/components/_shadcn/ui/button";

import { TUsers } from "../utils/post.interface";

interface IProps {
  options: TUsers;
  selected: number;
  handleChange: (id: number) => void;
}

const FilterButton: React.FC<IProps> = ({
  options,
  selected,
  handleChange,
}) => {
  console.log("🚀 ~ FilterButton");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-7 gap-1">
          <ListFilterIcon className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Filter
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Posted by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map(({ id, username }) => (
          <DropdownMenuCheckboxItem
            key={id}
            checked={selected == id}
            onClick={() => handleChange(id)}
          >
            {username}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default React.memo(FilterButton);
