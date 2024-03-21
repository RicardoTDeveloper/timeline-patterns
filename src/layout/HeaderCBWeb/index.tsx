import { IconBell, IconUser } from "@/components/icons";

export default function HeaderCBWeb() {
  return (
    <header className="sticky top-0 bg-white">
      <section className="flex h-20 items-center justify-between">
        <div className="ml-10 flex items-center">
          <IconUser />
          <p className=" text-md pl-3">Atendimento ao cliente</p>
          <div className=" ml-3 w-40 rounded-full border border-sky-600 p-3">
            <p className=" text-center text-sm font-bold text-sky-600">
              Painel do cliente
            </p>
          </div>
        </div>
        <div className="mr-10  flex items-center">
          <div className=" mr-3 w-20 rounded-full border border-zinc-300 p-3 ">
            <p className=" text-center text-sm font-bold text-zinc-600">racf</p>
          </div>
          <IconBell />
        </div>
      </section>
      <section className="flex h-20 items-center justify-between bg-slate-500">
        <div className="ml-8 flex items-center">
          <p className=" pl-3 text-2xl font-bold text-white">Nome Sobrenome</p>
          <p className=" inline-block pl-5 text-center text-lg font-light text-white">
            CPF:
            <p className=" inline-block  pl-2 text-lg font-bold text-white">
              123.456.789-01
            </p>
          </p>
        </div>
        <div className="mr-10  flex items-center">
          <div className=" ml-3 w-52 rounded-full border border-white p-3">
            <p className=" text-center text-sm font-bold text-white">
              Ver dados completos
            </p>
          </div>
          <div className=" ml-3 w-52 rounded-full border border-rose-400 bg-rose-400 p-3">
            <p className=" text-center text-sm font-bold text-white">
              Encerrar atendimento
            </p>
          </div>
        </div>
      </section>
      <section className=" mx-60 flex h-20 items-center justify-evenly">
        <p className="text-md">Transações</p>
        <p className="text-md">Cartão</p>
        <p className="text-md">Fatura</p>
        <p className="text-md">Limite</p>
        <p className="text-md">Conta</p>
        <p className="text-md">Historico</p>
        <p className="text-md">Serviços</p>
      </section>
      <section></section>
    </header>
  );
}
