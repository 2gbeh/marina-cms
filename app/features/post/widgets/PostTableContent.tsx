import React from "react";
import { MoreHorizontal } from "lucide-react";
import { faker } from "@faker-js/faker";
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

import { TPosts } from "../core/post.interface";

const PostTableContent = ({ posts }: { posts: TPosts }) => {
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
              <TableHead className="hidden sm:table-cell">Posted by</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map(({ id, thumbnail, title, body, userId }, i) => {
              return (
                <TableRow key={id}>
                  <TableCell className="">{i + 1}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <figure className="">
                      <img
                        src={
                          thumbnail ||
                          faker.image.urlPicsumPhotos({ width: 64 })
                        }
                        alt="Thumbnail"
                        height="64"
                        width="64"
                        className="aspect-square rounded-md object-cover"
                      />
                    </figure>
                  </TableCell>
                  <TableCell className="font-medium">{title}</TableCell>
                  <TableCell className="hidden sm:table-cell">{body}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge variant="outline" className="text-nowrap">
                      Auhtor-{userId}
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
                        <DropdownMenuItem>Delete</DropdownMenuItem>
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
