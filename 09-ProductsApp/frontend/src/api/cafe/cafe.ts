import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cafe = axios.create({
  baseURL: 'https://cafe-rnapp-backend.herokuapp.com/api',
});

cafe.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');

  config.headers['x-token'] = token;

  return config;
});
