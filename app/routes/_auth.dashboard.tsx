import {
  type MetaFunction,
  type ActionFunctionArgs,
  json,
  redirect,
} from "@remix-run/node";
import {
  isRouteErrorResponse,
  useLoaderData,
  useActionData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import Heading from "~/components/Heading";
import Tent from "~/components/Tent";
import { PATH } from "~/constants/PATH";
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

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const entries = Object.fromEntries(form);
  console.log("🚀 ~ action ~ entries:", entries);
  // return redirect(PATH.dashboard);
};

export default function DashboardRoute() {
  const loaderData = useLoaderData<IDashboardLoader>();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isSubmitting = navigation.state === "submitting";
  console.log("🚀 ~ DashboardRoute");
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
