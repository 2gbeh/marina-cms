import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "~/components/_shadcn/ui/badge";
import { Button } from "~/components/_shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/_shadcn/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/_shadcn/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/_shadcn/ui/card";
// ///////////////////////////////////////////////
import { IPostLoader } from "../../utils/post.interface";
import { PostPipe } from "../../utils/post.pipe";
import { usePostTableContent } from "./usePostTableContent";

interface IProps extends IPostLoader {}

const PostTableContent: React.FC<IProps> = ({ posts, users }) => {
  const { handleDelete, toBeDeleted, isDeleting } = usePostTableContent();
  console.log("🚀 ~ PostTableContent");
  return (
    <>
      <CardHeader>
        <CardTitle>Posts</CardTitle>
        <CardDescription>
          Manage your posts and view their comments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">#</TableHead>
              <TableHead className="hidden w-[100px] sm:table-cell">
                Thumbnail
              </TableHead>
              <TableHead className="">Title</TableHead>
              <TableHead className="hidden sm:table-cell">Body</TableHead>
              <TableHead className="hidden sm:table-cell">Author</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post, i) => {
              const pipe = PostPipe.transform({ post, users });
              // render
              return (
                <TableRow
                  key={post.id}
                  className={
                    isDeleting && post.id == toBeDeleted ? "bg-red-50" : ""
                  }
                >
                  <TableCell className="">{i + 1}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <figure className="">
                      <img
                        src={pipe.thumbnail}
                        alt="Thumbnail"
                        height="64"
                        width="64"
                        className="aspect-square rounded-md object-cover"
                      />
                    </figure>
                  </TableCell>
                  <TableCell className="font-medium">{pipe.title}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {pipe.body}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="outline" className="text-nowrap">
                      {pipe.user.username}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </>
  );
};

export default React.memo(PostTableContent);
