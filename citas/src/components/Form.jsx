import React from 'react';

const Form = () => {
    return ( 
        <>
        <h2>Solicitar Turno</h2>

        <form>
          <label>Nombre del Paciente</label>
          <input 
            type="text"
            name="patient"
            className="u-full-width"
            placeholder="Ej: Juan"
          />
          
          <label>Especialidad Médica</label>
          <input 
            type="text"
            name="speciality"
            className="u-full-width"
            placeholder="Ej: Traumatología"
          />

          <label>Fecha</label>
          <input 
            type="date"
            name="date"
            className="u-full-width"
          />

          <label>Hora</label>
          <input 
            type="time"
            name="time"
            className="u-full-width"
          />

          <label>Sintomas</label>
          <textarea 
            name="symptoms"
            className="u-full-width">

          </textarea>

          <button
            type="submit"
            className="u-full-width button-primary"
          >Agendar Cita</button>
        </form>
        </>
     );
}
 
export default Form;