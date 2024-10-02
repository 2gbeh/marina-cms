import { useFetcher, useSubmit } from "@remix-run/react";
import { useState } from "react";

export function usePostTableContent() {
  const submit = useSubmit();
  const deleteFetcher = useFetcher({ key: "delete" });
  const isDeleting = deleteFetcher.state === "submitting";

  const [toBeDeleted, setToBeDeleted] = useState(-1);

  function handleDelete(id: unknown) {
    const formData = new FormData();
    formData.append("id", id as string);
    formData.append("intent", "delete");
    //
    submit(formData, { method: "post", navigate: false, fetcherKey: "delete" });
    setToBeDeleted(id as number);
  }
  //
  return { handleDelete, toBeDeleted, isDeleting };
}
