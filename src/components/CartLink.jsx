import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { memo } from "react";
import { useSelector } from "react-redux";

function CartLink() {
    const cartNumOfProducts = useSelector((state) => state.cart.cart);
    return (
        <NavLink className='relative' to="/cart">
            <span className="text-2xl"><IoCartOutline/></span>
            <span className="absolute -top-1 min-w-5 -right-2 text-center text-white rounded-full text-sm bg-DarkRed">{cartNumOfProducts.length}</span>
        </NavLink>
    )
}
export default memo(CartLink);
