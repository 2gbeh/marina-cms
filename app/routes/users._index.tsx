import {
  LoaderFunctionArgs,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Card, CardFooter } from "~/components/_shadcn/ui/card";
import { Tabs, TabsContent } from "~/components/_shadcn/ui/tabs";
// ///////////////////////////////////////////////
import { PostService } from "~/.server/post.service";
import {
  useUsersRoute,
  TabButtons,
  ExportButton,
  CTAButton,
  PostTableContent,
  AddPostModalForm,
  FilterButton,
  Pagination,
} from "~/features/post";

export const meta: MetaFunction = () => [{ title: "Users" }];

export const loader = async ({ params, request }: LoaderFunctionArgs) =>
  await PostService.handleLoader(params, request);

export const action = async ({ params, request }: ActionFunctionArgs) =>
  await PostService.handleAction(params, request);

export default function UsersRoute() {
  const { posts, users, postContext, handleFilter } = useUsersRoute();
  console.log("🚀 ~ UsersRoute");
  // renders
  return (
    <>
      <Tabs defaultValue="all">
        <div className="mb-4 flex items-center">
          {/* TABS */}
          <TabButtons
            tabs={{
              all: "All",
              active: "Active",
              draft: "Draft",
              archived: "Archived",
            }}
          />

          {/* FILTERS */}
          <div className="ml-auto flex items-center gap-2">
            <FilterButton
              options={users}
              selected={postContext.selectedUserId}
              handleChange={handleFilter}
            />
            <ExportButton data={posts} />
            <CTAButton
              value="Add Post"
              handleClick={postContext.openModal}
              variant="add"
            />
          </div>
        </div>
        <TabsContent value="all">
          <Card x-chunk="dashboard-06-chunk-0">
            {/* TABLE */}
            <PostTableContent />

            {/* PAGINATION */}
            <Pagination total={postContext.totalPosts} />
          </Card>
        </TabsContent>
      </Tabs>

      <AddPostModalForm />
    </>
  );
}
