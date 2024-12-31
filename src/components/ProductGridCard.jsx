import React, { memo, useCallback, useState } from 'react';
import { IoMdStar } from 'react-icons/io';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addProductToFavorites } from '../redux/slices/favoriteSlice';
import { addProductToCart } from '../redux/slices/cartSlice';
import useDiscount from '../hooks/useDiscount';

function ProductHovered({ isHovered, product , }) {
    const dispatch = useDispatch();
    const handleAddToCart = useCallback(()=>dispatch(addProductToCart({...product , QTY:1})),[dispatch,product])
    const handleAddToFavorites = useCallback(()=>dispatch(addProductToFavorites(product)),[dispatch,product])
    return (
        <div className={`absolute top-5 bottom-5 right-2 left-2 bg-white bg-opacity-95 flex flex-col gap-2 md:flex-row justify-center items-center text-PrimaryBlue ${isHovered ? 'flex' : 'hidden'}`}>
            <button className='p-2 text-lg rounded-full border-2 hover:text-white hover:bg-PrimaryBlue' onClick={handleAddToFavorites}><FaRegHeart /></button>
            <button className='p-2 text-lg rounded-full border-2 hover:text-white hover:bg-PrimaryBlue' onClick={handleAddToCart}><IoCartOutline /></button>
        </div>
    );
}

function ProductGridCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [discount, priceBefore, priceAfter] = useDiscount(product.discountPercentage, product.price)

    const handleMouseOver = useCallback(() => setIsHovered(true), []);
    const handleMouseOut = useCallback(() => setIsHovered(false), [])
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
            <div className='px-5 py-2 flex flex-col gap-2'>
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
