import { useState } from "react";
import TransactionCard from "../TransactionCard";
import TransactionTime from "../TransactionTime";
import { IconChevronUp, IconExclamationTriangle } from "../icons";

export default function TransactionsCritical() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSection = () => {
    setIsOpen(!isOpen);
  };

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
            <p className=" rounded-full text-white">2</p>
          </div>
          <IconChevronUp />
        </div>
      </div>
      <section className={`${isOpen ? "block" : "hidden"}`}>
        <div className="none flex flex-col">
          <p className="mb-3 text-sm">Bloqueio de cartão (referido)</p>
          <TransactionTime />
          <TransactionCard establishment="Mercado Livre" />
        </div>

        <div className="flex flex-col">
          <p className="mb-3 text-sm">
            Requer confirmação de cliente (suspeito)
          </p>
          <TransactionTime />
          <TransactionCard establishment="Mercado Livre" />
        </div>
      </section>
    </>
  );
}
