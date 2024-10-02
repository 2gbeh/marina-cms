import { useEffect, useMemo, useState } from "react";
import { useFetcher } from "@remix-run/react";
import { ROUTE } from "~/constants/ROUTE";

import { TPost } from "../../utils/post.interface";
import { POST } from "../../utils/post.constant";
import { usePostContext } from "../../hooks/usePostContext";

export function useAddPostModalForm() {
  const fetcher = useFetcher();
  const postContext = usePostContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [initialValues, setInitialValues] = useState(POST.initialValues);

  useEffect(() => {
    (async () => {
      if (postContext.selectedPostId.length > 0) {
        setIsSubmitting(true);
        const raw = await fetch(`${ROUTE.posts}/${postContext.selectedPostId}`);
        const res: TPost = await raw.json();
        setIsSubmitting(false);
        if (res.id) {
          setCanEdit(true);
          setInitialValues({
            author: String(res?.userId) || "",
            title: res?.title || "",
            content: res?.body || "",
          });
        } else {
          postContext.closeModal();
        }
      } else {
        setInitialValues(POST.initialValues);
      }
    })();
  }, [postContext.showModal]);

  useEffect(() => {
    setIsSubmitting(fetcher.state !== "idle");
  }, [fetcher.state]);

  //
  return { postContext, fetcher, isSubmitting, initialValues, canEdit };
}
