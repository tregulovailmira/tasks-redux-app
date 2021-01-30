const { Router } = require('express');
const { taskController } = require('../controllers');
const { validateTask } = require('../middleware');

const tasksRouter = Router();

tasksRouter
  .route('/')
  .post(validateTask.validateOnCreate, taskController.createTask)
  .get(taskController.getAllTasks);

module.exports = tasksRouter;
