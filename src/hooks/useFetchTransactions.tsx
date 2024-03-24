import { getTransactions } from "@/services/apis/service.timeline";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import _ from "lodash";

export const useFetchTransactions = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
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

  const alltransactions = _.chain(data?.pages)
    .flatMap((item) =>
      _.flatMap(item.items, (subItem) => [
        { date: subItem.date },
        ...subItem.events.map((event) => ({ ...event, date: subItem.date })),
      ]),
    )
    .value();

  return {
    InfiniteScrollRef,
    alltransactions,
    isFetchingNextPage,
    isFetching,
  };
};
