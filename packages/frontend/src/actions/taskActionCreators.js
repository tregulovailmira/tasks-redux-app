import ACTION_TYPES from './types';

// CREATE
export const createTaskAction = (data) => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
  data
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
export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION
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

export const deleteTaskSuccess = (id) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { id }
});

export const deleteTaskError = (error) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error }
});

export const toggleIsEditTask = (id, isEdit) => ({
  type: ACTION_TYPES.TOGGLE_IS_EDIT_TASK,
  payload: { isEdit, id }
});
