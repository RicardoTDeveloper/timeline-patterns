import { Filters } from "@/services/core/Filters";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";
import { SkeletonTransactions } from "../Loading";
import TransactionCard from "../TransactionCard";
import TransactionTime from "../TransactionTime";
import { variant } from "../../utils";
import _ from "lodash";
import { useFilters } from "@/store";
import { SubTitle } from "../TransactionCard/SubTitle";

export function OtherReleases() {
  const filters = useFilters((state) => state.filters);
  const {
    titleFilter,
    isTitle,
    pendingFilter,
    isNotVisibleTransactionsCritical,
  } = new Filters(filters);
  const { InfiniteScrollRef, alltransactions, isFetchingNextPage, isFetching } =
    useFetchTransactions();

  return (
    <div
      className={` ${isNotVisibleTransactionsCritical ? "mt-0" : "mt-10"}  rounded-2xl p-2 ${isTitle ? "border" : ""}`}
    >
      <h4 className="my-3 text-lg font-medium">{titleFilter}</h4>

      {_.map(alltransactions, (item, index) => (
        <>
          {Object.keys(item).length === 1 ? (
            <TransactionTime key={index} date={item.date} />
          ) : (
            <>
              {!isTitle && <SubTitle title={pendingFilter} />}
              <TransactionCard key={item.cid} transaction={variant(item)} />
            </>
          )}
        </>
      ))}

      {(isFetchingNextPage || isFetching) && <SkeletonTransactions />}
      <InfiniteScrollRef />
    </div>
  );
}
