import React from 'react'

const Appointment = ({appointment}) => (  
    <div className="cita">
        <p>Paciente: <span>{appointment.patient}</span></p>
        <p>Especialidad: <span>{appointment.speciality}</span></p>
        <p>Fecha: <span>{appointment.date}</span></p>
        <p>Hora: <span>{appointment.time}</span></p>
        <p>Sintomas: <span>{appointment.symptoms}</span></p>
    </div>
);
 
export default Appointment;