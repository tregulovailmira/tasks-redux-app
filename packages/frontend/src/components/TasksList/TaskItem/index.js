import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import * as taskActionCreators from '../../../actions/taskActionCreators';
import EditTaskForm from '../EditTaskForm';

export default function TaskItem (props) {
  const {
    task: { id, value, isDone, deadline, isEdit }, task
  } = props;

  const dispatch = useDispatch();
  const { updateTaskAction, deleteTaskAction, toggleIsEditTask } = bindActionCreators(taskActionCreators, dispatch);
  const toggleIsDoneTask = () => {
    const updatedTask = { ...task, isDone: !isDone };
    updateTaskAction(updatedTask);
  };
  const preparedDeadline = format(parseISO(deadline), 'dd/MM/yyyy HH:mm');

  const taskItem = <>
          <div>task: {value}</div>
          <div>isDone: {isDone.toString()}</div>
          <div>deadline: {preparedDeadline}</div>
          <input type="checkbox" checked={isDone} onChange={toggleIsDoneTask}/>
          <button onClick={() => deleteTaskAction(id)}>Delete task</button>
          <button onClick={() => toggleIsEditTask(id, true)}>Edit task</button>
        </>;

  return (
    <li>
      {isEdit
        ? <EditTaskForm task={task}/>
        : taskItem}
  </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      deadline: PropTypes.string.isRequired,
      isEdit: PropTypes.bool
    }
  ).isRequired
};
