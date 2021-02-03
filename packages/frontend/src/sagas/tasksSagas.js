import { put } from 'redux-saga/effects';
import {
  createTaskSuccess,
  createTaskError,
  getTasksSuccess,
  getTasksError,
  updateTaskSuccess,
  updateTaskError,
  deleteTaskSuccess,
  deleteTaskError
} from '../actions/taskActionCreators';

import * as API from '../api';

export function * createTaskSaga ({ data }) {
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
  try {
    const { data: { data: task } } = yield API.updateTask(action);
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(updateTaskError(error));
  }
}

export function * deleteTaskSaga (data) {
  try {
    const { data: { data: id } } = yield API.deleteTask(data);
    yield put(deleteTaskSuccess(id));
  } catch (error) {
    yield put(deleteTaskError(error));
  }
}
