import React from 'react';

export default function TaskItem(props) {
  const {
    task: { task, isDone },
  } = props;
  console.log(task);
  console.log(isDone);

  return (
    <li>
      <div>task: {task}</div>
      <div>isDone: {isDone}</div>
    </li>
  );
}
