export const fakeDashboardLoader = [
  {
    collectors: {
      value: 5,
      rate: 15,
    },
    customers: {
      value: 22,
      rate: 15,
    },
    deposits: {
      value: 96500,
      rate: 15,
    },
    withdrawals: {
      value: 2500,
      rate: 0,
    },
  },
  [
    {
      id: 1,
      type: "Credit",
      channel: "Cash",
      amount: 1000,
      created_at: "2024-09-02 14:00:00",
      collector: {
        name: "chidiebere",
      },
      customer: {
        name: "victoria",
        quota: 1000,
        wallet: 0,
      },
    },
    {
      id: 2,
      type: "Credit",
      channel: "Cash",
      amount: 500,
      created_at: "2024-09-03 15:00:00",
      collector: {
        name: "faith",
      },
      customer: {
        name: "ify sunday",
        quota: 500,
        wallet: 0,
      },
    },
    {
      id: 3,
      type: "Debit",
      channel: "TR",
      amount: 30000,
      created_at: "2024-09-04 16:00:00",
      collector: {
        name: "joy",
      },
      customer: {
        name: "igwe emmanuel",
        quota: 1000,
        wallet: 0,
      },
    },
    {
      id: 4,
      type: "Debit",
      channel: "TR",
      amount: 15000,
      created_at: "2024-09-05 17:00:00",
      collector: {
        name: "queen",
      },
      customer: {
        name: "samuel ben",
        quota: 500,
        wallet: 0,
      },
    },
    {
      id: 5,
      type: "Credit",
      channel: "Cash",
      amount: 1000,
      created_at: "2024-09-06 18:00:00",
      collector: {
        name: "leaticia",
      },
      customer: {
        name: "kenneth nwokporo",
        quota: 500,
        wallet: 0,
      },
    },
  ],
];
