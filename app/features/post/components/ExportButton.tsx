import React from "react";
import { FileIcon } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";
import { Badge } from "~/components/_shadcn/ui/badge";

import { TPosts } from "../utils/post.interface";
import { usePostContext } from "../hooks/usePostContext";

const ExportButton: React.FC<{ data: TPosts }> = ({ data }) => {
  const { totalPosts } = usePostContext();
  const handleExport = () => {
    const config = {
      fileName: `marina-cms-post-${Date.now()}`,
      sheet: "Sheet1",
      data,
    };
    //
    console.log("🚀 ~ handleExport ~ config:", config);
  };
  console.log("🚀 ~ ExportButton");
  // renders
  return (
    <Button
      size="sm"
      variant="outline"
      className="h-7 gap-1"
      onClick={handleExport}
    >
      <FileIcon className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Export
        <Badge variant="destructive" className="dim-4 ml-2">
          {totalPosts}
        </Badge>
      </span>
    </Button>
  );
};

export default React.memo(ExportButton);
