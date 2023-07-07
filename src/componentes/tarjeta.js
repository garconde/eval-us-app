import React from 'react';
import '../estilos/tarjeta.css';
import servidorURL from '../config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import deleteData from '../api/eliminar';
import listarDatos from '../api/listar';
import { act } from 'react-dom/test-utils';

export default function Tarjeta({ soft, actualizarList, actNotif }) {

  const navigate = useNavigate();
  const [mostrar, setMostrar] = useState(false);

  const handleClose = () => setMostrar(false);
  const handleMostrar = () => setMostrar(true);

  const handleToast = (mostrar, mensaje, tipo) => {
    actNotif(mostrar, mensaje, tipo);
    setTimeout(() => actNotif(false, mensaje, tipo), 3000);
  }

  var cardColorRight = "border-right-secondary"
  var cardColorBottom = "border-bottom-secondary"
  var progressColor = "bg-secondary"

  //Condicionar el color del borde de la tarjeta
  switch (true) {
    case (soft.usabilidad >= 0 && soft.usabilidad <= 50):
      cardColorRight = "border-right-danger";
      cardColorBottom = "border-bottom-danger";
      progressColor = "bg-danger";
      break;
    case (soft.usabilidad > 50 && soft.usabilidad <= 75):
      cardColorRight = "border-right-warning";
      cardColorBottom = "border-bottom-warning";
      progressColor = "bg-warning";
      break;
    case (soft.usabilidad > 75):
      cardColorRight = "border-right-success";
      cardColorBottom = "border-bottom-success";
      progressColor = "bg-success";
      break;
    default:
      break;
  }

  const fetchDataFromAPI = async () => {
    const data = await listarDatos();
    if (data) {
      const datar = data.reverse();
      actualizarList(datar);
    } else {
      actualizarList([]);
    }
  }

  const manejarEliminacion = async (id) => {

    try {

      //console.log(dataToDelete);

      await deleteData(id);

      //console.log("Eliminación exitosa");
      fetchDataFromAPI();

      handleToast(true, "Eliminación exitosa", "success");

    } catch (error) {
      //console.log("Petición fallida:", error.message);
      handleToast(true, "Eliminación fallida", "danger");
    }
  };

  const manejarEdicion = async (id) => {
    navigate(`/detalles/${id}`);
  };

  function convertirEpochTime(epochTime) {
    // Multiplicar por 1000 para obtener el timestamp en milisegundos
    var timestamp = epochTime * 1000;

    // Crear un objeto Date a partir del timestamp
    var fechaHora = new Date(timestamp);

    // Obtener los componentes de la fecha y hora
    var dia = fechaHora.getDate();
    var mes = fechaHora.toLocaleString('default', { month: 'short' });
    var anio = fechaHora.getFullYear();
    var hora = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();

    // Convertir el formato de la hora a 12 horas (AM/PM)
    var ampm = hora >= 12 ? 'pm' : 'am';
    hora = hora % 12;
    hora = hora ? hora : 12; // La hora 0 debe ser representada como 12 en el formato de 12 horas

    // Formatear los componentes en el formato deseado
    var fechaHoraFormateada = dia + ' ' + mes + ' ' + anio + ', ' + hora + ':' + minutos.toLocaleString('en-US', { minimumIntegerDigits: 2 }) + ' ' + ampm;

    return fechaHoraFormateada;
  }

  return (
    <div className={`shadow h-100 py-2 m-2 ${cardColorRight} ${cardColorBottom} rounded`}
      style={{ minHeight: 350, width: 250, color: "black" }}>
      <div className="card-body">
        <h4 className="card-title">{soft.nombre}</h4>
        <p className="card-text small text-secondary">
          Versión: {soft.version}
          <br />
          Agregado el {convertirEpochTime(soft.fecha)}
        </p>
        <div className="card-content">

          <p className="card-text">
            Eficacia: {soft.eficacia > -1 ? soft.eficacia + "%" : "No evaluada"}
            <br />
            Eficiencia: {soft.eficiencia > -1 ? soft.eficiencia + "%" : "No evaluada"}
            <br />
            Satisfacción: {soft.satisfaccion > -1 ? soft.satisfaccion + "%" : "No evaluada"}
            <br />
          </p>
        </div>

        <br />
        <p className='card-Text'>Satisfacción</p>

        <div className="progress mt-3">
          <div className={`progress-bar ${progressColor}`} style={{ width: `${soft.usabilidad === -1 ? 0 : soft.usabilidad}%` }}>
            {soft.usabilidad !== -1 && `${soft.usabilidad}%`}
          </div>
          {/* <div className="progress-bar" style={{ width: `${soft.usabilidad}%` }}>
            {soft.usabilidad}%
          </div> */}
        </div>

        {/* Usar Cardbody, Cartitle, Cardtext, Cardfooter, Cardheader */}

        <div className='text-center mt-3'>
          {/* <button
            className="btn btn-sm btn-primary mr-2"
            onClick={() => manejarEdicion(soft.id_soft)}>
            <FontAwesomeIcon icon={faEdit} />
          </button> */}

          {/*<Link to={{ pathname: `/detalles/${soft.id}`, state: { background: location }}} className="btn btn-sm btn-primary mt-3 ml-2">
            <FontAwesomeIcon icon={faEdit} />
          </Link>*/}

          <a className="btn btn-primary btn-icon-split mr-2"
            onClick={() => manejarEdicion(soft.id_soft)}
          >
            <span className="icon text-white-10">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span className="text">Detalles</span>
          </a>

          <a className="btn btn-secondary btn-icon-split hover-red mr-2"
            onClick={handleMostrar}
          >
            <span className="icon text-white-10">
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </a>

          {/* <button
            className="btn btn-sm btn-danger mr-2"
            onClick={handleMostrar}>
            <FontAwesomeIcon icon={faTrash} />
          </button> */}

          <Modal show={mostrar} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Eliminar software y su evaluación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>¿Está seguro de eliminar el software {soft.nombre}?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="danger" onClick={() => manejarEliminacion(soft.id_soft)}>
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );

  /*return (
    <div className="card m-2">
      <div className={`card-body ${cardColor}`}>
        <h5 className="card-title">{soft.nombre}</h5>
        <p className="card-text">Eficiencia: {soft.eficiencia}</p>
        <p className="card-text">Eficacia: {soft.eficacia}</p>
        <p className="card-text">Satisfacción: {soft.satisfaccion}</p>
        <p className="card-text">Usabilidad: {soft.usabilidad}</p>
      </div>
    </div>
  );*/
};