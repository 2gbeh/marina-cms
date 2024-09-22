import { type MetaFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  json,
  useLoaderData,
  useActionData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import Heading from "~/components/Heading";
import Tent from "~/components/Tent";
import { fakeDashboardLoader } from "~/data/fake-dashboard-loader";
// ///////////////////////////////////////////////
import {
  IDashboardLoader,
  DashboardService,
  DashboardCards,
  DashboardTable,
} from "~/features/dashboard";
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";

export const meta: MetaFunction = () => [{ title: "Dashboard" }];

export const loader = async () => {
  await PromiseHelper.mockApiCall();
  // throw json("DashboardServiceError: I'm a teapot!", {
  //   status: 418,
  //   statusText: "I'm a teapot!",
  // });
  //
  return json({
    summary: fakeDashboardLoader[0],
    transactions: fakeDashboardLoader[1],
  });
  // await DashboardService.fetchData();
};

export default function DashboardRoute() {
  console.log("🚀 ~ DashboardRoute");
  const loaderData = useLoaderData<IDashboardLoader>();
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="Dashboard" />

      <div className="flex flex-1 flex-col gap-8 md:p-5">
        {/* CARDS */}
        <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <DashboardCards data={loaderData.summary} />
        </section>

        {/* TABLE */}
        <section className="grid gap-4 md:gap-8">
          <DashboardTable data={loaderData.transactions} />
        </section>
      </div>
    </>
  );
}
