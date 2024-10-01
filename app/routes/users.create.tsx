import { type MetaFunction } from "@remix-run/node";
import { useLoaderData, useActionData, useNavigation } from "@remix-run/react";
import Heading from "~/components/Heading";
// ///////////////////////////////////////////////

export const meta: MetaFunction = () => [{ title: "CreateUser" }];

export default function CreateUserRoute() {
  console.log("🚀 ~ CreateUserRoute");
  // renders
  return (
    <>
      {/* HEADING */}
      <Heading title="CreateUser" />
    </>
  );
}
