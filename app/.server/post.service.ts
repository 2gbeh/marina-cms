import { json, redirect } from "@remix-run/node";
import { type Params } from "@remix-run/react";

export class PostService {
  static async fetchData(params: Params<string>) {
    const raw = await fetch(
      true
        ? "http://localhost:8000/posts"
        : "https://jsonplaceholder.typicode.com/posts",
    );
    const res = await raw.json();
    // 
    return json({ data: res });
  }

  static async handleAction(params: Params<string>, request: Request) {
    const formData = await request.formData();
    const body = {
      title: formData.get("title"),
      body: formData.get("body"),
      userId: formData.get("user_id"),
    };
    // 
    // return redirect(`/users`);
  }
}
