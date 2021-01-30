import React from 'react';

export default function TaskItem(props) {
  const {
    task: { value, isDone, deadline },
  } = props;

  return (
    <li>
      <div>task: {value}</div>
      <div>isDone: {isDone.toString()}</div>
      <div>deadline: {deadline}</div>
    </li>
  );
}
