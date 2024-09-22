import { type MetaFunction } from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation } from "@remix-run/react";
import Heading from "~/components/Heading";
// ///////////////////////////////////////////////

export const meta: MetaFunction = () => [{ title: "Transactions" }];

export default function TransactionsRoute() {
  console.log("🚀 ~ TransactionsRoute");
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="Transactions" />
    </>
  );
}
