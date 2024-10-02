import { M } from "~/constants/MOCK";

export const POST = {
  initialValues: M.posts.formData
    ? {
        author: "1",
        title: "Test title 1",
        content: "Test content 1",
      }
    : {
        author: "",
        title: "",
        content: "",
      },
};
