import TransactionCard from "@/components/TransactionCard";
import { TransactionDetails } from "@/components/TransactionDetails";
import TransactionsCritical from "@/components/TransactionsCritical";
import TransactionTime from "@/components/TransactionTime";
import { useFetchTransactions } from "@/hooks/useFetchTransactions";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SkeletonDetails, SkeletonTransactions } from "@/components/Loading";
import Body from "@/layout/Body";
import Header from "@/layout/Header";
import HeaderCBWeb from "@/layout/HeaderCBWeb";
import { variant } from "@/utils";
import _ from "lodash";

function Timeline() {
  const { InfiniteScrollRef, alltransactions, isFetchingNextPage, isFetching } =
    useFetchTransactions();

  return (
    <>
      <HeaderCBWeb />
      <div className=" container bg-zinc-50 pt-20">
        <Header />

        <div className="mt-10 grid grid-cols-2">
          <Body>
            <TransactionsCritical />

            <div className=" mt-10 rounded-2xl border p-2">
              <h4 className="my-3 text-lg font-medium">Demais lançamentos</h4>

              {_.map(alltransactions, (item, index) => (
                <>
                  {Object.keys(item).length === 1 ? (
                    <TransactionTime key={index} date={item.date} />
                  ) : (
                    <TransactionCard
                      key={item.cid}
                      transaction={variant(item)}
                    />
                  )}
                </>
              ))}

              {(isFetchingNextPage || isFetching) && <SkeletonTransactions />}
              <InfiniteScrollRef />
            </div>
          </Body>
          <Body>
            <SkeletonDetails />
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
