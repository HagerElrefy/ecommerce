import axios from "axios";
import { memo, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import ProductGridCard from "./ProductGridCard";

const Loading = () => {
    return (
        <div className="text-PrimaryBlue h-96 w-full flex items-center justify-center">
            <h3 className="border-b-2 border-PrimaryBlue inline text-xl">LOADING....</h3>
        </div>
    );
};

function Products() {
    const limit = 8;
    const fetchData = async ({ pageParam = 0 }) => {
        const response = await axios.get(
            `https://dummyjson.com/products?skip=${pageParam}&limit=${limit}`
        );
        return {
            items: response.data.products,
            nextPage: pageParam + limit,
            total: response.data.total,
        };
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        error,
    } = useInfiniteQuery(
        ["products"],
        fetchData,
        {
            getNextPageParam: (lastPage, allPages) => {
                const totalFetched = allPages.reduce((acc, page) => acc + page.items.length, 0);
                return totalFetched < lastPage.total ? lastPage.nextPage : undefined;
            },
        }
    );

    const handleNextFetch = useCallback(() => {
        fetchNextPage();
    }, [fetchNextPage]);

    if (status === "loading") return <Loading />;
    if (status === "error")
        return <p>An error has occurred: {error.message}</p>;

    return (
        <div className="mb-20">
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-12 md:px-20 lg:px-32">
                {data.pages.flatMap((page) =>
                    page.items.map((product) => (
                        <ProductGridCard key={product.id} product={product} />
                    ))
                )}
            </div>
            {hasNextPage && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleNextFetch}
                        disabled={isFetchingNextPage}
                        className={`font-bold text-PrimaryBlue border-PrimaryBlue border-b-2 ${
                            isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    >
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default memo(Products);
