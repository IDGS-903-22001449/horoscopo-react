import React from 'react';
import PropTypes from 'prop-types';
import './Resultado.css';

export const Resultado = ({ nombre, signo, imagen, horoscopo }) => {
  if (!signo) return null; 

  return (
    <div className="resultado">
      <h2 className="resultado-titulo">Tu horóscopo</h2>

      <div className="resultado-card">
        <img src={imagen} alt={signo} className="resultado-img" />
        <div className="resultado-info">
          <p className="resultado-nombre">✨ {nombre}</p>
          <p className="resultado-signo">{signo}</p>
          <p className="resultado-texto">{horoscopo}</p>
        </div>
      </div>
    </div>
  );
};

Resultado.propTypes = {
  nombre: PropTypes.string.isRequired,
  signo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  horoscopo: PropTypes.string.isRequired,
};
