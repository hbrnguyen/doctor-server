const doctors = require('../models/doctors.model');

function filterDoctors(arr, doctorID, date) {
  return arr.filter(function(el) {
    return el.id == doctorID;
  })
}

function getDoctors(req, res) {
  res.json(doctors);
}

module.exports = {
  getDoctors,
};
