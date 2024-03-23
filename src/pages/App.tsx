import TransactionCard from "@/components/TransactionCard";
import { TransactionDetails } from "@/components/TransactionDetails";
import TransactionsCritical from "@/components/TransactionsCritical";
import TransactionTime from "@/components/TransactionTime";
import { useFetchTransactions } from "@/hooks/useFetchTransactions";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Body from "@/layout/Body";
import Header from "@/layout/Header";
import HeaderCBWeb from "@/layout/HeaderCBWeb";
import { variant } from "@/utils";

function Timeline() {
  const { InfiniteScrollRef } = useFetchTransactions();

  return (
    <>
      <HeaderCBWeb />
      <div className=" container bg-zinc-50 pt-20">
        <Header />

        <div className="mt-10 grid grid-cols-2">
          <Body>
            {/* <TransactionsCritical /> */}

            <div className=" mt-10 rounded-2xl border p-2">
              <h4 className="my-3 text-lg font-medium">Demais lançamentos</h4>

              <div>
                <TransactionTime />
                {new Array(3).fill(0).map((_, index) => (
                  <TransactionCard
                    key={index}
                    transaction={variant({
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
                    })}
                  />
                ))}

                <TransactionTime />
                {new Array(3).fill(0).map((_, index) => (
                  <TransactionCard
                    key={index}
                    transaction={variant({
                      eventId: 38370974,
                      eventType: "STATEMENT",
                      eventCategory: "OVERDUE",
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
                    })}
                  />
                ))}
                {new Array(3).fill(0).map((_, index) => (
                  <TransactionCard
                    key={index}
                    transaction={variant({
                      eventId: 38370974,
                      eventType: "STATEMENT",
                      eventCategory: "OVERDUE",
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
                    })}
                  />
                ))}
                <InfiniteScrollRef />
              </div>
            </div>
          </Body>
          <Body>
            <TransactionDetails.Root>
              <TransactionDetails.Header />
              <TransactionDetails.Tags />
              <TransactionDetails.Referred />
              <TransactionDetails.Buttons />
              <TransactionDetails.History />
              <TransactionDetails.Guidelines />
            </TransactionDetails.Root>
          </Body>
        </div>
      </div>
    </>
  );
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Timeline />
    </QueryClientProvider>
  );
}
