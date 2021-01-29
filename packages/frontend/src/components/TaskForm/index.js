import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as tasksActionCreators from '../../actions/taskActionCreators';

const initialValues = {
  task: 'New Task',
  isDone: false,
};
function TaskForm() {
  const dispatch = useDispatch();

  const { createTask } = bindActionCreators(bindActionCreators, dispatch);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(value) => {
        createTask(value);
      }}
      task
    >
      {(formik) => (
        <Form>
          <Field name="task" />
          <Field name="isDone" />
          <button type="submit">Create task</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
