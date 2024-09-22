export type {
  IDashboardLoader,
  TDashboardLoader_Summary,
  TDashboardLoader_Transaction,
} from "./core/dashboard.interface";
export { DashboardService } from "./core/dashboard.service";
export { DashboardPipe } from "./core/dashboard.pipe";
//
export { default as DashboardCards } from "./widgets/DashboardCards";
export { default as DashboardTable } from "./widgets/DashboardTable";
