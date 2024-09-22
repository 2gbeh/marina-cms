import React from "react";
import { Search } from "lucide-react";
import { Input } from "~/components/_shadcn/ui/input";

const SearchBar: React.FC = () => {
  console.log("🚀 ~ SearchBar");
  return (
    <form className="">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          name="q"
          placeholder="Search collectors or customers ( / )"
          className="appearance-none bg-background pl-8 shadow-none"
        />
      </div>
    </form>
  );
};

export default React.memo(SearchBar);
