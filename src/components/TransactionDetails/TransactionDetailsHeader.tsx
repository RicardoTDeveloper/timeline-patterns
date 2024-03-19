import { IconCreditCard, IconShoppingBag } from "@/components/icons";

export function TransactionDetailsHeader() {
  return (
    <>
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
    </>
  );
}
