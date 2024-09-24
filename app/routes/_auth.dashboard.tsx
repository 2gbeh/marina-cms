import {
  type MetaFunction,
  type LoaderFunction,
  type ActionFunction,
} from "@remix-run/node";
import { useNavigation, useLoaderData, useActionData } from "@remix-run/react";
import Heading from "~/components/Heading";
// ///////////////////////////////////////////////
import {
  // DashboardService,
  DashboardCards_,
  DashboardTable_,
  // useDashboard,
} from "~/features/dashboard";
import { DashboardService } from "~/.server/dashboard.service";
import DashboardCards from "~/features/dashboard/widgets/DashboardCards";
import DashboardTable from "~/features/dashboard/widgets/DashboardTable";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.title },
];

export const loader: LoaderFunction = async ({ params }) =>
  await DashboardService.fetchData(params);

// export const action: ActionFunction = async ({ context, params, request }) =>
//   await DashboardService.handleAction(params, request);

export default function DashboardRoute() {
  const loaderData = useLoaderData<typeof loader>();
  console.log("🚀 ~ DashboardRoute");
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="Dashboard" />

      <div className="flex flex-1 flex-col gap-8 md:p-5">
        {/* CARDS */}
        <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <DashboardCards_ data={loaderData.body.summary} />
        </section>

        {/* TABLE */}
        <section className="grid gap-4 md:gap-8">
          <DashboardTable_ data={loaderData.body.transactions} />
        </section>
      </div>
    </>
  );
}
