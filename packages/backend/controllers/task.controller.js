const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    console.log('body', body);
    const createdTask = await Task.create(body);
    console.log('createdTask:>> ', createdTask);
    res.status(201).send({ data: createdTask });
  } catch (error) {
    next(error);
  }
};

module.exports.getTask = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;

  try {
    const foundTask = await Task.findById(taskId);
    foundTask
      ? res.status(200).send({ data: foundTask })
      : res.status(404).send('The task not found');
  } catch (error) {
    next(error);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  const { body } = req;
  try {
    const foundTasks = await Task.findAll();
    foundTasks
      ? res.status(200).send({ data: foundTasks })
      : res.status(404).send('Tasks not found');
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  const {
    params: { taskId },
    body,
  } = req;

  try {
    const foundTask = Task.findById(taskId);
    if (foundTask) {
      const updatedTask = await Task.update(taskId, body);
      return res.status(200).send(updatedTask);
    }
    res.status(404).send('Tasks not found');
  } catch (error) {
    next(error);
  }
};

module.exports.removeTask = async (req, res, next) => {
  const {
    params: { taskId },
  } = req;
  try {
    const deletedTask = await Task.delete(taskId);
    deletedTask ? res.status(204) : res.status(404).send('The task not found');
  } catch (error) {
    next(error);
  }
};
