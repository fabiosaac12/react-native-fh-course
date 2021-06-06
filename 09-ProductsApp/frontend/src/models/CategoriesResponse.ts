export interface CategoriesResponse {
  total: number;
  categorias: Category[];
}

export interface Category {
  _id: string;
  nombre: string;
  usuario: User;
}

interface User {
  _id: string;
  nombre: string;
}
