import { memo } from "react";
import ProductGridCard from "./ProductGridCard";
import React from "react";

function Products({ products }) {
    return (
        <div className="mb-20">
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.pages.flatMap((page) =>
                    page.items.map((product) => (
                        <ProductGridCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
}

export default memo(Products);

