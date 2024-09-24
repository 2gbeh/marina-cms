export type {
  TDashboardLoader_Summary,
  TDashboardLoader_Transaction,
  IDashboardLoader,
  IDashboardAction,
} from "./core/dashboard.interface";
export { DashboardPipe } from "./core/dashboard.pipe";
export { useDashboard } from "./core/useDashboard";
//
export { default as DashboardCards_ } from "./widgets/DashboardCards";
export { default as DashboardTable_ } from "./widgets/DashboardTable";
export { default as DashboardAddNew } from "./widgets/DashboardAddNew";
