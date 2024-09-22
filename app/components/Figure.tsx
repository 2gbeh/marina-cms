import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/_shadcn/ui/avatar";
import { StringHelper } from "~/utils/helpers/common/string.helper";

interface IProps {
  src?: string;
  title: string;
  subtitle?: string;
}

const Figure: React.FC<IProps> = ({ src, title, subtitle }) => {
  console.log("🚀 ~ Figure");
  return (
    <figure className="flex items-center gap-4">
      <Avatar className="hidden h-9 w-9 sm:flex">
        <AvatarImage src={src} alt="" />
        <AvatarFallback>{StringHelper.initials(title)}</AvatarFallback>
      </Avatar>
      <figcaption>
        <div className="font-medium">{title}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {subtitle}
        </div>
      </figcaption>
    </figure>
  );
};

export default React.memo(Figure);
