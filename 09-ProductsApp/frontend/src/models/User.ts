export interface User {
  rol: 'USER_ROLE' | 'ADMIN_ROLE';
  estado: boolean;
  google: boolean;
  nombre: string;
  correo: string;
  uid: string;
  img?: string;
}
