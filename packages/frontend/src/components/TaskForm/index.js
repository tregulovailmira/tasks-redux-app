import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActionCreators from '../../actions/taskActionCreators';

const initialValues = {
  value: 'New Task',
  isDone: false,
  deadline: new Date().toLocaleDateString(),
};
function TaskForm() {
  const dispatch = useDispatch();

  const { createTask } = bindActionCreators(tasksActionCreators, dispatch);

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
          <Field name="value" />
          <Field name="isDone" />
          <Field name="deadline" />
          <button type="submit">Create task</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
