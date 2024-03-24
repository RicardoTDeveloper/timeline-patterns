import { useCallback, useEffect, useState } from "react";
import { useFetchCriticalTransactions } from "@/hooks/useFetchCriticalTransactions";
import { variant } from "@/utils";
import TransactionCard from "../TransactionCard";
import TransactionTime from "../TransactionTime";
import { IconChevronUp, IconExclamationTriangle } from "../icons";
import _ from "lodash";

export default function TransactionsCritical() {
  const { alltransactionsCritical, count } = useFetchCriticalTransactions();
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSection = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

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
                <p className="mt-3 text-sm">Bloqueio de cartão (referido)</p>
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
