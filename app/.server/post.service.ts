import { json, redirect } from "@remix-run/node";
import { type Params } from "@remix-run/react";
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";
import { ROUTE } from "~/constants/ROUTE";
// ///////////////////////////////////////////////
import { EMethod, IAction } from "./common/server.interface";

export class PostService {
  static async handleLoader(params: Params<string>, request: Request) {
    try {
      const url = new URL(request.url);
      const userId = url.searchParams.get("filter");

      const [posts, users] = await Promise.all([
        fetch(userId ? `${ROUTE.posts}?userId=${userId}` : ROUTE.posts),
        fetch(ROUTE.users),
      ]).then((responses) =>
        Promise.all(responses.map((response) => response.json())),
      );
      // console.log("🚀 ~ PostService ~ fetchData ~ res:", posts, users);
      return json({ posts: posts ?? [], users: users ?? [] });
    } catch (err) {
      console.log("🚀 ~ PostService ~ handleLoader ~ err:", err);
      return json(err, { status: 404 });
    }
  }

  static async handleAction(params: Params<string>, request: Request) {
    const formData = await request.formData();
    let action: IAction;
    switch (formData.get("intent")) {
      case "create":
        action = this.addPost(formData);
        break;
      case "update":
        action = this.editPost(formData);
        break;
      case "delete":
        action = this.removePost(formData);
        break;
      default:
        throw json("Unknown action intent!");
    }

    // console.log("🚀 ~ PostService ~ handleAction ~ body:", body);
    try {
      await PromiseHelper.mockApiCall();
      const raw = await fetch(action.url, {
        method: action.method,
        body: JSON.stringify(action.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const res = await raw.json();
      // console.log("🚀 ~ PostService ~ handleAction ~ res:", res);
      // return redirect(`/users`);
      return json({ post: res });
    } catch (err) {
      console.log("🚀 ~ PostService ~ handleAction ~ err:", err);
      return json(err, { status: 422 });
    }
  }

  static addPost = (formData: FormData) => ({
    url: `${ROUTE.posts}`,
    method: EMethod.POST,
    body: {
      title: formData.get("title"),
      body: formData.get("content"),
      userId: Number(formData.get("author")),
    },
  });

  static editPost = (formData: FormData) => ({
    url: `${ROUTE.posts}/${formData.get("id")}`,
    method: EMethod.PATCH,
    body: {
      title: formData.get("title"),
      body: formData.get("content"),
      userId: Number(formData.get("author")),
    },
  });

  static removePost = (formData: FormData) => ({
    url: `${ROUTE.posts}/${formData.get("id")}`,
    method: EMethod.DELETE,
    body: {},
  });

  static searchPost = (title: string) => ({
    url: `${ROUTE.posts}?title=${title}`,
    method: EMethod.GET,
    body: {},
  });
}
