import { useRef } from "react";
import { IconChevronRight, IconShoppingBag } from "../icons";

const IconTransaction = ({ icon }: { icon: string | undefined }) => {
  const Icon = {
    STATEMENT: <IconShoppingBag />,
    FUEL: <IconShoppingBag />,
  }[icon || "STATEMENT"];

  return Icon;
};

type ITransactionCard = {
  transaction: ITransaction & {
    isActiveTransaction: (ref: React.MutableRefObject<null>) => void;
  };
};

export default function TransactionCard({ transaction }: ITransactionCard) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onClick={() => transaction.isActiveTransaction(ref)}
      className="transaction-only flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200"
    >
      <div className="flex items-center">
        <IconTransaction icon={transaction.icon} />
        <div className=" pl-3">
          <p className=" text-sm font-medium">{transaction.title}</p>
          <p className="text-sm">{transaction.subTitle}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-3">
          <p className="text-sm">{transaction.value}</p>
          {transaction.numberOfInstallments && (
            <p className="text-right text-sm">
              {transaction.numberOfInstallments}
            </p>
          )}
        </div>
        <IconChevronRight />
      </div>
    </div>
  );
}
