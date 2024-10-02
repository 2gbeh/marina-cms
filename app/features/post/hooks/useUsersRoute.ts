import { useEffect } from "react";
import { useLoaderData, useSearchParams } from "@remix-run/react";

import { IPostLoader } from "../utils/post.interface";
import { usePostContext } from "../hooks/usePostContext";

export function useUsersRoute() {
  const { posts, users } = useLoaderData<IPostLoader>();
  const [_, setSearchParams] = useSearchParams();
  const postContext = usePostContext();
  
  function handleFilter(userId: unknown) {
    const queryParams = new URLSearchParams();
    queryParams.set("filter", userId as string);
    //
    setSearchParams(queryParams, {
      preventScrollReset: true,
    });
    postContext.setUserId(userId as number);
  }

  //
  useEffect(() => {
    postContext.constructor({ posts, users });
  }, [posts, users]);

  return {
    posts,
    users,
    postContext,
    handleFilter,
  };
}
