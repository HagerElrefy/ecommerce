import { useCallback } from 'react';
import { memo, useState } from 'react'
import { IoMdStar } from 'react-icons/io';
import useDiscount from '../hooks/useDiscount';
import useSearchInFavOrCart from '../hooks/useSearchInFavOrCart';
// import IncrementAndDecrementProductCount from './IncrementAndDecrementProductCount';
import useAdd from '../hooks/useAdd';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

function ProductInfo(props) {
    const { id, title, images, rating, reviews, price, discountPercentage, availabilityStatus, category, brand, weight, dimensions } = props
    const productDetails = [
        { label: 'Brand', value: brand },
        { label: 'Weight', value: weight },
        { label: 'Width', value: dimensions.width },
        { label: 'Height', value: dimensions.height },
        { label: 'Depth', value: dimensions.depth },
    ];
    const [discount, priceBefore, priceAfter] = useDiscount(discountPercentage, price);
    const [picture, setPicture] = useState(images[0]);
    const [handleAddToCart, handleAddToFavorites] = useAdd(props);
    const handleChangePicture = useCallback((e) => {
        setPicture(e.target.src);
    }, []);
    const [findINFavorites] = useSearchInFavOrCart(id);
    return (
        <div className='flex flex-col md:flex-row justify-between w-full'>
            <div className='flex flex-col gap-5 md:w-1/2'>
                <div className='bg-gray-100 rounded-lg'>
                    <img src={picture} alt={title} className='w-full aspect-[1.5] object-contain' />
                </div>
                <div className='flex justify-between gap-3 items-center'>
                    {
                        images.map((pic, index) => (
                            <div key={index} className='flex-grow'>
                                <img src={pic} alt={`${pic} - ${index}`} onClick={handleChangePicture} className={`${pic === picture ? 'border-2 border-PrimaryBlue' : ''} ${(images.length > 1) ? ' w-full' : 'w-1/3'} bg-gray-100 h-28 object-contain`} />
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='flex flex-col md:w-1/2 md:ps-5 mt-5 md:m-0'>
                <div className='flex flex-col gap-3 pb-5 border-b-2'>
                    <p className='font-bold md:text-2xl lg:text-3xl'>{title}</p>
                    <div className='flex items-center gap-5 flex-wrap'>
                        <div className="flex lg:text-xl gap-1">
                            {[...Array(5)].map((_, index) => (
                                <IoMdStar
                                    key={index}
                                    className={index < Math.round(rating) ? 'text-yellow-300' : 'text-gray-300'}
                                />
                            ))}
                        </div>
                        <p className='text-gray-400 font-semibold'>{reviews.length} reviews</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 py-5 border-b-2'>
                    <div className='font-bold flex items-center gap-5'>
                        <h3 className="text-xl text-PrimaryBlue">
                            $ {priceAfter}
                        </h3>
                        <h3><span className='text-gray-300 line-through'>$ {price}</span> <span className='text-PrimaryOrange'>{discount}% off</span></h3>
                    </div>
                    <div className='flex justify-between md:w-1/2'><p className='text-gray-500'>Availability:</p> <p className='text-gray-700'>{availabilityStatus}</p></div>
                    <div className='flex justify-between md:w-1/2'><p className='text-gray-500'>Category:</p> <p className='text-gray-700'>{category}</p></div>
                </div>
                <div className="flex flex-col gap-3 py-5 border-b-2">
                    {productDetails
                        .filter((detail) => detail.value)
                        .map((detail, index) => (
                            <div key={index} className="flex justify-between md:w-1/2">
                                <p className="font-semibold text-gray-500">{detail.label}:</p>
                                <p className="font-medium text-gray-700">{detail.value}</p>
                            </div>
                        ))}
                </div>
                <div className="flex gap-3 items-center py-5 border-b-2">
                    {/* <div className='w-1/2'>                    
                        <IncrementAndDecrementProductCount productInfo={{ id, QTY: 1, stock, showInTable: true }} />
                    </div> */}
                    <button onClick={handleAddToCart} className='bg-PrimaryBlue bg-opacity-25 text-PrimaryBlue font-bold w-1/2 flex items-center justify-around py-3 hover:bg-opacity-100 hover:text-white'>
                        <IoCartOutline /> Add To Cart
                    </button>
                    <button onClick={handleAddToFavorites} className='text-center p-4 bg-PrimaryBlue bg-opacity-25 text-PrimaryBlue font-bold hover:bg-opacity-100 hover:text-white'>
                        {findINFavorites === -1 ? <FaRegHeart /> : <FaHeart />}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default memo(ProductInfo)