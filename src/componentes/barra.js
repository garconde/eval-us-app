import React, { useState } from "react";
import "../css/fontawesome.min.css";
import "../css/fontawesome.css";
import "../css/sb-admin-2.min.css";
import "../css/sb-admin-2.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nuevo from "./nuevo";
import Info from "./estaticos/info";

export default function Barra({ listaOriginal, actualizarListado, actualizarNoti }) {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {
        const valor = e.target.value;
        setBusqueda(valor);

        if (!valor.trim()) {
            actualizarListado(listaOriginal);
            return;
        }

        const listaFiltrada = listaOriginal.filter(item =>
            item.nombre.toLowerCase().includes(valor.toLowerCase())
        );
        actualizarListado(listaFiltrada);
    };

    function actualizarListaAux(elementos) {
        actualizarListado(elementos);
    }

    function actualizarNotiAux(newState, newMessage, newType) {
        actualizarNoti(newState, newMessage, newType);
    }

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Buscar software..."
                            aria-label="Buscar"
                            aria-describedby="basic-addon2"
                            value={busqueda}
                            onChange={handleChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </form>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Nuevo actualizarList={actualizarListaAux} actualizarNotif={actualizarNotiAux} />
                    </li>
                    <div className="topbar-divider d-none d-sm-block" />
                    <li className="nav-item">
                        <Info />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
