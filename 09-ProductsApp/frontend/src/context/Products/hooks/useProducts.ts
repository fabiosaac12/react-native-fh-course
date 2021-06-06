import {useContext} from 'react';
import {ProductsContext} from '../ProductsContext';

export const useProducts = () => useContext(ProductsContext);
