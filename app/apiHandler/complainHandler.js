import axios from './axios';

export function saveComplain(params) {
  return axios.post('/complain/save', { params });
}

export function uploadDocument({ file, name }) {
  // eslint-disable-next-line
  let data = new FormData();
  data.append('file', file);
  data.append('name', name);

  return axios.post('/complain/save', data);
}
