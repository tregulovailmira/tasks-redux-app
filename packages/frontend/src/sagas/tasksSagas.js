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
  updateTaskError
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

export function * updateTaskSaga (data) {
  yield put(updateTaskRequest());

  try {
    const { data: { data: task } } = yield API.updateTask(data);
    console.log(task);
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(updateTaskError(error));
  }
}
