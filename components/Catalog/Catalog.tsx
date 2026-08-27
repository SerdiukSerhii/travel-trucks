'use client';

import { getCampers } from '@/lib/api/campers';
import { useInfiniteQuery } from '@tanstack/react-query';
import CamperList from '@/components/CamperList/CamperList';
import css from '@/components/Catalog/Catalog.module.css';

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
    <section className={css.section}>
      <div className={css.catalog}>
        {/* <Filters /> */}

        <CamperList
          campers={campers}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={() => fetchNextPage()}
        />
      </div>
    </section>
  );
};

export default Catalog;
