import axios from './axios';

export function uploadDocument({ file, name, complainId }) {
  const data = new FormData();
  data.append('file', file);
  data.append('name', name);
  data.append('complainId', complainId);

  return axios.post('/document/upload', data).then(res => res.data);
}

export function deleteDocument({ fileName }) {
  return axios
    .delete('/document/delete', {
      params: { fileName }
    })
    .then(res => res.data);
}
