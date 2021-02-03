import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as tasksActionCreators from '../../../actions/taskActionCreators';

export default function EditTaskForm ({ task: { id, value, deadline } }) {
  const dispatch = useDispatch();
  const { updateTaskAction, toggleIsEditTask } = bindActionCreators(tasksActionCreators, dispatch);
  const initialValues = {
    value,
    deadline
  };

  const updateTask = ({ isEdit, ...editedTask }) => {
    updateTaskAction({ ...editedTask, id });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(editedTask) => updateTask(editedTask)}>
        <Form>
            <Field name="value"/>
            <Field name="deadline"/>
            <button type="submit">Apply</button>
            <button onClick={() => toggleIsEditTask(id, false)}>Cancel</button>
        </Form>
    </Formik>
  );
}

EditTaskForm.propTypes = {
  task: PropTypes.shape({
    value: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })

};
