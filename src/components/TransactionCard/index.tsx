import { useRef } from "react";
import { IconChevronRight, IconShoppingBag } from "../icons";
import { Transaction } from "@/services/core/Transaction";

type TransactionCardProps = {
  establishment: string;
};

export default function TransactionCard({
  establishment,
}: TransactionCardProps) {
  const ref = useRef(null);
  const { isActiveTransaction } = new Transaction();

  return (
    <div
      ref={ref}
      onClick={() => isActiveTransaction(ref)}
      className="transaction-only flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200"
    >
      <div className="flex items-center">
        <IconShoppingBag />
        <div className=" pl-3">
          <p className=" text-sm font-medium">{establishment}</p>
          <p className="text-sm">Final 1234</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="pr-3">
          <p className="text-sm">R$ 1.000,00</p>
          <p className="text-right text-sm">Em 3x</p>
        </div>
        <IconChevronRight />
      </div>
    </div>
  );
}

{
  /* <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
<div className="flex items-center">
  <IconShoppingBag />
  <div className=" pl-3">
    <p className=" text-sm font-medium">Renner</p>
    <p className="text-sm">Adicional 5678 | Cartão Virtual</p>
  </div>
</div>
<div className="flex items-center">
  <div className="pr-3">
    <p className="text-sm">R$ 130,00</p>
    <p className="text-right text-sm">Em 12x</p>
  </div>
  <IconChevronRight />
</div>
</div> */
}
