import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function tasksReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST:
    case ACTION_TYPES.GET_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    }

    case ACTION_TYPES.CREATE_TASK_ERROR:
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      return {
        ...state,
        tasks: [...tasks, task],
        isFetching: false,
        error: false,
      };
    }

    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const { tasks } = action;

      return {
        ...state,
        tasks: tasks,
        isFetching: false,
        error: false,
      };
    }

    default: {
      return state;
    }
  }
}

export default tasksReducer;
