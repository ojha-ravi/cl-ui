import axios from './index';

export default function login() {
  return axios.get('/login');
}
