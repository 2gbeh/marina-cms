import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { zzz } from "@/utils";

export function useBreadcrumbTrail() {
  const [reloading, setReloading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pathnames = pathname.split("/").filter((e) => e.length > 0);
  //
  const isLastIndex = (i: number) => i === pathnames.length - 1;
  const stripHyphen = (e: string) => e.replaceAll("-", " ");
  function getCurrentPath(i: number) {
    let path = "";
    for (let j = 0; j <= i; j++) {
      path += "/" + pathnames[j];
    }
    // console.log(pathnames, i, path);
    return path;
  }
  async function reload() {
    setReloading(true);
    await zzz();
    router.refresh();
    setReloading(false);
  }
  //
  return { pathnames, isLastIndex, stripHyphen, getCurrentPath, reload, reloading };
}
