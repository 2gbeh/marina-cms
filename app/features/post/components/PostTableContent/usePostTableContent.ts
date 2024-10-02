import { useState } from "react";
import { useFetcher, useSubmit } from "@remix-run/react";
import { usePostContext } from "../../hooks/usePostContext";

export function usePostTableContent() {
  const submit = useSubmit();
  const deleteFetcher = useFetcher({ key: "delete" });
  const isDeleting = deleteFetcher.state === "submitting";

  const postContext = usePostContext();
  const [toBeDeleted, setToBeDeleted] = useState(-1);

  function handleEdit(id: unknown) {
    postContext.setPostId(id as string);
    postContext.openModal();
  }

  function handleDelete(id: unknown) {
    const formData = new FormData();
    formData.append("id", id as string);
    formData.append("intent", "delete");
    //
    submit(formData, { method: "post", navigate: false, fetcherKey: "delete" });
    setToBeDeleted(id as number);
  }

  //
  return {
    postContext,
    handleEdit,
    handleDelete,
    toBeDeleted,
    isDeleting,
  };
}
