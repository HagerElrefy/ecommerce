import { memo, useState } from "react";
import Products from "./Products";

function BestSellers() {
    const [category , setCategory] = useState('all');
    const handleCategory =()=>{

    }
    return (
        <>
        <h4 className="text-center mb-5 font-bold text-3xl">BEST SELLER</h4>
        <Products/>
        </>
    );
}
export default memo(BestSellers)