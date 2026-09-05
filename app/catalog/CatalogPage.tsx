'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api/campers';
import CamperList from '@/components/CamperList/CamperList';
import Sidebar, { type Filters } from '@/components/Sidebar/Sidebar';
import css from '@/app/catalog/CatalogPage.module.css';
import LoaderModal from '@/components/LoaderModal/LoaderModal';
import EmptyState from '@/components/EmptyState/EmptyState';

const initialFilters: Filters = {
  location: '',
};

const CatalogPage = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [sidebarKey, setSidebarKey] = useState(0);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
    isError,
  } = useInfiniteQuery({
    queryKey: ['campers', filters],
    queryFn: ({ pageParam }) =>
      getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      }),
    initialPageParam: 1,

    getNextPageParam: lastPage => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
  });

  const isInitialOrFilterLoading =
    isLoading || (isFetching && !isFetchingNextPage);

  const handleSearch = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    setSidebarKey(prev => prev + 1);
  };

  const handleViewAll = () => {
    setFilters(initialFilters);
    setSidebarKey(prev => prev + 1);
  };

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  if (!data) {
    return <LoaderModal />;
  }

  const campers = data.pages.flatMap(page => page.campers);

  return (
    <>
      {isInitialOrFilterLoading && <LoaderModal />}

      <section className={css.section}>
        <div className="container">
          <div className={css.catalog}>
            <Sidebar
              key={sidebarKey}
              onSearch={handleSearch}
            />

            {campers.length > 0 ? (
              <CamperList
                campers={campers}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                onLoadMore={() => fetchNextPage()}
              />
            ) : (
              <EmptyState
                onViewAll={handleViewAll}
                onClear={handleClearFilters}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default CatalogPage;
