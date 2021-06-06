export interface ProductsResponse {
  total: number;
  productos: Product[];
}

export interface Product {
  precio: number;
  _id: string;
  nombre: string;
  categoria: Category;
  usuario: Category;
  img: string;
}

export interface Category {
  _id: string;
  nombre: string;
}
