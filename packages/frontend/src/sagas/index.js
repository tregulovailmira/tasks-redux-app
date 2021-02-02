import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTasksSaga, updateTaskSaga } from './tasksSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS, getTasksSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_ACTION, updateTaskSaga);
}

export default rootSaga;
