const express = require('express');
const apiroutes = express.Router();

const projectController = require('../controllers/projectController')
apiroutes.post('/create',projectController.create);
apiroutes.get('/listAll',projectController.listAll);
apiroutes.put('/update/:id',projectController.update);
apiroutes.delete('/delete/:id',projectController.delete);
module.exports = apiroutes;