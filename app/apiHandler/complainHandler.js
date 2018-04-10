import axios from './axios';

export function saveComplain(params) {
  return axios.post('/complain/save', { params });
}

export function uploadDocument({ file, name }) {
  const data = new FormData();
  data.append('file', file);
  data.append('name', name);

  return axios.post('/document/upload', data).then(res => res.data);
}

export function deleteDocument({ fileName }) {
  return axios
    .delete('/document/delete', {
      params: { fileName }
    })
    .then(res => res.data);
}
