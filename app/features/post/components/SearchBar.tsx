import React from "react";
import { Search } from "lucide-react";
import { Input } from "~/components/_shadcn/ui/input";

const SearchBar = () => {
  console.log("🚀 ~ SearchBar");
  return (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search ( / )"
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
      />
    </div>
  );
};

export default React.memo(SearchBar);
