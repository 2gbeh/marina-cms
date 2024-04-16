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
import { useBreadcrumbTrail } from "./useBreadcrumbTrail";

export const BreadcrumbTrail = () => {
  const { pathnames, isLastIndex, stripHyphen, getCurrentPath, reload, reloading } =
    useBreadcrumbTrail();
    // console.log("🚀 ~ BreadcrumbTrail ~ pathnames:", pathnames)
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.map((e, i) => (
          <React.Fragment key={i}>
            <BreadcrumbItem className="capitalize">
              {isLastIndex(i) ? (
                <BreadcrumbPage
                  className="cursor-pointer"
                  title="Refresh (F5)"
                  onClick={reload}
                >
                  {stripHyphen(e)}
                  {reloading ? "..." : ""}
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
