let {appointments, appointmentID} = require('../models/appointments.model')

function getAppointments(req, res) {
  res.json(appointments);
}

function getAppointment(req, res) {
  const doctorID = req.params.doctorID;
  const date = req.params.date;
  appointmentList = appointments.filter(function(el) {
    return el.date == date && el.doctorID == doctorID;
  })

  res.json(appointmentList);
}

function deleteAppointment(req, res) {
  const appointmentID = req.params.appointmentID;
  console.log(`Deleting Appointment ${appointmentID}`)
  const isValidAppointment = appointments.find((appointment) => appointment.id === Number(appointmentID));

  if (!isValidAppointment) {
    return res.status(404).json({Error: `Appointment ${appointmentID} not found`});
  }

  appointments = appointments.filter(function(el) { return el.id != appointmentID; });
  return res.status(200).json({success: `Appointment ${appointmentID} successfully deleted!`});
}

function addAppointment(req, res) {
  // json contains: patient name, date and time, kind, doctor ID
  console.log("Adding appointment");
  const {patientName, date, time, kind, doctorID} = req.body;
  if (!patientName || !date || !time || !kind || !doctorID) {
    return res.status(400).json({Error: "Missing parameters"});
  }

  // new appointments can only start in 15 min interval
  const minuteHand = time.split(' ')[0].split(':')[1];
  if (Number(minuteHand) % 15 !== 0) {
    return res.status(400).json({Error: "Time must be an interval of 15"});
  }

  // check that doctor has <= 3 appointments at that time
  const numDoctorAppointments = appointments.filter(function(el) { return el.date == date && el.time == time && el.doctorID == doctorID; });
  console.log(numDoctorAppointments.length);
  console.log(numDoctorAppointments);
  if (numDoctorAppointments.length > 2) {
    return res.status(400).json({Error: "Doctor has more than 3 appointments at that Date and Time"});
  }


  appointments.push({
    id: appointmentID,
    name: patientName,
    kind: kind,
    time: time,
    date: date,
    doctorID: doctorID
  });

  appointmentID++;

  return res.status(200).json({Success: "Successfully added appointment!"});

}

module.exports = {
  getAppointments,
  getAppointment,
  deleteAppointment,
  addAppointment
};
