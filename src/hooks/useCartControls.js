import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { editInCart, removeFromCart } from "../redux/slices/cartSlice";

function useCartControls({id,QTY,stock}) {
    const dispatch = useDispatch();
    const handleDelete = useCallback(() => {
        dispatch(removeFromCart(id))
    }, [dispatch,id]);
    const handleDecrease = useCallback(()=>{
        if (QTY>=2)
            dispatch(editInCart({id,QTY:--QTY})) 
    },[QTY,dispatch,id]);
    const handleIncrease = useCallback(()=>{
        if (QTY < stock)
            dispatch(editInCart({id,QTY:++QTY})) 
    },[QTY,dispatch,id,stock]);
  return [handleDelete,handleDecrease,handleIncrease];
}

export default useCartControls