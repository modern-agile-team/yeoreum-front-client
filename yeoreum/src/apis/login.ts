import axios from 'axios';
import { LoginData } from '../types/auth';

export const requestLogin = async ({ email, password }: LoginData) => {
  const { data } = await axios.post(`api/auth/login`, { email, password });
  return data;
};
