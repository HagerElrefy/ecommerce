import { memo, useState } from "react";
import Products from "./Products";
import React from 'react';

function BestSellers() {
    const [category , setCategory] = useState('all');
    const handleCategory =()=>{

    }
    return (
        <>
        <h3 className="text-center mb-5 font-bold text-3xl">BEST SELLER</h3>
        <Products/>
        </>
    );
}
export default memo(BestSellers)