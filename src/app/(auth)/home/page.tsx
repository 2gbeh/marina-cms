import { redirect } from "next/navigation";
import PATH from "@/constants/PATH";

export default function DashboardProxy() {
  redirect(PATH.dashboard);
}
