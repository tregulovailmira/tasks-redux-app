import React from 'react';
import TaskForm from '../components/TaskForm';
import TasksList from '../components/TasksList';

export default function Tasks() {
  return (
    <div>
      <TaskForm />
      <TasksList />
    </div>
  );
}
