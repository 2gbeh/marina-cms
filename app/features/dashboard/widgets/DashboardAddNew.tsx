import React from "react";
import { useNavigation, useFetcher } from "@remix-run/react";
import { SaveIcon } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";

interface IProps {
  count?: number;
}

const DashboardAddNew: React.FC<IProps> = ({ count = 0 }) => {
  const navigation = useNavigation();
  const fetcher = useFetcher();
  const remember_me = fetcher.formData
    ? fetcher.formData.get("remember_me") === "yes"
    : count > 5;
  console.log("🚀 ~ DashboardAddNew");
  // renders
  return (
    <fetcher.Form method="post" className="ml-auto">
      <Button
        name="remember_me"
        value={remember_me ? "no" : "yes"}
        size="sm"
        className="gap-2"
        disabled={navigation.state !== "idle"}
      >
        {remember_me ? "Added" : "Add New"}
        {navigation.state !== "idle" && "..."}
        <SaveIcon className="dim-4" />
      </Button>
    </fetcher.Form>
  );
};

export default React.memo(DashboardAddNew);
