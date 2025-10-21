
import ProductsSlider from '@/src/slider/ProductsSlider';
import React from 'react';

const ReletiveProducts = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-center text-xl font-medium uppercase'>You may also like</h2>

      <div className='py-8 mb-6'>
          <ProductsSlider/>
        </div>
    </div>
  );
};

export default ReletiveProducts;