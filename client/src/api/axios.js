import axios from 'axios';
import { SERVER_PATH } from '../config/env/env';

axios.defaults.baseURL = SERVER_PATH;

axios.interceptors.request.use(
  function (config) {
    config.timeout = 35000;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const method = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default method;
