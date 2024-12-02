import React from 'react';

export default function ProductsLoading() {
  return (
    <div className="bg-white h-96 rounded-md w-full flex flex-col gap-2 border-2 border-gray-200">
      <div className="h-52 w-full bg-gray-200 animate-pulse"></div>
      <div className='px-5 py-2 flex flex-col items-center gap-2'>
        <div className="bg-gray-200 w-1/2 h-5 animate-pulse rounded-full"></div>
        <div className="bg-white w-20 h-5 animate-pulse rounded-full"></div>
        <div className='flex justify-between items-center flex-wrap gap-5'>
          <div className="bg-gray-200 w-20 h-5 animate-pulse rounded-full"></div>
          <div className="bg-gray-200 w-36 h-5 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

