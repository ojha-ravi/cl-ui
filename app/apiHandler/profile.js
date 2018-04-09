import axios from './axios';

export default function getProfile(params) {
  return axios.get('/profile', { params });
}
