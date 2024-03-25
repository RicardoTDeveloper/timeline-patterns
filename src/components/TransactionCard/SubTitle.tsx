type SubTitleProps = {
  title: "requerConfirmacaoDoCliente" | "comBloqueio";
};

export function SubTitle({ title }: SubTitleProps) {
  return (
    <>
      {title === "requerConfirmacaoDoCliente" && (
        <p className="mt-3 text-sm">Requer confirmação do cliente (suspeito)</p>
      )}
      {title === "comBloqueio" && (
        <p className="mt-3 text-sm">Bloqueio de cartão (referido)</p>
      )}
    </>
  );
}
