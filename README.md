# Doctor Server

This backend application will allow the user to add appointments, get a list of all appointments, view a doctor's appointments on a specific day, and delete appointments.

### Installing

* Enter command into terminal
```
git clone https://github.com/hbrnguyen/doctor-server.git"
```
* Navigate into doctor-server folder, and enter this command to install all dependencies
```
npm install
```

### Executing program
```
npm run watch
```

### How to Use Program
* Using Postman
  * Endpoints
    * GET appointments: displays all appointments
      ```
      http://localhost:3000/appointments/
      ```
      
    * GET appointment: display appointments on a day given doctor ID (.../appointments/{doctorID}/{MM-DD-YYYY})
    ```
    http://localhost:3000/appointments/1/10-13-2021
    ```
    
    * DELETE appointment: deletes an appointment given appointment ID (.../appointments/{appointmentID})
    ```
    http://localhost:3000/appointments/1
    ```
    
    * POST appointment: adds an appointment given a valid request body (note: there are only 3 doctors in model with IDs 1, 2, and 3)
      * Example Body
      ```
      {
        "patientName": "Test Patient 1",
        "date": "10-13-2021",
        "time": "09:30 AM",
        "kind": "New Patient",
        "doctorID": "0"
      }
      ```
      * Endpoint
      ```
      http://localhost:3000/appointments/
      ```
