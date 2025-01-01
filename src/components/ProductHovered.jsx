import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/cartSlice";
import { addProductToFavorites } from "../redux/slices/favoriteSlice";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import useAdd from "../hooks/useAdd";

function ProductHovered({ isHovered, product }) {
    const  [handleAddToCart,handleAddToFavorites] = useAdd(product);
    return (
        <div className={`absolute top-5 bottom-5 right-2 left-2 bg-white bg-opacity-95 flex flex-col gap-2 md:flex-row justify-center items-center text-PrimaryBlue ${isHovered ? 'flex' : 'hidden'}`}>
            <button className='p-2 text-lg rounded-full border-2 hover:text-white hover:bg-PrimaryBlue' onClick={handleAddToFavorites}><FaRegHeart /></button>
            <button className='p-2 text-lg rounded-full border-2 hover:text-white hover:bg-PrimaryBlue' onClick={handleAddToCart}><IoCartOutline /></button>
        </div>
    );
}
export default memo(ProductHovered);