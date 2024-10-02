import { faker } from "@faker-js/faker";
import { TPost, TUsers } from "./post.interface";

interface IPostPipe {
  post: TPost;
  users: TUsers;
}

export class PostPipe {
  static transform({ post, users }: IPostPipe) {
    const user = users.find((user) => user.id == post.userId);
    //
    return {
      raw: post,
      title: post?.title || "---",
      body: post?.body || "---",
      thumbnail: post?.thumbnail || faker.image.urlPicsumPhotos({ width: 64 }),
      user: {
        id: user?.id || -1,
        username: user?.username || "N/A",
      },
    };
  }
}
