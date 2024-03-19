import {
  IconChevronRight,
  IconChevronUp,
  IconExclamationTriangle,
  IconShoppingBag,
} from "@/components/icons";
import TransactionCard from "@/components/TransactionCard";
import { TransactionDetails } from "@/components/TransactionDetails";
import TransactionTime from "@/components/TransactionTime";
import Body from "@/layout/Body";
import Header from "@/layout/Header";

//TODO: Criar duas classes uma Lancançamentos e suas variantes e outra Detalhes e suas variantes
export default function App() {
  return (
    <>
      <div className=" container bg-zinc-50 pt-20">
        <Header />

        <div className="mt-10 grid grid-cols-2">
          <Body>
            <div className="my-3 mb-6 flex items-center justify-between border-b pb-2">
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
            <div className="flex flex-col">
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

            <div className=" mt-10 rounded-2xl border p-2">
              <h4 className="my-3 text-lg font-medium">Demais lançamentos</h4>

              <div>
                <TransactionTime />
                {new Array(3).fill(0).map((_, index) => (
                  <TransactionCard key={index} establishment="Mercado Livre" />
                ))}

                <TransactionTime />
                {new Array(3).fill(0).map((_, index) => (
                  <TransactionCard key={index} establishment="Mercado Livre" />
                ))}
              </div>
            </div>
          </Body>
          <Body>
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
