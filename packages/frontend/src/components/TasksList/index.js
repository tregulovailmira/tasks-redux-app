import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActionCreators from '../../actions/taskActionCreators';
import TaskItem from './TaskItem';

export default function TasksList () {
  const { tasks, isFetching, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { getTasksAction } = bindActionCreators(tasksActionCreators, dispatch);

  useEffect(() => {
    getTasksAction();
  }, []);
  return (
    <ul>
      {tasks && tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      {isFetching && <li>Loading...</li>}
      {error && <li>ERROR</li>}
    </ul>
  );
}
