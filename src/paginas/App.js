import React from 'react';
import Cabecera from '../componentes/estaticos/cabecera';
import Inicio from '../componentes/inicio';
import Detalle from '../paginas/Detalle';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

