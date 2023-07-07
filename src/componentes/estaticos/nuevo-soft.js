import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function NuevoSoft() {
    return (
        <div>
            <h1>Modal</h1>
        </div>
    );
    }


{/* <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            >
            <div className="modal-dialog modal-dialog-centered modal modal-overlay">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Vertically Centered Modal
                  </h5>
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button className="btn btn-primary" type="button" onClick={closeModal}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div> */}

{/* <Modal
            show={isModalOpen}  
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal> */}