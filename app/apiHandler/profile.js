import axios from './index';

export default function getProfile(params) {
  return axios.get('/profile', { params });
}
