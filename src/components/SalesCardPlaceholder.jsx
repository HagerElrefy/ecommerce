import { memo } from "react"
import React from 'react';

function SalesCardPlaceholder({ positionStyles }) {
  return (
    <div className="bg-white p-2 sm:p-4 rounded-2xl shadow-lg w-full flex flex-col gap-2 aspect-[.7] relative">
    <div className="bg-gray-200 w-2/3 h-5 animate-pulse rounded-full" ></div>
    <div className="aspect-square w-full rounded-xl bg-gray-200 animate-pulse" ></div>
    <div className={`bg-gray-200 w-20 h-5 animate-pulse rounded-full absolute ${positionStyles && positionStyles.pricePos}`} ></div>
    <div className={`bg-gray-200 w-1/2 h-5 animate-pulse rounded-full absolute ${positionStyles && positionStyles.discountPos}`}></div>
  </div>
  )
}

export default memo(SalesCardPlaceholder)