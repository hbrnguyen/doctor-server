const express = require('express');
const appointmentController = require('../controllers/appointments.controller');
const appointmentRouter = express.Router();

appointmentRouter.get('/', appointmentController.getAppointments);
appointmentRouter.get('/:doctorID/:date', appointmentController.getAppointment);
appointmentRouter.delete('/:appointmentID', appointmentController.deleteAppointment);
appointmentRouter.post('/', appointmentController.addAppointment);

module.exports = appointmentRouter;
