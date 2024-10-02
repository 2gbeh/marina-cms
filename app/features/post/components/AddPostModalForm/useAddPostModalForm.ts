import { useFetcher } from "@remix-run/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { M } from "~/constants/MOCK";
import { TPost } from "../../utils/post.interface";

export function useAddPostModalForm(
  post: null | TPost,
  onClose: Dispatch<SetStateAction<boolean>>,
) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const initialValues = M.posts.formData
    ? {
        author: "3",
        title: "Test title 1",
        content: "Test content 1",
      }
    : {
        author: "",
        title: "",
        content: "",
      };

  useEffect(() => {
    // if (post?.id && fetcher.state === "idle") {
      // onClose(false);
      console.log("🚀 ~ useEffect ~ post:", fetcher.state, post);
    // }
  }, [fetcher.state]);

  //
  return { fetcher, isSubmitting, initialValues };
}
