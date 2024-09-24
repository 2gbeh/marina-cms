import { json, redirect } from "@remix-run/node";
import { type Params } from "@remix-run/react";
import invariant from "tiny-invariant";
import { PromiseHelper } from "~/utils/helpers/common/promise.helper";
// ///////////////////////////////////////////////
import { APP } from "~/constants/APP";
import { PATH } from "~/constants/PATH";
import { fakeDashboardLoader } from "~/data/fake-dashboard-loader";

export class DashboardService {
  static async fetchData(params: Params<string>) {
    // invariant(params.id, "Undefined params");
    // await PromiseHelper.mockApiCall();
    // throw new Response("DashboardServiceError: I'm a teapot!", {
    //   status: 418,
    //   statusText: "I'm a teapot!",
    // });
    //
    return json({
      title: `Dashboard | ${APP.name}`,
      body: {
        summary: fakeDashboardLoader[0],
        transactions: fakeDashboardLoader[1],
      },
    });
  }

  static async handleAction(params: Params<string>, request: Request) {
    // invariant(params.id, "DashboardServiceError: Undefined params");
    const formData = await request.formData();
    const entries = Object.fromEntries(formData);
    console.log("🚀 ~ handleAction ~ entries:", entries);
    // @ts-ignore
    fakeDashboardLoader[1].unshift({
      id: 6,
      type: "Debit",
      channel: "TR",
      amount: 150000,
      created_at: "2024-09-23 11:00:00",
      collector: {
        name: "emanuel",
      },
      customer: {
        name: "john doe",
        quota: 260000,
        wallet: 110000,
      },
    });
    //
    return redirect(PATH.dashboard);
  }
}
