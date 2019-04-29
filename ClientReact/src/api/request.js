import {makeRequest} from './utils';

export const loginApi = (username, password) => {
  makeRequest('post', '/login',{
    username,
    password
  });
};

export const logoutApi = () => {
  makeRequest('post', '/logout');
};

export const registerApi = (username, password, firstname, lastname, email) => {
  makeRequest('post', '/register',{
      username,
      password,
      firstname,
      lastname,
      email,
  });
};