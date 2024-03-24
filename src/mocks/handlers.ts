import { delay, http, HttpResponse } from "msw";

const mockData = {
  items: [
    {
      date: "2023-10-11",
      events: [
        {
          eventId: 154064101,
          eventDate: "2023-10-11T17:11:58.037Z",
          eventType: "TRANSACTION",
          eventCategory: "AUTHORIZE",
          establishmentName: "COMPRA sem JUROS",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
            last4Digits: "4655",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 110,
            contractAmount: 110,
          },
          cid: "d3efeab2-0ec3-91c7-97c4-a7c76e5b09a7",
        },
        {
          eventId: 154064100,
          eventDate: "2023-10-11T17:11:50.154Z",
          eventType: "TRANSACTION",
          eventCategory: "AUTHORIZE",
          establishmentName: "COMPRA sem JUROS",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
            last4Digits: "4655",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 110,
            contractAmount: 110,
          },
          cid: "55edbc53-d1c5-9ed1-9e63-278841983e3c",
        },
        {
          eventId: 154064098,
          eventDate: "2023-10-11T17:11:40.156Z",
          eventType: "TRANSACTION",
          eventCategory: "DECLINED",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            last4Digits: "4779",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 30,
            contractAmount: 35.12,
          },
          cid: "b6e01c25-f418-9554-9fbd-2155e36e67a1",
        },
        {
          eventId: 154064097,
          eventDate: "2023-10-11T17:10:41.132Z",
          eventType: "TRANSACTION",
          eventCategory: "DECLINED",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            last4Digits: "4779",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 30,
            contractAmount: 35.12,
          },
          cid: "11a2f651-e9ac-9221-bd62-51f66980196e",
        },
      ],
    },
    {
      date: "2023-10-08",
      events: [
        {
          eventId: 153350815,
          eventDate: "2023-10-08T20:21:49.195Z",
          eventType: "TRANSACTION",
          eventCategory: "CANCELLATION",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            isOwner: null,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 30,
            contractAmount: 33.84,
          },
          cid: "725161e3-b1ce-99b8-b3e6-1c517eb534ab",
        },
        {
          eventId: 153350817,
          eventDate: "2023-10-08T20:21:44.351Z",
          eventType: "TRANSACTION",
          eventCategory: "CANCELLATION",
          establishmentName: "compra a vista_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "NATIONAL_PURCHASE",
            isOwner: null,
          },
          numberOfInstallments: 1,
          amountDetails: {
            cardholderBillingAmount: 10,
            contractAmount: 10,
          },
          cid: "a28c6729-a95c-96f7-ba51-6c86df8dd1dc",
        },
        {
          eventId: 153350719,
          eventDate: "2023-10-08T20:15:14.326Z",
          eventType: "TRANSACTION",
          eventCategory: "CANCELLATION",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            isOwner: null,
          },
          numberOfInstallments: 5,
          amountDetails: {
            cardholderBillingAmount: 100,
            contractAmount: 116.3,
          },
          cid: "04c482aa-568d-9aa2-9dab-4fbb317b4285",
        },
      ],
    },
    {
      date: "2023-10-03",
      events: [
        {
          eventId: 154052760,
          eventDate: "2023-10-03T17:43:14.026Z",
          eventType: "TRANSACTION",
          eventCategory: "AUTHORIZE",
          establishmentName: "COMPRA sem JUROS",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITHOUT_INTEREST",
            last4Digits: "4655",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 110,
            contractAmount: 110,
          },
          cid: "10e07eaf-8cf9-936d-892e-b13a6c9025f1",
        },
        {
          eventId: 154052759,
          eventDate: "2023-10-03T17:42:49.853Z",
          eventType: "TRANSACTION",
          eventCategory: "AUTHORIZE",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            last4Digits: "4655",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 30,
            contractAmount: 35.68,
          },
          cid: "a62761ea-b1db-9bf8-89f2-11c97a82be98",
        },
        {
          eventId: 154052758,
          eventDate: "2023-10-03T17:42:43.609Z",
          eventType: "TRANSACTION",
          eventCategory: "AUTHORIZE",
          establishmentName: "COMPRA COM JUROS - AF EM DIA_1_",
          establishmentMerchantCategoryGroup: "FUEL",
          transactionDetails: {
            orgOperationType: "INSTALLMENT_PURCHASE_WITH_INTEREST",
            last4Digits: "4655",
            isOwner: true,
          },
          numberOfInstallments: 4,
          amountDetails: {
            cardholderBillingAmount: 30,
            contractAmount: 35.68,
          },
          cid: "0cae12ce-f760-9641-8058-8c0cb99f14f7",
        },
      ],
    },
  ],
  paging: {
    hasNextPage: true,
    previous: "_page=3&_size=10",
    next: "_page=3&_size=10",
    actual: {
      page: 0,
      elements: 10,
    },
    total: {
      pages: 9,
      elements: 82,
    },
  },
};

const mockData2 = {
  items: [
    {
      date: "2024-02-29",
      events: [
        {
          eventId: 38370974,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2024-02-29T03:00:00Z",
          dueDate: "2024-03-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 167.1,
            previousBalance: 132.92,
            credits: 0,
            debits: 34.18,
          },
          cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
        },
        {
          eventId: 38370974,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2024-02-29T03:00:00Z",
          dueDate: "2024-03-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 167.1,
            previousBalance: 132.92,
            credits: 0,
            debits: 34.18,
          },
          cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
        },
        {
          eventId: 38370974,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2024-02-29T03:00:00Z",
          dueDate: "2024-03-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 167.1,
            previousBalance: 132.92,
            credits: 0,
            debits: 34.18,
          },
          cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
        },
      ],
    },
    {
      date: "2023-12-21",
      events: [
        {
          eventId: 0,
          eventType: "STATEMENT",
          eventCategory: "OVERDUE",
          eventDate: "2023-12-21T06:00:44.014Z",
          dueDate: "2023-12-10",
          amountDetails: {
            localAmount: 0,
            currentBalance: 0,
            previousBalance: 0,
            credits: 0,
            debits: 0,
          },
          cid: "5ca53449-6958-4a30-b32d-a11119eba8e4",
        },
        {
          eventId: 0,
          eventType: "STATEMENT",
          eventCategory: "OVERDUE",
          eventDate: "2023-12-21T06:00:44.014Z",
          dueDate: "2023-12-10",
          amountDetails: {
            localAmount: 0,
            currentBalance: 0,
            previousBalance: 0,
            credits: 0,
            debits: 0,
          },
          cid: "5ca53449-6958-4a30-b32d-a11119eba8e4",
        },
      ],
    },
    {
      date: "2023-10-31",
      events: [
        {
          eventId: 38370970,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2023-10-31T03:00:00Z",
          dueDate: "2023-11-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 88.85,
            previousBalance: 530.22,
            credits: 530.22,
            debits: 88.85,
          },
          cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
        },
        {
          eventId: 38370970,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2023-10-31T03:00:00Z",
          dueDate: "2023-11-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 88.85,
            previousBalance: 530.22,
            credits: 530.22,
            debits: 88.85,
          },
          cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
        },
        {
          eventId: 38370970,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2023-10-31T03:00:00Z",
          dueDate: "2023-11-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 88.85,
            previousBalance: 530.22,
            credits: 530.22,
            debits: 88.85,
          },
          cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
        },
        {
          eventId: 38370970,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2023-10-31T03:00:00Z",
          dueDate: "2023-11-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 88.85,
            previousBalance: 530.22,
            credits: 530.22,
            debits: 88.85,
          },
          cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
        },
        {
          eventId: 38370970,
          eventType: "STATEMENT",
          eventCategory: "CLOSE",
          eventDate: "2023-10-31T03:00:00Z",
          dueDate: "2023-11-10",
          amountDetails: {
            localAmount: null,
            currentBalance: 88.85,
            previousBalance: 530.22,
            credits: 530.22,
            debits: 88.85,
          },
          cid: "bd767785-b50a-4c98-bcd8-8fd3efa96be1",
        },
      ],
    },
  ],
  paging: {
    hasNextPage: false,
    previous: null,
    next: "_page=1&_size=10",
    actual: {
      page: 1,
      elements: 10,
    },
    total: {
      pages: 9,
      elements: 82,
    },
  },
};

export const handlers = [
  http.get("http://localhost:3022/timeline", async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const filter = url.searchParams.get("filters");

    await delay(2500);

    if (filter === "fatura") {
      return HttpResponse.json(mockData2);
    }

    if (filter === "confirmados") {
      return HttpResponse.json(mockData);
    }

    if (page === "0") {
      return HttpResponse.json(mockData);
    }

    if (page === "1") {
      return HttpResponse.json(mockData2);
    }
  }),
  http.get("http://localhost:3022/timeline/criticalTransactions", async () => {
    await delay(2500);

    return HttpResponse.json([
      {
        items: [
          {
            date: "2024-02-29",
            events: [
              {
                eventId: 38370974,
                eventType: "STATEMENT",
                eventCategory: "CLOSE",
                eventDate: "2024-02-29T03:00:00Z",
                dueDate: "2024-03-10",
                amountDetails: {
                  localAmount: null,
                  currentBalance: 167.1,
                  previousBalance: 132.92,
                  credits: 0,
                  debits: 34.18,
                },
                cid: "b3f3f673-726f-4902-8b02-ed7530e915e4",
              },
            ],
          },
          {
            date: "2023-12-21",
            events: [
              {
                eventId: 0,
                eventType: "STATEMENT",
                eventCategory: "OVERDUE",
                eventDate: "2023-12-21T06:00:44.014Z",
                dueDate: "2023-12-10",
                amountDetails: {
                  localAmount: 0,
                  currentBalance: 0,
                  previousBalance: 0,
                  credits: 0,
                  debits: 0,
                },
                cid: "5ca53449-6958-4a30-b32d-a11119eba8e4",
              },
            ],
          },
        ],
      },
    ]);
  }),
];
