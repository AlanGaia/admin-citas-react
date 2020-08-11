import React, {useState} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  //array of appointments
  const [appointments, setAppointments] = useState([]);


  //Read array of appointments and append a new one to the list
  const appendAppointment = appointment => {
    setAppointments([
      ...appointments, //copy the data of array
      appointment // Add the new one to the list
    ]);
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form appendAppointment={appendAppointment}/>
          </div>

          <div className="one-half column">
            <h2>Administra tus turnos</h2>
            {appointments.map(appointment => (
              <Appointment
                appointment={appointment}
                key={appointment.id}
            />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
