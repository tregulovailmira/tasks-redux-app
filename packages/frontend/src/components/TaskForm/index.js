import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksActionCreators from '../../actions/taskActionCreators';

const initialValues = {
  value: '',
  deadline: '',
  isDone: false
};
function TaskForm () {
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
          <Field name="value" placeholder="New Task" />
          <Field name="deadline" placeholder="02/05/2025 17:20" />
          <button type="submit">Create task</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
