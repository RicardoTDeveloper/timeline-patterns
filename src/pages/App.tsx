import TransactionCard from "@/components/TransactionCard";
import { TransactionDetails } from "@/components/TransactionDetails";
import TransactionsCritical from "@/components/TransactionsCritical";
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
            <TransactionsCritical />

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
