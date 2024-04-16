"use client";

import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import { Buffer } from "@/components/loaders/buffer";
import { useBreadcrumbTrail } from "./useBreadcrumbTrail";

export const BreadcrumbTrail = () => {
  const {
    pathnames,
    isLastIndex,
    stripHyphen,
    getCurrentPath,
    reload,
    reloading,
  } = useBreadcrumbTrail();
  // console.log("🚀 ~ BreadcrumbTrail ~ pathnames:", pathnames)
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.map((e, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem className="capitalize">
              {isLastIndex(i) ? (
                <BreadcrumbPage
                  className="cursor-default flex items-center gap-1.5"
                  title="Refresh (F5)"
                  onClick={reload}
                >
                  
                  {stripHyphen(e)}
                  {reloading && <Buffer fill="#555" size={18} />}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={getCurrentPath(i)}>{stripHyphen(e)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {/*  */}
            {!isLastIndex(i) && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
