import axios from 'axios';
import React, { lazy, memo, Suspense, useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import SalesCardPlaceholder from './SalesCardPlaceholder';
import { TiArrowSortedUp } from "react-icons/ti";
import useResponsiveLimit from '../hooks/useResponsiveLimit';

const SalesCard = lazy(() => import('./SalesCard'));

const positionStyles = {
  1: { discountPos: "bottom-5", pricePos: "bottom-5 end-2 md:end-3 lg:end-5" },
  2: { discountPos: "bottom-5 start-1/4 lg:start-1/3", pricePos: "top-5 end-2 md:end-3 lg:end-5" },
  3: { discountPos: "top-5 lg:top-20 end-2 md:end-3 lg:end-5 lg:start-5", pricePos: "bottom-5 end-2 md:end-3 lg:end-5" },
};

const PlaceholderComponent = ({ limit }) => {
  const getPositionStyles = (index) => positionStyles[(index % 3) + 1];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 px-6 sm:px-12 md:px-20 lg:px-32">
      {Array.from({ length: limit }).map((_, index) => (
        <SalesCardPlaceholder key={index} positionStyles={getPositionStyles(index)} />
      ))}
    </div>
  );
};

function SuperSaleSection() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const limit = useResponsiveLimit();

  const fetchData = useCallback(async ({ pageParam = 0 }) => {
    const response = await axios.get(
      `https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=${limit}&skip=${pageParam}`
    );
    return response.data.products;
  }, [limit]);

  const {
    data: salesProducts,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    error,
    refetch,
  } = useInfiniteQuery(['sales', limit], fetchData, {
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length > 0) return allPages.length * lastPage.length;
      return undefined;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      if (allPages.length > 1) return (allPages.length - 2) * firstPage.length;
      return undefined;
    },
  });

  // Reset pagination and refetch data when the limit changes
  useEffect(() => {
    setCurrentPageIndex(0); // Reset current page index
    refetch(); // Refetch data with new limit
  }, [limit, refetch]);

  const handleNext = () => {
    if (hasNextPage) {
      setCurrentPageIndex((prev) => prev + 1);
      fetchNextPage();
    }
  };

  const handlePrev = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
      fetchPreviousPage();
    }
  };

  return (
    <div dir='ltr' className="mt-20 sm:-mt-5 md:-mt-10 lg:-mt-24 flex lg:justify-between items-center gap-2 px-6 sm:px-12 md:px-20 lg:px-32">
      <button
        onClick={handlePrev}
        disabled={currentPageIndex === 0 || isFetchingPreviousPage}
        className="rounded-full px-2 py-1 text-gray-400 hover:shadow-sm -rotate-90 hover:bg-gray-50"
        id='prev'
        aria-label="previous"
      >
        <TiArrowSortedUp />
      </button>
      {isLoading || isFetchingNextPage || isFetchingPreviousPage ? (
        <PlaceholderComponent limit={limit} />
      ) : error ? (
        `An error has occurred: ${error?.message || 'Unknown error'}`
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {salesProducts.pages[currentPageIndex]?.map((product, index) => (
            <div key={product.id}>
              <Suspense
                fallback={
                  <SalesCardPlaceholder
                    key={index}
                    positionStyles={positionStyles[index + 1]}
                  />
                }
              >
                <SalesCard
                  product={product}
                  positionStyles={positionStyles[index + 1]}
                />
              </Suspense>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleNext}
        disabled={!hasNextPage || isFetchingNextPage}
        className="rounded-full px-2 py-1 text-gray-400 hover:shadow-sm rotate-90 hover:bg-gray-50"
        id='next'
        aria-label='next'
      >
        <TiArrowSortedUp />
      </button>
    </div>
  );
}

export default memo(SuperSaleSection);
