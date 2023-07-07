import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import listarDatos from '../api/listar';
import servidorURL from '../config';

export default function Nuevo({ actualizarList, actualizarNotif }) {
  const [mostrar, setMostrar] = useState(false);
  const [nombre, setNombre] = useState('');
  const [version, setVersion] = useState('');

  const [toastVisible, setToastVisible] = useState(false);

  //const [lista, setlista] = useState([]);

  const handleClose = () => setMostrar(false);
  const handleMostrar = () => setMostrar(true);
  
  /*   const handleToastNotif = () => setToastVisible(true);
   */
  

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeVersion = (event) => {
    setVersion(event.target.value);
  };

  const handleToast = (mostrar, mensaje, tipo) => {
    actualizarNotif(mostrar, mensaje, tipo);
    setTimeout(() => actualizarNotif(false, mensaje, tipo), 3000);
  }

  /* const handleToastMessage = (mensaje) => {
    setToastMessage(mensaje);
  };

  const handleToastType = (tipo) => {
    setToastType(tipo);
  }; */

  /* const showToastWithDuration = (duration) => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), duration);
  }; */


  const fetchDataFromAPI = async () => {
    const data = await listarDatos();
    if (data) {
      const datar = data.reverse();
      actualizarList(datar);
    } else {
      actualizarList([]);
    }
  }



  var estadoNotif = "";
  var nombregen = ""
  var versiongen = "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre) {
      if (nombre.length > 30) {
        nombregen = nombre.substring(0, 30);
      } else {
        nombregen = nombre;
      }
    } else {
      nombregen = "Software genérico";
    }

    if (version) {
      if (version.length > 30) {
        versiongen = version.substring(0, 30);
      } else {
        versiongen = version;
      }
    } else {
      versiongen = '1.0';
    }

    const software = {
      nombre: nombregen,
      version: versiongen,
    };

    try {

      // Guardar el software en la base de datos a través del método post
      axios.post(`${servidorURL}/nuevo_soft`, software)
        .then((response) => {

          //console.log(response);
          setMostrar(false);
          setToastVisible(true);
          estadoNotif = "Software creado correctamente con el nombre: "
            + nombregen + " y la versión: " + versiongen + "";
          
          //handleToastMessage(estadoNotif);
          

          fetchDataFromAPI();

          handleToast(true, estadoNotif, "success");

        })
        .catch((error) => {
          //console.error(error);
          setMostrar(false);
          //setToastVisible(true);
          estadoNotif = "Error al crear el software";
          
          //handleToastMessage(estadoNotif);
          handleToast(true, estadoNotif, "danger");

        });
    } catch (error) {
      //console.error(error);
      setMostrar(false);
      //setToastVisible(true);
      estadoNotif = "Error al crear el software";

      //handleToastMessage(estadoNotif);
      handleToast(true, estadoNotif, "danger");

    }
    setNombre('');
    setVersion('');
  };

  return (
    <>
      <a onClick={handleMostrar} className="btn btn-info btn-icon-split">
        <span className="icon text-white-10">
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>
        <span className="text">Nuevo</span>
      </a>

      <Modal show={mostrar} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo software a evaluar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Control
                required
                type="text"
                placeholder="Nombre del software..."
                value={nombre}
                onChange={handleChangeNombre}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="version">
              <Form.Control
                required
                type="text"
                value={version}
                onChange={handleChangeVersion}
                placeholder="Versión del software..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Notificador
        show={showToast}
        //setShow={setShowToast}
        message={toastMessage}
        type={toastType}
      /> */}

      {/* <ToastContainer
        className="toast-container"
        position="bottom-end"
        style={{ zIndex: 1 }}
      >
        <Toast show={toastVisible} onClose={() => setToastVisible(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Notificación</strong>
          </Toast.Header>
          <Toast.Body>
            Cuerpo de la notificación: {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer> */}
    </>
  );
}

/* import React from 'react';
import '../estilos/tarjeta.css';
import servidorURL from '../config';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, FormControl } from "react-bootstrap";
import "../css/sb-admin-2.css";
import "../css/sb-admin-2.min.css";
import NuevoSoft from './estaticos/nuevo-soft';

export default function Nuevo() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');

  const openModal = () => {
    console.log("Modal abierto");
    setModalOpen(true);

  };

  const closeModal = () => {
    setModalOpen(false);
    console.log("Modal cerrado");
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    console.log("Formulario enviado");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setVersion(event.target.value);
  };

  return (
    <div>

      
      <button
        className="btn btn-sm btn-primary mt-3 ml-2"
        onClick={openModal}>
        <FontAwesomeIcon icon={faAdd} />
      </button>



      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onHide={closeModal}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className='modal-title' >Nuevo software</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Ingrese los datos del software a evaluar
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={name}
                  onChange={handleChange}
                  placeholder="Nombre del software"
                />
                <FormControl
                  type="text"
                  value={name}
                  placeholder="Enter text"
                  required
                  onChange={handleChange}
                />
                <input
                  required
                  type="text"
                  className="form-control"
                  id="version"
                  value={version}
                  onChange={handleChange2}
                  placeholder="Versión del software"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" type='submit'>Understood</Button>
          </Modal.Footer>
        </Modal>
      )}

    </div>
  );
}; */