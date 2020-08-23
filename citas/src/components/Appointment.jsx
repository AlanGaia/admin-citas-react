import React from 'react'
import propTypes from 'prop-types';


const Appointment = ({appointment, deleteAppointment}) => (  
    <div className="cita">
        <p>Paciente: <span>{appointment.patient}</span></p>
        <p>Especialidad: <span>{appointment.speciality}</span></p>
        <p>Fecha: <span>{appointment.date}</span></p>
        <p>Hora: <span>{appointment.time}</span></p>
        <p>Sintomas: <span>{appointment.symptoms}</span></p>

        <button
          className="button eliminar u-full-width"
          onClick={() => deleteAppointment(appointment.id)}
        > Eliminar &times;</button>
    </div>
);

Appointment.propTypes = {
  appointment: propTypes.object.isRequired,
  deleteAppointment: propTypes.func.isRequired
}


export default Appointment;