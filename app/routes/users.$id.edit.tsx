import { type MetaFunction } from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation } from "@remix-run/react";
import Heading from "~/components/Heading";
// ///////////////////////////////////////////////

export const meta: MetaFunction = () => [{ title: "EditUser" }];

export default function EditUserRoute() {
  console.log("🚀 ~ EditUserRoute");
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="EditUser" />
    </>
  );
}
