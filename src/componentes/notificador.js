import React from "react";
import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "../css/sb-admin-2.min.css";

export default function Notificador(props) {
    const { showToast, messageToast, typeToast, handleToast } = props;

    const closeNotif = () => {
        handleToast(false);
        //showToast = false;
    }

    return (
        <div className="toast-container">
            <ToastContainer position="bottom-end" >
                <Toast
                    onClick={closeNotif}
                    onClose={closeNotif}
                    show={showToast}
                    bg={typeToast}>
                    <Toast.Header>
                        <strong className="me-auto">Notificación</strong>
                    </Toast.Header>
                    <Toast.Body style={{color: "black"}}>{messageToast}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}