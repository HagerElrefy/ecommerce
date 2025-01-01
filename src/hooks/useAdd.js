import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/slices/cartSlice';
import { addProductToFavorites } from '../redux/slices/favoriteSlice';

function useAdd(product) {
    const dispatch = useDispatch();
    const handleAddToCart = useCallback((e) => {
        dispatch(addProductToCart({ ...product, QTY: 1 }));
        e.stopPropagation();
    }, [dispatch, product])
    const handleAddToFavorites = useCallback((e) => {
        dispatch(addProductToFavorites(product));
        e.stopPropagation();

    }, [dispatch, product])
  return [handleAddToCart,handleAddToFavorites]
}

export default useAdd