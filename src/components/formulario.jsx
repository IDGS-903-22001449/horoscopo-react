import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Formulario.css';

export const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [fNacimiento, setFNacimiento] = useState('');

  const validarForm = (e) => {
    e.preventDefault();
    if (!nombre || !fNacimiento) return;
    onSubmit({ nombre, fNacimiento });
  };

  return (
    <form onSubmit={validarForm} className="formulario">
      <h2 className="titulo">Registra los datos para obtener tu horóscopo</h2>

      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="input"
      />

      <input
        type="date"
        value={fNacimiento}
        onChange={(e) => setFNacimiento(e.target.value)}
        className="input"
      />

      <button type="submit" className="boton">
        Ver mi horóscopo
      </button>
    </form>
  );
};

Formulario.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
