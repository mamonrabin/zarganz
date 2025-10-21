
import ProductsSlider from '@/src/slider/ProductsSlider';
import React from 'react';

const RecientViewProducts = () => {
  return (
    <div className=''>
      <h2 className='text-center text-xl font-medium uppercase'>Recient view products</h2>

      <div className='py-8 mb-6'>
          <ProductsSlider />
        </div>
    </div>
  );
};

export default RecientViewProducts;