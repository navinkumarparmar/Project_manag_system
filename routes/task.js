const express = require('express');
const apiroutes = express.Router();

const taskController = require('../controllers/taskController')
apiroutes.post('/create',taskController.create);
apiroutes.get('/listAll',taskController.listAll);
apiroutes.put('/update/:id',taskController.update);
apiroutes.delete('/delete/:id',taskController.delete);
module.exports = apiroutes;