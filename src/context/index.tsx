/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext } from "react";
import { Details } from "@/services/Details";

export const DetailsContext = createContext<Details | null>(null);

export function DetailsProvider({ children }: { children: ReactNode }) {
  // useQuery para fazer o fetch dos detalhes
  // zuztand aquii para enviar para o usQuery qual lancamento foi clicado
  // Criar um skeleton para carregar enquanto o fetch não é feito

  //   if (isLoading) {
  //     return <Skekleton />
  //   }

  return (
    <DetailsContext.Provider value={new Details("teste")}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetails() {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetails must be used within a DetailsProvider");
  }
  return context;
}
