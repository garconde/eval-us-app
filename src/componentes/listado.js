import React, { Fragment } from 'react';
import Tarjeta from '../componentes/tarjeta';
import Barra from './barra';
import Pie from '../componentes/estaticos/pie';
import Nuevo from './nuevo';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Listado(props) {
    const { lista, actListado, actNoti } = props;

    const actualizarLista = (nuevaLista) => {
        actListado(nuevaLista);
    }

    const actNotiAux = (newState, newMessage, newType) => {
        actNoti(newState, newMessage, newType);
    }

    return (
        <div className="container mrgb-50">
          <h4 className="text-center mrg-30">Lista de softwares</h4>
          <div className="container center d-flex flex-wrap">
            {lista.length === 0 ? (
              <div className="alert alert-info">
                <p>No hay softwares registrados</p>
              </div>
            ) : (
              lista.map((i) => (
                <Tarjeta
                  key={i.id}
                  soft={i}
                  actualizarList={actualizarLista}
                  actNotif={actNotiAux}
                />
              ))
            )}
          </div>
        </div>
      );
      
}