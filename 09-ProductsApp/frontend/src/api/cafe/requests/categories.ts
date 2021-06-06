import {cafe} from '../cafe';
import {CategoriesResponse} from '../../../models/CategoriesResponse';

export const getCategories = async () => {
  const response = await cafe.get<CategoriesResponse>('categorias');

  return {
    total: response.data.total,
    categories: response.data.categorias,
  };
};
