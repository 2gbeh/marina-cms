import { type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Package2Icon } from "lucide-react";

export const meta: MetaFunction = () => [{ title: "Home" }];

export default function HomeRoute() {
  console.log("🚀 ~ HomeRoute");
  // renders
  return (
    <div className="flex-centered gap-10">
      <Link to={"/users"}>
        <Package2Icon className="dim-6 transition-all group-hover:scale-110" />
      </Link>
    </div>
  );
}
