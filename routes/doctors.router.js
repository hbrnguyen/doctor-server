const express = require('express');

const doctorsRouter = express.Router();
const doctorsController = require('../controllers/doctors.controller');

doctorsRouter.get('/', doctorsController.getDoctors);

module.exports = doctorsRouter;
