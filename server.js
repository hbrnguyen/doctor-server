const express = require('express');
const doctorsRouter = require('./routes/doctors.router');
const appointmentRouter = require('./routes/appointments.router');

const app = express();
const PORT = 3000;


app.use(express.json());

app.use('/doctors', doctorsRouter);
app.use('/appointments', appointmentRouter);

app.listen(PORT, ()=> {
  console.log(`Listening on Port ${PORT}`);
});
