import { memo } from "react";
import useDiscount from "../hooks/useDiscount";
import React from 'react';

function SalesCard({ product, positionStyles }) {
  const [discount, priceBefore, priceAfter] = useDiscount(product.discountPercentage, product.price);

  // useEffect(() => {
  //   const link = document.createElement("link");
  //   link.rel = "preload";
  //   link.as = "image";
  //   link.href = product.thumbnail;
  //   document.head.appendChild(link);

  //   return () => document.head.removeChild(link);
  // }, [product.thumbnail]);

  return (
    <div className="bg-gray-50 shadow-md relative w-full aspect-square py-5 px-2 md:px-3 lg:px-5 rounded-lg text-xs md:text-lg lg:text-xl flex flex-col justify-between">
      <h2 className="font-bold w-2/3">{product.title}</h2>
      <div className="flex-1 flex items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full aspect-[1.5] object-contain"
          // width="300"
          // height="255"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className={`font-medium md:font-semibold lg:font-bold absolute ${positionStyles.discountPos} flex gap-2 flex-wrap`}>
        <span className="text-gray-600 line-through">${priceBefore}</span>
        <span className="text-PrimaryOrange">{discount}% Off</span>
      </p>
      <p className={`font-medium md:font-semibold lg:font-bold absolute ${positionStyles.pricePos} text-PrimaryBlue`}>
        ${priceAfter}
      </p>
    </div>
  );
}

export default memo(SalesCard);
