import {env} from '../env/env';
import {baseServices} from '../services/baseServices';

export const getUsers = () => {
  return baseServices.get(env.api, 'users');
};

export const getUserByID = id => {
  return baseServices.get(env.api, 'users/' + id);
};

export const createUser = userData => {
  return baseServices.post(env.api, 'users', userData);
};
