export default function Header() {
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
    </>
  );
}
