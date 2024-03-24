import { Transaction } from "@/services/core/transaction/Transaction";

export default function TransactionTime({ date }) {
  return <p className="text-xs">{new Transaction().formatDate(date)}</p>;
}
