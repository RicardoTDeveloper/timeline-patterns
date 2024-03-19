export function TransactionDetailsRoot({ children }) {
  return (
    <div className=" mx-5 rounded-xl bg-white p-5">
      <h4 className=" text-md">Detalhes do lançamento</h4>
      {children}
    </div>
  );
}
