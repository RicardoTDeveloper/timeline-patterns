import {
  IconChevronRight,
  IconChevronUp,
  IconCreditCard,
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
      <div className=" container pt-20 bg-zinc-50">
        <h1 className=" text-2xl font-medium">Linha do tempo de lançamentos</h1>

        <div className="flex my-4 items-center">
          <h4 className="text-sm">Filtrar exibição:</h4>

          {filters.map((filter, index) => (
            <div
              key={index}
              className=" border border-rose-500 hover:bg-rose-500 hover:cursor-pointer rounded-sm flex justify-center mx-3 p-1"
            >
              <p className="text-sm hover:text-white text-rose-500">{filter}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 mt-10">
          <div>
            <div className="flex justify-between my-3 items-center border-b pb-2 mb-6">
              <div className="flex">
                <IconExclamationTriangle />
                <p className="text-sm pl-3">Lançamentos críticos</p>
              </div>
              <div className="flex">
                <div className="rounded-full bg-fuchsia-800 py-0 px-2 mr-2">
                  <p className=" text-white rounded-full">2</p>
                </div>
                <IconChevronUp />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-3">Bloqueio de cartão (referido)</p>
              <p className="text-xs">04 de abril de 2023</p>

              <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                    <p className="text-sm text-right">Em 3x</p>
                  </div>
                  <IconChevronRight />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-sm mb-3">
                Requer confirmação de cliente (suspeito)
              </p>
              <p className="text-xs">04 de abril de 2023</p>

              <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                    <p className="text-sm text-right">Em 12x</p>
                  </div>
                  <IconChevronRight />
                </div>
              </div>
            </div>

            <div className=" mt-10 border p-2 rounded-2xl">
              <h4 className="text-lg my-3 font-medium">Demais lançamentos</h4>

              <div>
                <p className="text-xs">04 de abril de 2023</p>

                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 3x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>

                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 3x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>

                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 3x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>

                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 3x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>

                <p className="text-xs">04 de abril de 2023</p>
                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 12x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>
                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 12x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>
                <div className="flex items-center justify-between h-20 hover:bg-zinc-200 hover:cursor-pointer">
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
                      <p className="text-sm text-right">Em 12x</p>
                    </div>
                    <IconChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white h-72 mx-5 rounded-xl p-5">
              <h4 className=" text-md">Detalhes do lançamento</h4>
              <div className="flex justify-between mt-3">
                <p className=" text-xs font-light">
                  05 de maio de 2022 ás 22:42
                </p>
                <div className="flex">
                  <IconShoppingBag width={4} />
                  <p className=" text-xs font-light pl-3">Compras</p>
                </div>
              </div>
              <h4 className=" text-lg font-bold pt-1">
                [Negado] Mercado Livre
              </h4>
              <p className=" text-lg py-1">R$ 940,50</p>

              <div className="flex justify-between">
                <p className=" text-xs font-light">Em até 3x</p>
                <div className="flex">
                  <IconCreditCard />
                  <p className=" text-xs font-light pl-3">Final 1234</p>
                </div>
              </div>
              <div className="flex">
                <div className=" bg-red-600 mr-3 rounded-sm">
                  <p className="text-white text-xs p-1 ">
                    Bloqueio (referidas)
                  </p>
                </div>
                <div className=" border p-1 rounded-sm">
                  <p className="text-xs">Cartão virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
