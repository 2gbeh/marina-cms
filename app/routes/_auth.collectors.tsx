import { type MetaFunction } from "@remix-run/node";
import {
  useLoaderData,
  useActionData,
  useNavigation,
  json,
} from "@remix-run/react";
import Heading from "~/components/Heading";
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";
// ///////////////////////////////////////////////

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.title },
];

export const loader = async () => {
  await PromiseHelper.mockApiCall();
  return json({
    title: "Collectors",
    content: [],
  });
};

export default function CollectorsRoute() {
  const loaderData = useLoaderData<typeof loader>();
  console.log(`🚀 ~ ${loaderData.title}Route`);
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title={loaderData.title} />
      {JSON.stringify(loaderData)}
    </>
  );
}
