import { type MetaFunction } from "@remix-run/node";
import {
  useLoaderData,
  useActionData,
  useNavigation,
  json,
} from "@remix-run/react";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import { faker } from "@faker-js/faker";
import { Badge } from "~/components/_shadcn/ui/badge";
import { Button } from "~/components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/_shadcn/ui/card";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/_shadcn/ui/tabs";

type TPost = { id: number; title: string; body: string; userId: number };
type TPosts = Array<TPost>;

export const meta: MetaFunction = () => [{ title: "Users" }];

export async function loader() {
  const raw = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await raw.json();
  //
  return json({ data: res });
}

export async function action() {
  const raw = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await raw.json();
  //
  return json({ data: res });
}

export default function UsersRoute() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const posts: TPosts = loaderData?.data || [];
  const totalPosts = loaderData?.data?.length || 0;
  console.log("🚀 ~ UsersRoute", loaderData);
  // renders
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-7 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Post
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
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
                  <TableHead className="hidden sm:table-cell">
                    Posted by
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map(({ id, title, body, userId }, i) => (
                  <TableRow key={id}>
                    <TableCell className="">{i + 1}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <figure className="">
                        <img
                          src={faker.image.urlPicsumPhotos({ width: 64 })}
                          alt="Thumbnail"
                          height="64"
                          width="64"
                          className="aspect-square rounded-md object-cover"
                        />
                      </figure>
                    </TableCell>
                    <TableCell className="font-medium">{title}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {body}
                    </TableCell>
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
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-{totalPosts}</strong> of{" "}
              <strong>{totalPosts}</strong> products
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
