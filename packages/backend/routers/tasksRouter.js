const { Router } = require('express');
const { taskController } = require('../controllers');
const { validateTask } = require('../middleware');

const tasksRouter = Router();

tasksRouter
  .route('/')
  .post(validateTask.validateOnCreate, taskController.createTask)
  .get(taskController.getAllTasks);

tasksRouter
  .route('/:taskId')
  .patch(validateTask.validateOnUpdate, taskController.updateTask)
  .delete(taskController.removeTask);

module.exports = tasksRouter;
