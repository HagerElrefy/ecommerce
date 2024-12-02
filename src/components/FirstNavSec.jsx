import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartLink from "./CartLink";
import { memo } from "react";

function FirstNavSec() {

    return (
        <div className='flex flex-col md:flex-row justify-between items-center border-b px-4 md:px-32 py-2'>
            <select aria-label="language" name="language" id="lang" className="mb-2 md:mb-0 text-sm md:text-base">
                <option value="en">EN</option>
                <option value="ar">AR</option>
            </select>
            <ul className="flex flex-col md:flex-row justify-between items-center gap-5 text-xl md:text-base">
                <li>
                    <NavLink
                        to=""
                        className='flex items-center gap-1'
                    >
                        <span className="text-lg"><FaRegUser /> </span> My profile
                    </NavLink>
                </li>
                <li>
                    <CartLink />
                </li>
            </ul>
        </div>
    );
}
export default memo(FirstNavSec)