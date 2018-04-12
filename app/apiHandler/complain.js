import axios from './axios';

export function getAllComplain(params) {
  return axios.get('/complain/index', { params }).then(res => res.data);
}

export function showComplain(params) {
  return axios.get('/complain/show', { params }).then(res => res.data);
}

export function createComplain(params) {
  return axios.post('/complain/create', params).then(res => res.data);
}

export function updateComplain(params) {
  return axios.post('/complain/update', params).then(res => res.data);
}

export function deleteComplain(params) {
  return axios.post('/complain/delete', params).then(res => res.data);
}
