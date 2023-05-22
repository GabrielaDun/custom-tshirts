import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  console.log(products);

  return (
    <section>
        {products.map (product =>
          <Product
          {...product}
          key = {product.id}
         />
      )}
    </section>
  );
};

export default Products;