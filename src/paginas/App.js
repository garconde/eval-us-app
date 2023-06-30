/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useEffect, useState } from 'react';
import Listado from '../componentes/listado';
import servidorURL from '../config';
import Detalle from '../paginas/Detalle';
import Cabecera from '../componentes/estaticos/cabecera';
import Pie from '../componentes/estaticos/pie';
import fetchData from '../api/listar';
import Inicio from '../componentes/inicio';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="">
      <Cabecera />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/detalles/:id" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

