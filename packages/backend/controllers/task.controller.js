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
    params: { taskId }
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
  // const { body } = req;
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
    body
  } = req;
  try {
    const foundTask = await Task.findByPk(taskId);
    if (foundTask) {
      const updatedTask = await foundTask.update(body);
      return res.status(200).send({ data: updatedTask });
    }
    res.status(404).send('Tasks not found');
  } catch (error) {
    next(error);
  }
};

module.exports.removeTask = async (req, res, next) => {
  const {
    params: { taskId }
  } = req;
  try {
    const foundedTask = await Task.findByPk(taskId);
    const deletedTask = await foundedTask.destroy();
    deletedTask ? res.status(200).send({ data: taskId }) : res.status(404).send('The task not found');
  } catch (error) {
    next(error);
  }
};
