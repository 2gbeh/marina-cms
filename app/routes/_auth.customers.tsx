import type { MetaFunction } from "@remix-run/node";
import Heading from "~/components/Heading";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/_shadcn/ui/tabs";
// ///////////////////////////////////////////////
import { CustomerFilters, CustomerTabContent } from "~/features/customers";

export const meta: MetaFunction = () => [{ title: "Customers" }];

export default function CustomersRoute() {
  console.log("🚀 ~ CustomersRoute");
  return (
    <>
      {/* HEADING */}
      <Heading title="Customers" />

      <section className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            {/* TABS */}
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived" className="hidden sm:flex">
                Archived
              </TabsTrigger>
            </TabsList>

            {/* FILTERS */}
            <div className="ml-auto flex items-center gap-2">
              <CustomerFilters />
            </div>
          </div>

          {/* TAB CONTENT */}
          <TabsContent value="all">
            <CustomerTabContent />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
