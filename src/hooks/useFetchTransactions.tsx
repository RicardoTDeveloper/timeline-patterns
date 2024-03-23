import { getTransactions } from "@/services/apis/service.timeline";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export const useFetchTransactions = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["projects"],
      queryFn: ({ pageParam }) => getTransactions(pageParam, "next"),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.paging.hasNextPage) {
          return lastPage.paging.actual.page + 1;
        }
        return undefined;
      },
    });

  const InfiniteScrollRef = () => {
    const { ref, inView } = useInView({
      threshold: 0,
    });

    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }

    return <div ref={ref} />;
  };

  return {
    InfiniteScrollRef,
    data,
  };
};
