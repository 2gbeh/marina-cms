import { M } from "./MOCK";

export const ROUTE = {
  posts: M.posts.loader
    ? "http://localhost:8000/posts"
    : "https://jsonplaceholder.typicode.com/posts",
  users: M.users.loader
    ? "http://localhost:8000/users"
    : "https://jsonplaceholder.typicode.com/users",
};
