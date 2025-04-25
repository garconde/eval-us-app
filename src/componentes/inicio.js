import React, { useEffect, useState } from "react";
import listarDatos from "../api/listar";
import Barra from "./barra";
import Pie from "./estaticos/pie";
import Listado from "./listado";
import Notificador from "./notificador";

export default function Inicio() {

    const [lista, setLista] = useState([]);
    const [listaAuxiliar, setListaAuxiliar] = useState([]); 

    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("success"); 


    useEffect(() => { 
        const fetchDataFromAPI = async () => {
            const data = await listarDatos();
            if (data) {
                const datar = data.reverse();
                setLista(datar);
                setListaAuxiliar(datar);
            }
        };
        fetchDataFromAPI();
    }, []);

    // Función para actualizar ambas listas
    const actualizarListas = (nuevaLista) => {
        setLista(nuevaLista);       
        setListaAuxiliar(nuevaLista);
    };

    const actualizarListaAux = (nuevaLista) => {      
        setListaAuxiliar(nuevaLista);
    };

    function handleNoti(estado, mensaje, tipo) {
        setToastShow(estado);
        setToastMessage(mensaje);
        setToastType(tipo);
    } 

    function handleShowToast(valorBooleano) {
        setToastShow(valorBooleano);
    }

    return (
        <div>
            <Barra 
                listaOriginal={lista}
                actualizarListado={actualizarListas} 
                actualizarListaAux={actualizarListaAux}
                actualizarNoti={handleNoti}/>
            <Listado 
                lista={listaAuxiliar} 
                actListado={actualizarListas} 
                actNoti={handleNoti}/>
            <Notificador 
                showToast={toastShow} 
                messageToast={toastMessage} 
                typeToast={toastType} 
                handleToast={handleShowToast} />
            <Pie />
        </div>
    );
}