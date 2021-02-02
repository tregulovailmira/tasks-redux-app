import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as taskActionCreators from '../../../actions/taskActionCreators';

export default function TaskItem (props) {
  const {
    task: { value, isDone, deadline }, task
  } = props;

  const dispatch = useDispatch();
  const { updateTaskAction } = bindActionCreators(taskActionCreators, dispatch);
  const toggleIsDoneTask = () => {
    const updatedTask = { ...task, isDone: !isDone };
    updateTaskAction(updatedTask);
  };
  return (
    <li>
      <div>task: {value}</div>
      <div>isDone: {isDone.toString()}</div>
      <div>deadline: {deadline}</div>
      <input type="checkbox" value={isDone} onChange={toggleIsDoneTask}/>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      deadline: PropTypes.string.isRequired
    }
  ).isRequired

};
