import {cafe} from '../cafe';
import {LoginResponse} from '../../../models/LoginResponse';
import {LoginData} from '../../../models/LoginData';
import {SignupData} from '../../../models/SignupData';

export const login = async ({email, password}: LoginData) => {
  const response = await cafe.post<LoginResponse>('auth/login', {
    correo: email,
    password,
  });

  return response.data;
};

export const signup = async ({email, password, name}: SignupData) => {
  const response = await cafe.post<LoginResponse>('usuarios', {
    nombre: name,
    correo: email,
    password,
    rol: 'USER_ROLE',
  });

  return response.data;
};

export const refreshToken = async () => {
  const response = await cafe.get<LoginResponse>('auth');

  return response.data;
};
