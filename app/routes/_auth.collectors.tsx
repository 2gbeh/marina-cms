import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  useLoaderData,
  useActionData,
  useNavigation,
  json,
} from "@remix-run/react";
import { useState } from "react";
import Heading from "~/components/Heading";
// import { DashboardService } from "~/features/dashboard";
import { CustomerFilters, CustomerTabContent } from "~/features/customers";
import { DashboardService } from "~/.server/dashboard.service";
// ///////////////////////////////////////////////
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.title },
];

export const loader: LoaderFunction = async ({ params }) =>
  await DashboardService.fetchData(params);

export default function CollectorsRoute() {
  const loaderData = useLoaderData<typeof loader>();
  const [toggle, setToggle] = useState(false);
  console.log(`🚀 ~ ${loaderData.title}Route`);
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title={loaderData.title} />
      {JSON.stringify(loaderData)}
      <button onClick={() => setToggle((prev) => !prev)}>OK</button>
      <CustomerFilters data={true} />
      <CustomerTabContent data={true} />
    </>
  );
}
