import React from 'react';
import Tarjeta from '../componentes/tarjeta';

export default function Listado(props) {
  const { lista, filtrar, actListado, actNoti } = props;

  const actualizarLista = (nuevaLista) => {
    actListado(nuevaLista);
  }

  const actNotiAux = (newState, newMessage, newType) => {
    actNoti(newState, newMessage, newType);
  }

  return (
    <div className="container mrgb-50">
      <h4 className="text-center mrg-30">Lista de softwares</h4>
      
      {/* Si hay softwares registrados, se muestran en tarjetas con "d-flex flex-wrap" 
      para que se acomoden una al lado de la otra */}

      <div className={`container center ${lista.length === 0 ? "" : "d-flex flex-wrap"}`}> 
        {lista.length === 0 ? (
          <div className="text-center">
            <div className="alert alert-info">
              <p>No hay softwares registrados todavía, ¡Puede agregar uno nuevo para empezar!</p>
            </div>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "25rem" }}
              src="/img/vacio.svg" alt="Sin elementos" />
          </div>



        ) : (
          lista.map((i) => (
            <Tarjeta
              key={i.id_soft}
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