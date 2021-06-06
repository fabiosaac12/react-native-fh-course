import React, {useState, FC} from 'react';
import {Product} from '../../models/ProductsResponse';
import {getProducts} from '../../api/cafe/requests/products';
import {ProductsContext} from './ProductsContext';

export const ProductsProvider: FC = ({children}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = async () => {
    try {
      const response = await getProducts();

      setProducts(response.products);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    products,
    loadProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
