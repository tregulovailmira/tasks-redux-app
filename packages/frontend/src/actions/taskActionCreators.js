import ACTION_TYPES from './types';

// CREATE
export const createTask = (data) => ({
  type: ACTION_TYPES.CREATE_TASK,
  data
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST
});

export const createTaskSuccess = (data) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  data
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error
});

// GET
export const getTasks = () => ({
  type: ACTION_TYPES.GET_TASKS
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST
});

export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks
});

export const getTasksError = (error) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error
});

// UPDATE
export const updateTaskAction = (task) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK_ACTION,
    payload: { task }
  };
};

export const updateTaskRequest = () => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST
});

export const updateTaskSuccess = (task) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
    payload: { task }
  };
};

export const updateTaskError = (error) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error }
});

export const deleteTaskAction = (id) => ({
  type: ACTION_TYPES.DELETE_TASK_ACTION,
  payload: { id }
});

export const deleteTaskRequest = () => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST
});

export const deleteTaskSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id }
});

export const deleteTaskError = (error) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error }
});
