import React, { useState } from "react";

const Form = () => {
  //State appointments
  const [appointment, setAppointment] = useState({
    patient: "",
    speciality: "",
    date: "",
    time: "",
    symptoms: "",
  });

  //Update the input form values and save it when input form change
  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  //Extract Values
  const { patient, speciality, date, time, symptoms } = appointment;

  //Handle Submit Form
  const handleSubmit = e => {
    e.preventDefault();
    alert('Enviar form')
  };

  //Main component
  return (
    <>
      <h2>Solicitar Turno</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre del Paciente</label>
        <input
          type="text"
          name="patient"
          className="u-full-width"
          placeholder="Ej: Juan"
          onChange={handleChange}
          value={patient}
        />

        <label>Especialidad Médica</label>
        <input
          type="text"
          name="speciality"
          className="u-full-width"
          placeholder="Ej: Traumatología"
          onChange={handleChange}
          value={speciality}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Sintomas</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agendar Cita
        </button>
      </form>
    </>
  );
};

export default Form;
