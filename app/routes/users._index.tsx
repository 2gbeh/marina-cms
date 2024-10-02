import {
  LoaderFunctionArgs,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { ListFilter, File, PlusCircle } from "lucide-react";
import { Card, CardFooter } from "~/components/_shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/_shadcn/ui/tabs";
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
// ///////////////////////////////////////////////
import { PostService } from "~/.server/post.service";
import {
  TPosts,
  PostTableContent,
  useUsersRoute,
  AddPostModalForm,
} from "~/features/post";

export const meta: MetaFunction = () => [{ title: "Users" }];

export const loader = async ({ params, request }: LoaderFunctionArgs) =>
  await PostService.handleLoader(params, request);

export const action = async ({ params, request }: ActionFunctionArgs) =>
  await PostService.handleAction(params, request);

export default function UsersRoute() {
  const {
    post,
    posts,
    totalPosts,
    users,
    handleFilter,
    toBeFiltered,
    handleExport,
    openModal,
    setOpenModal,
    toggleOpenModal,
  } = useUsersRoute();
  console.log("🚀 ~ UsersRoute");
  // renders
  return (
    <>
      <Tabs defaultValue="all">
        <div className="mb-4 flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            {/* FILTER BY */}
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
                <DropdownMenuLabel>Posted by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {users.map(({ id, username }) => (
                  <DropdownMenuCheckboxItem
                    key={id}
                    checked={toBeFiltered == id}
                    onClick={() => handleFilter(id)}
                  >
                    {username}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EXPORT */}
            <Button
              size="sm"
              variant="outline"
              className="h-7 gap-1"
              onClick={handleExport}
            >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Export
              </span>
            </Button>

            {/* CTA */}
            <Button size="sm" onClick={toggleOpenModal} className="h-7 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Post
              </span>
            </Button>
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            {/* TABLE */}
            <PostTableContent posts={posts} users={users} />

            {/* PAGINATION */}
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{totalPosts}</strong> of{" "}
                <strong>{totalPosts}</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <AddPostModalForm
        open={openModal}
        onClose={setOpenModal}
        data={{ users, post }}
      />
    </>
  );
}
