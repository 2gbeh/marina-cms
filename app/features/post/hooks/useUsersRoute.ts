import { useRef, useState } from "react";
import {
  useActionData,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";

import { IPostLoader, TPost } from "../utils/post.interface";

export function useUsersRoute() {
  const loaderData = useLoaderData<IPostLoader>();
  const actionData = useActionData<{ post: TPost }>();
  const [_, setSearchParams] = useSearchParams();

  const [toBeFiltered, setToBeFiltered] = useState(-1);
  const [openModal, setOpenModal] = useState(false);

  const post = actionData?.post || null;
  const posts = loaderData?.posts || [];
  const totalPosts = loaderData?.posts?.length || 0;
  const users = loaderData?.users || [];

  const toggleOpenModal = () => setOpenModal((prev) => !prev);

  function handleFilter(userId: unknown) {
    const queryParams = new URLSearchParams();
    queryParams.set("filter", userId as string);
    //
    setSearchParams(queryParams, {
      preventScrollReset: true,
    });
    setToBeFiltered(userId as number);
  }

  function handleExport() {
    const config = {
      fileName: `marina-cms-post-${Date.now()}`,
      sheet: "Sheet1",
      data: posts,
    };
    // 
    console.log("🚀 ~ handleExport ~ config:", config)    
  }

  //
  return {
    post,
    posts,
    totalPosts,
    users,
    handleFilter,
    toBeFiltered,
    handleExport,
    openModal,
    setOpenModal,
    toggleOpenModal,
  };
}
