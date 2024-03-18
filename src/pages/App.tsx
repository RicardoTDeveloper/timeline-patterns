import TransactionDetails from "@/components/TransactionDetails";
import {
  IconChevronRight,
  IconChevronUp,
  IconExclamationTriangle,
  IconShoppingBag,
} from "@/components/icons";

export default function App() {
  const filters = [
    "fatura",
    "confirmados",
    "limite",
    "negados",
    "contestados",
    "com bloqueio (referidos)",
    "em análise",
    "pendentes",
    "cancelados",
    "rejeitados",
  ];

  return (
    <>
      <div className=" container bg-zinc-50 pt-20">
        <h1 className=" text-2xl font-medium">Linha do tempo de lançamentos</h1>

        <div className="my-4 flex items-center">
          <h4 className="text-sm">Filtrar exibição:</h4>

          {filters.map((filter, index) => (
            <div
              key={index}
              className=" mx-3 flex justify-center rounded-sm border border-rose-500 p-1 hover:cursor-pointer hover:bg-rose-500"
            >
              <p className="text-sm text-rose-500 hover:text-white">{filter}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2">
          <div>
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
              <p className="text-xs">04 de abril de 2023</p>

              <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
                <div className="flex items-center">
                  <IconShoppingBag />
                  <div className=" pl-3">
                    <p className=" text-sm font-medium">
                      [Negado] Mercado Livre
                    </p>
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
            </div>

            <div className="flex flex-col">
              <p className="mb-3 text-sm">
                Requer confirmação de cliente (suspeito)
              </p>
              <p className="text-xs">04 de abril de 2023</p>

              <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
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
              </div>
            </div>

            <div className=" mt-10 rounded-2xl border p-2">
              <h4 className="my-3 text-lg font-medium">Demais lançamentos</h4>

              <div>
                <p className="text-xs">04 de abril de 2023</p>

                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
                  <div className="flex items-center">
                    <IconShoppingBag />
                    <div className=" pl-3">
                      <p className=" text-sm font-medium">
                        [Negado] Mercado Livre
                      </p>
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

                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
                  <div className="flex items-center">
                    <IconShoppingBag />
                    <div className=" pl-3">
                      <p className=" text-sm font-medium">
                        [Negado] Mercado Livre
                      </p>
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

                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
                  <div className="flex items-center">
                    <IconShoppingBag />
                    <div className=" pl-3">
                      <p className=" text-sm font-medium">
                        [Negado] Mercado Livre
                      </p>
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

                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
                  <div className="flex items-center">
                    <IconShoppingBag />
                    <div className=" pl-3">
                      <p className=" text-sm font-medium">
                        [Negado] Mercado Livre
                      </p>
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

                <p className="text-xs">04 de abril de 2023</p>
                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
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
                </div>
                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
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
                </div>
                <div className="flex h-20 items-center justify-between hover:cursor-pointer hover:bg-zinc-200">
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
                </div>
              </div>
            </div>
          </div>
          <div>
            <TransactionDetails />
          </div>
        </div>
      </div>
    </>
  );
}
