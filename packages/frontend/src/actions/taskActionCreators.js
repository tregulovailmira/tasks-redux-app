import ACTION_TYPES from './types';

//CREATE
export const createTask = (data) => ({
  type: ACTION_TYPES.CREATE_TASK,
  data,
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = (data) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  data,
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

//GET
export const getTasks = () => ({
  type: ACTION_TYPES.GET_TASKS,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks,
});

export const getTasksError = (error) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error,
});
