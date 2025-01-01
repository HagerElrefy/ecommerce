import React, { memo, useCallback, useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import useDiscount from '../hooks/useDiscount';
import useNavigateToProducts from '../hooks/useNavigateToProducts';
import ProductHovered from './ProductHovered';


function ProductGridCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [discount, priceBefore, priceAfter] = useDiscount(product.discountPercentage, product.price)
    const handleMouseOver = useCallback(() => setIsHovered(true), []);
    const handleMouseOut = useCallback(() => setIsHovered(false), []);
    const handleGoToProduct = useNavigateToProducts(product.id);
    return (
        <div className="border-2 border-gray-100 rounded-md flex flex-col gap-3 text-center">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='relative'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className=" bg-gray-100 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="255" 
                    />
                <ProductHovered isHovered={isHovered} product={{...product, priceAfter}}/>
            </div>
            <div className='px-5 py-2 flex flex-col gap-2' onClick={handleGoToProduct}>
                <p className="font-semibold">{product.title.length > 23 ? `${product.title.slice(0, 23)}...` : product.title}</p>
                <div className="flex gap-1 justify-center px-3 text-xl">
                    {[...Array(5)].map((_, index) => (
                        <IoMdStar
                            key={index}
                            className={index < Math.round(product.rating) ? 'text-yellow-300' : 'text-gray-300'}
                        />
                    ))}
                </div>
                <div className='font-bold flex justify-between items-center flex-wrap'>
                    <h3 className="text-xl text-PrimaryBlue">
                        $ {priceAfter}
                    </h3>
                    <h3><span className='text-gray-300 line-through'>$ {priceBefore}</span> <span className='text-PrimaryOrange'>{discount}% off</span></h3>
                </div>

            </div>
        </div>
    );
}

export default memo(ProductGridCard);
