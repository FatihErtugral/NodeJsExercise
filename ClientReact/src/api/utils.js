import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'},
});

export const makeRequest = (type, path, body) => {
  instance[type](path, body)
  .then(response => console.log(response))
  .catch(error => console.log(error));
};

instance.interceptors.response.use(
  response => response.data,
  error => {
    const code = error.response.data && error.response.data.code;
    return Promise.reject({
    code
  });}
);