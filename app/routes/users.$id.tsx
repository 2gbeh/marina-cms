import { type MetaFunction } from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation } from "@remix-run/react";
import Heading from "~/components/Heading";
// ///////////////////////////////////////////////

export const meta: MetaFunction = () => [{ title: "User" }];

export default function UserRoute() {
  console.log("🚀 ~ UserRoute");
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="User" />
    </>
  );
}
