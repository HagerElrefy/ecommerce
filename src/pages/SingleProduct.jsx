import React, { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import { useQuery } from 'react-query';
import axios from 'axios';



function SingleProduct() {
  const { id } = useParams();
  const fetchProduct = useCallback( async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  },[id])
  const { data, isLoading, error } = useQuery(['product',id], fetchProduct);

  return (
    <div className='mb-20 mt-10 px-12 md:px-20 lg:px-32'>
      <section>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error...</div>
        ) : (
          <ProductInfo {...data} />
        )}
      </section>
    </div>
  );
}

export default memo(SingleProduct);
