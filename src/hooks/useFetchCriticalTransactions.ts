import { getCriticalTransactions } from "@/services/apis/service.timeline";
import { countEvents, flatMapEvents } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useFetchCriticalTransactions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["criticalTransactions"],
    queryFn: getCriticalTransactions,
  });

  const alltransactionsCritical = flatMapEvents(data);
  const count = countEvents(alltransactionsCritical) ?? 0;

  return {
    isLoading,
    alltransactionsCritical,
    count,
  };
};
