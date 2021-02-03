import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createTask = (data) => apiInstance.post('/tasks', data);

export const getTasks = () => apiInstance.get('/tasks');

export const updateTask = async (action) => {
  const { payload: { task: { id }, task } } = action;
  return apiInstance.patch(`/tasks/${id}`, task);
};

export const deleteTask = (data) => {
  const { payload: { id } } = data;
  return apiInstance.delete(`/tasks/${id}`);
};
