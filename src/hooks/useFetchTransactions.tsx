import { getTransactions } from "@/services/apis/service.timeline";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { flatMapEvents } from "@/utils";
import { useFilters } from "@/store";
import _ from "lodash";
import { useEffect } from "react";

export const useFetchTransactions = () => {
  const filters = useFilters((state) => state.filters);

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["timeline", filters],
      queryFn: ({ pageParam }) => getTransactions(pageParam, filters),
      initialPageParam: 0,
      enabled: false,
      getNextPageParam: (lastPage) => {
        if (lastPage.paging.hasNextPage) {
          return lastPage.paging.actual.page + 1;
        }
        return undefined;
      },
    });

  useEffect(() => {
    fetchNextPage();
  }, [filters, fetchNextPage]);

  const InfiniteScrollRef = () => {
    const { ref, inView } = useInView({
      threshold: 0,
    });

    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }

    return <div ref={ref} />;
  };

  const alltransactions = flatMapEvents(data?.pages);

  return {
    InfiniteScrollRef,
    alltransactions,
    isFetchingNextPage,
    isFetching,
  };
};
