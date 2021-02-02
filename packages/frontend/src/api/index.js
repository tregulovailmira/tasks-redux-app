import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createTask = (data) => apiInstance.post('/tasks', data);

export const getTasks = () => apiInstance.get('/tasks');

export const updateTask = (data) => {
  const { payload: { task: { id }, task } } = data;
  return apiInstance.patch(`/tasks/${id}`, task);
};
