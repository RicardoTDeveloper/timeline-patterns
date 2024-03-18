import { IconCreditCard, IconShoppingBag } from "@/components/icons";

export default function TransactionDetails() {
  return (
    <div className=" mx-5 h-72 rounded-xl bg-white p-5">
      <h4 className=" text-md">Detalhes do lançamento</h4>
      <div className="mt-3 flex justify-between">
        <p className=" text-xs font-light">05 de maio de 2022 ás 22:42</p>
        <div className="flex">
          <IconShoppingBag width={4} />
          <p className=" pl-3 text-xs font-light">Compras</p>
        </div>
      </div>
      <h4 className=" pt-1 text-lg font-bold">[Negado] Mercado Livre</h4>
      <p className=" py-1 text-lg">R$ 940,50</p>

      <div className="flex justify-between">
        <p className=" text-xs font-light">Em até 3x</p>
        <div className="flex">
          <IconCreditCard />
          <p className=" pl-3 text-xs font-light">Final 1234</p>
        </div>
      </div>
      <div className="flex">
        <div className=" mr-3 rounded-sm bg-red-600">
          <p className="p-1 text-xs text-white ">Bloqueio (referidas)</p>
        </div>
        <div className=" rounded-sm border p-1">
          <p className="text-xs">Cartão virtual</p>
        </div>
      </div>
    </div>
  );
}
