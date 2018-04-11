import axios from 'axios';

export function saveComplain(params) {
  return axios.post('/complain/save', params).then(res => res.data);
}

export function updateComplain(params) {
  return axios.post('/complain/update', params).then(res => res.data);
}
