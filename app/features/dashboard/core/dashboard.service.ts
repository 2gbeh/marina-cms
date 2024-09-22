import { json } from "@remix-run/node";
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";
// ///////////////////////////////////////////////
import { fakeDashboardLoader } from "~/data/fake-dashboard-loader";

export class DashboardService {
  static async fetchData() {
    await PromiseHelper.mockApiCall();
    throw json("DashboardServiceError: I'm a teapot!", {
      status: 418,
      statusText: "I'm a teapot!",
    });
    //
    return json({
      summary: fakeDashboardLoader[0],
      transactions: fakeDashboardLoader[1],
    });
  }
}
