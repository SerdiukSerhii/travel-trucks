'use client';

import { getCampers } from '@/lib/api/campers';
import { useInfiniteQuery } from '@tanstack/react-query';
import CamperList from '@/components/CamperList/CamperList';

const Catalog = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['campers'],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
      }),

    initialPageParam: 1,
    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Something went wrong...</p>;
  }

  const campers = data.pages.flatMap(page => page.campers);

  return (
    <section>
      <h1>Campers</h1>

      <CamperList campers={campers} />

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </section>
  );
};

export default Catalog;
