import {cafe} from '../cafe';
import {ProductsResponse, Product} from '../../../models/ProductsResponse';

export const getProducts = async () => {
  const response = await cafe.get<ProductsResponse>('productos?limite=1000');

  return {
    total: response.data.total,
    products: response.data.productos,
  };
};

export const getProductById = async (id: string) => {
  const response = await cafe.get<Product>(`productos/${id}`);

  return response.data;
};

export const createProduct = async ({name, categoryId}: CreateProductData) => {
  const response = await cafe.post<Product>('productos', {
    nombre: name,
    categoria: categoryId,
  });

  return response.data;
};

export const editProduct = async (
  id: string,
  {name, categoryId}: CreateProductData,
) => {
  const response = await cafe.put<Product>(`productos/${id}`, {
    nombre: name,
    categoria: categoryId,
  });

  return response.data;
};

export const uploadImage = async (
  id: string,
  image: {
    uri: string;
    type: string;
    name: string;
  },
) => {
  console.log(id, image);

  const formData = new FormData();
  formData.append('archivo', image);

  try {
    const response = await cafe.put<Product>(
      `uploads/productos/${id}`,
      formData,
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
