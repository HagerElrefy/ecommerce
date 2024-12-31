import { memo } from "react"
import React from 'react';

function SalesCardPlaceholder() {
  return (

    <>
      <div className="bg-gray-50 shadow-md relative w-full aspect-square py-5 px-2 md:px-3 lg:px-5 rounded-lg text-xs md:text-lg lg:text-xl flex flex-col justify-between">
        <div className="flex flex-wrap gap-1">
          <h2 className="font-bold w-2/3 text-gray-200 bg-gray-200 animate-pulse rounded-full">...</h2>
          <p className="font-medium md:font-semibold lg:font-bold absolute text-gray-200 bg-gray-200 animate-pulse rounded-full">...</p>
        </div>
        <div className="w-full aspect-[1.5] animate-pulse bg-gray-200"></div>
        <p className="font-medium md:font-semibold lg:font-bold absolut flex gap-2 flex-wrap w-full text-gray-200 bg-gray-200 animate-pulse rounded-full">
          ...
        </p>
      </div>
    </>

  )
}

export default memo(SalesCardPlaceholder)