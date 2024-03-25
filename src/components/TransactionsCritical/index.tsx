import { useCallback, useEffect, useState } from "react";
import { useFetchCriticalTransactions } from "@/hooks/useFetchCriticalTransactions";
import { Filters } from "@/services/core/Filters";
import { variant } from "@/utils";
import TransactionCard from "../TransactionCard";
import TransactionTime from "../TransactionTime";
import { SubTitle } from "../TransactionCard/SubTitle";
import { IconChevronUp, IconExclamationTriangle } from "../icons";
import _ from "lodash";
import { useFilters } from "@/store";

export default function TransactionsCritical() {
  const filter = useFilters((state) => state.filters);
  const { isCloseTransactionsCritical, isNotVisibleTransactionsCritical } =
    new Filters(filter);

  const { alltransactionsCritical, count } = useFetchCriticalTransactions();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isCloseTransactionsCritical) {
      setIsOpen(false);
    }
  }, [isCloseTransactionsCritical]);

  const handleToggleSection = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  if (isNotVisibleTransactionsCritical) {
    return null;
  }

  return (
    <>
      <div
        className="my-3 mb-6 flex items-center justify-between border-b pb-2 hover:cursor-pointer"
        onClick={handleToggleSection}
      >
        <div className="flex">
          <IconExclamationTriangle />

          <p className="pl-3 text-sm">Lançamentos críticos</p>
        </div>
        <div className="flex">
          <div className="mr-2 rounded-full bg-fuchsia-800 px-2 py-0">
            <p className=" rounded-full text-white">{count}</p>
          </div>
          <div className={`${isOpen ? "rotate-180 transform" : ""}`}>
            <IconChevronUp />
          </div>
        </div>
      </div>
      <section className={`${isOpen ? "block" : "hidden"}`}>
        {_.map(alltransactionsCritical, (item, index) => (
          <>
            {Object.keys(item).length === 1 ? (
              <>
                <TransactionTime key={index} date={item.date} />
                <SubTitle title="comBloqueio" />
              </>
            ) : (
              <TransactionCard key={item.cid} transaction={variant(item)} />
            )}
          </>
        ))}

        {!alltransactionsCritical && (
          <p className="text-center text-sm">
            Não tem novos lançamentos críticos.
          </p>
        )}
      </section>
    </>
  );
}
