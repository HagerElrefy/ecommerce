import { memo, useCallback, useState } from "react";
import Products from "./Products";
import React from 'react';
import { useInfiniteQuery } from "react-query";
import axios from "axios";
const Loading = () => {
    return (
        <div className="text-PrimaryBlue h-96 w-full flex items-center justify-center">
            <h3 className="border-b-2 border-PrimaryBlue inline text-xl">LOADING....</h3>
        </div>
    );
};
function BestSellers() {
    const limit = 8;
    const [category, setCategory] = useState('all');
    const categories = ['All', 'Beauty', 'Furniture', 'Vehicle', 'Smartphones']
    const handleCategory = useCallback((e) => {
        setCategory(e.target.value);
    }, [])
    const fetchData = async ({ pageParam = 0 }) => {
        const response = category === 'all' ?
        await axios.get(
            `https://dummyjson.com/products?skip=${pageParam}&limit=${limit}`
        ) 
        : 
        await axios.get(
            `https://dummyjson.com/products/category/${category.toLocaleLowerCase()}?skip=${pageParam}&limit=${limit}`
        )
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
        ["products" , category],
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

    return (
        <>
            <h3 className="text-center mb-5 font-bold text-3xl">BEST SELLER</h3>
            <div className="flex flex-col justify-center gap-5 my-5 md:flex-row">{
                categories.map((categ, index) => (
                    <button key={index} className={`${categ.toLocaleLowerCase() === category && 'text-PrimaryBlue border-b-2 border-PrimaryBlue font-semibold'} text-lg`} onClick={handleCategory} value={categ.toLocaleLowerCase()}>{categ}</button>
                ))
            }</div>
            {
                status === "loading"
                    ? <Loading />
                    : status === "error"
                        ? <p>An error has occurred: {error.message}</p>
                        : <Products products={data} />
            }

            {hasNextPage && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={handleNextFetch}
                        disabled={isFetchingNextPage}
                        className={`font-bold text-PrimaryBlue border-PrimaryBlue border-b-2 ${isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isFetchingNextPage ? "Loading..." : "Load More"}
                    </button>
                </div>
            )}
        </>
    );
}
export default memo(BestSellers)