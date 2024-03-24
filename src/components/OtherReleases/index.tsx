import { useFetchTransactions } from "../../hooks/useFetchTransactions";
import { SkeletonTransactions } from "../Loading";
import TransactionCard from "../TransactionCard";
import TransactionTime from "../TransactionTime";
import { variant } from "../../utils";
import _ from "lodash";

export function OtherReleases() {
  const { InfiniteScrollRef, alltransactions, isFetchingNextPage, isFetching } =
    useFetchTransactions();

  return (
    <div className=" mt-10 rounded-2xl border p-2">
      <h4 className="my-3 text-lg font-medium">Demais lançamentos</h4>

      {_.map(alltransactions, (item, index) => (
        <>
          {Object.keys(item).length === 1 ? (
            <TransactionTime key={index} date={item.date} />
          ) : (
            <TransactionCard key={item.cid} transaction={variant(item)} />
          )}
        </>
      ))}

      {(isFetchingNextPage || isFetching) && <SkeletonTransactions />}
      <InfiniteScrollRef />
    </div>
  );
}
