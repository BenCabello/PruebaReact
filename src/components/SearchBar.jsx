import React, { useState } from 'react';

const SearchBar = ({ filtrarIndicador }) => {
  const [busqueda, setBusqueda] = useState('');

  const buscarIndicador = (e) => {
    e.preventDefault();
    filtrarIndicador(busqueda);
  };

  return (
    <form onSubmit={buscarIndicador} className="d-flex align-items-center">
      <input
        type="text"
        placeholder="Buscar Indicador"
        value={busqueda}
        className="form-control"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Buscar</button>
    </form>
  );
};

export default SearchBar;