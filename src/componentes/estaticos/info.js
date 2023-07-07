import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Info() {

    const [mostrar, setMostrar] = useState(false);

    const handleClose = () => setMostrar(false);
    const handleMostrar = () => setMostrar(true);

    return (
        <>

            <a onClick={handleMostrar} className="btn btn-light btn-icon-split">
                <span className="icon text-white-50">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </span>
                <span className="text">Acerca de</span>
            </a>

            <Modal show={mostrar} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Desarrollado por David Garcés Conde (github: @garconde)</p>
                    <p>Asesoría: Ing Gabriel Chanchí G.</p>
                    <p>Proyecto de grado de Ingenieria de Sistemas</p>
                    <p>Universidad de Cartagena</p>
                    <p>2023</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}