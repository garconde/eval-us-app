import React from "react";
import "../css/fontawesome.min.css";
import "../css/fontawesome.css";
import "../css/sb-admin-2.min.css";
import "../css/sb-admin-2.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nuevo from "./nuevo";
import Info from "./estaticos/info";

export default function Barra({actualizarListado, actualizarNoti}) {
    //const [listaaux, setlistaaux] = useState([]);

    function actualizarListaAux(elementos){
        actualizarListado(elementos);
    }

    function actualizarNotiAux(newState, newMessage, newType){
        actualizarNoti(newState, newMessage, newType);
    }

    return (
        <div>
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">



                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Buscar software..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <FontAwesomeIcon className="btn btn-primary" type="button" icon={faSearch} />                               
                                 </button>
                        </div>
                    </div>
                </form>
                {/* Topbar Navbar */}


                <ul className="navbar-nav ml-auto">

                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="searchDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fas fa-search fa-fw" />
                        </a>
                        {/* Dropdown - Messages */}
                        <div
                            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown"
                        >
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>


                    {/* Nav Item - Nuevo */}
                    <li className="nav-item">
                        <Nuevo 
                            actualizarList = {actualizarListaAux} 
                            actualizarNotif = {actualizarNotiAux} />
                    </li>


                    <div className="topbar-divider d-none d-sm-block" />

                    {/* Nav Item - Information */}
                    <li className="nav-item">
                        <Info />
                    </li>
                </ul>
            </nav>
            {/* End of Topbar */}
        </div>
    );
}