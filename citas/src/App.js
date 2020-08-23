import React, {useState , useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

    //Appointments in local Storage
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if(!initialAppointments) {
      initialAppointments = [];
    }

  //array of appointments
  const [appointments, setAppointments] = useState(initialAppointments);

  //Read array of appointments and append a new one to the list
  const appendAppointment = appointment => {
    setAppointments([
      ...appointments, //copy the data of array
      appointment // Add the new one to the list
    ]);
  }

  //Delete appointment by id
  const deleteAppointment = id => {
    const newsAppointments = appointments.filter( appointment => appointment.id !== id);
    setAppointments(newsAppointments);
  }

  //UseEffect for listen to changes on Appointments[]
  useEffect( () => {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments] );


  const appointmentTitle = appointments.length === 0 ? 'No hay citas agendadas' : 'Administra tus Citas';

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form appendAppointment={appendAppointment}/>
          </div>

          <div className="one-half column">
            <h2>{appointmentTitle}</h2>
            {appointments.map(appointment => (
              <Appointment
                appointment={appointment}
                key={appointment.id}
                deleteAppointment={deleteAppointment}
            />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
