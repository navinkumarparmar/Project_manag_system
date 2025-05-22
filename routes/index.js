const express = require('express');
const apiroutes = express.Router();

const project = require('./project');
const task = require('./task')
apiroutes.use('/project',project);
apiroutes.use('/task',task)

module.exports = apiroutes;