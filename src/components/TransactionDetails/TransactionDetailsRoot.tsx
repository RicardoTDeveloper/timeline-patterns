import { DetailsProvider } from "@/context";
import { ReactNode } from "react";

//TODO: Criar transações lateral no container details ao clicar
export function TransactionDetailsRoot({ children }: { children: ReactNode }) {
  return (
    <DetailsProvider>
      <div className=" mx-5 rounded-xl bg-white p-5">
        <h4 className=" text-md">Detalhes do lançamento</h4>
        {children}
      </div>
    </DetailsProvider>
  );
}
