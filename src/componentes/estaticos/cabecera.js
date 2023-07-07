import React from 'react';
import "../../estilos/index.css";


const Cabecera = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="/logo.png" className="rounded-logo" alt="E" />
        </a>
        <h1 className="text-dark font-weight-bold">Evaluador de usabilidad</h1>
      </nav>
    </header>
  );
};

export default Cabecera;