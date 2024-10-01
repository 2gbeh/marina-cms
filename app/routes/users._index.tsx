import {
  LoaderFunctionArgs,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useActionData } from "@remix-run/react";
import { Card, CardFooter } from "~/components/_shadcn/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/_shadcn/ui/tabs";
// ///////////////////////////////////////////////
import { PostService } from "~/.server/post.service";
import { TPosts, PostTableFilters, PostTableContent } from "~/features/post";

export const meta: MetaFunction = () => [{ title: "Users" }];

export const loader = async ({ params }: LoaderFunctionArgs) =>
  await PostService.fetchData(params);

export const action = async ({ params, request }: ActionFunctionArgs) =>
  await PostService.handleAction(params, request);

export default function UsersRoute() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const posts: TPosts = loaderData?.data || [];
  const totalPosts = loaderData?.data?.length || 0;
  console.log("🚀 ~ UsersRoute");
  // renders
  return (
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
          {/* FILTERS */}
          <PostTableFilters />
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          {/* TABLE */}
          <PostTableContent posts={posts} />

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
  );
}
