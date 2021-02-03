import { put } from 'redux-saga/effects';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError
} from '../actions/taskActionCreators';

import * as API from '../api';

export function * createTaskSaga ({ data }) {
  yield put(createTaskRequest());

  try {
    const {
      data: { data: task }
    } = yield API.createTask(data);
    yield put(createTaskSuccess(task));
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export function * getTasksSaga () {
  yield put(getTasksRequest());

  try {
    const {
      data: { data: tasks }
    } = yield API.getTasks();
    yield put(getTasksSuccess(tasks));
  } catch (error) {
    yield put(getTasksError(error));
  }
}

export function * updateTaskSaga (action) {
  yield put(updateTaskRequest());

  try {
    const { data: { data: task } } = yield API.updateTask(action);
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(updateTaskError(error));
  }
}

export function * deleteTaskSaga (data) {
  yield put(deleteTaskRequest());
  try {
    const { data: { data: id } } = yield API.deleteTask(data);
    yield put(deleteTaskSuccess(id));
  } catch (error) {
    yield put(deleteTaskError(error));
  }
}
