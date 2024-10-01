import React from "react";
import { ListFilter, File, PlusCircle } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/_shadcn/ui/dropdown-menu";

import AddPostModalForm from "./AddPostModalForm";

const PostTableFilters = () => {
  console.log("🚀 ~ PostTableFilters");
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-7 gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filter
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button size="sm" variant="outline" className="h-7 gap-1">
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Export
        </span>
      </Button>
      <AddPostModalForm>
        <Button size="sm" className="h-7 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Post
          </span>
        </Button>
      </AddPostModalForm>
    </>
  );
};

export default React.memo(PostTableFilters);
