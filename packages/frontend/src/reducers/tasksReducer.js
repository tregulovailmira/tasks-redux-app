import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null
};

function tasksReducer (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST:
    case ACTION_TYPES.GET_TASKS_REQUEST:
    case ACTION_TYPES.UPDATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: false
      };
    }

    case ACTION_TYPES.CREATE_TASK_ERROR:
    case ACTION_TYPES.GET_TASKS_ERROR:
    case ACTION_TYPES.UPDATE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { data } = action;
      const { tasks } = state;
      return {
        ...state,
        tasks: [...tasks, data],
        isFetching: false,
        error: false
      };
    }

    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;

      return {
        ...state,
        tasks,
        isFetching: false,
        error: false
      };
    }

    case ACTION_TYPES.UPDATE_TASK_SUCCESS: {
      const { payload: { task } } = action;
      const { tasks } = state;

      const updatedTasks = tasks.map((t) => task.id === t.id ? task : t);
      return {
        ...state,
        tasks: updatedTasks,
        isFetching: false,
        error: false
      };
    }

    default: {
      return state;
    }
  }
}

export default tasksReducer;
