import axios from './index';

export default function login(params) {
  return axios.get('/login', {
    params
  });
}
