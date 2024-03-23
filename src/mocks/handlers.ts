import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3022/timeline", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");

    if (page === "0") {
      return HttpResponse.json({
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
          hasNextPage: true,
          previous: null,
          next: "_page=1&_size=10",
          actual: {
            page: 0,
            elements: 10,
          },
          total: {
            pages: 9,
            elements: 82,
          },
        },
      });
    }

    if (page === "1") {
      return HttpResponse.json({
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
      });
    }
  }),
];
