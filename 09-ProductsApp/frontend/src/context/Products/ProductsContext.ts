import {createContext} from 'react';
import {Product} from '../../models/ProductsResponse';

interface ContextProps {
  products: Product[];
  loadProducts: () => void;
}

export const ProductsContext = createContext<ContextProps>({} as ContextProps);
