import React, { useEffect, useState } from "react";
import listarDatos from "../api/listar";
import Barra from "./barra";
import Pie from "./estaticos/pie";
import Listado from "./listado";
import Notificador from "./notificador";

/* function ElementoPrueba({ texto }) {
    return (
        <div>
            <Button onClick={()=>texto("Texto cambiado")}>Cambiar texto</Button>
        </div>
    );
}

function Mostrar({ texto }) {
    return (
        <div>
            <p>{texto}</p>
        </div>
    );
} */

export default function Inicio() {

    const [lista, setlista] = useState([]);
    const [listaOriginal, setlistaOriginal] = useState([]); 

    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("success"); 


   /*  const [textoprueba, settextoprueba] = useState("Texto de prueba"); */

    /* function manejarTexto(texto) {
        settextoprueba(texto);
    } */

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            const data = await listarDatos();
            if (data) {
                const datar = data.reverse();
                setlistaOriginal (datar);
                setlista(datar);
            }
        };

        fetchDataFromAPI();
    }, []);

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
            <Barra listaOriginal={listaOriginal} actualizarListado={setlista} actualizarNoti={handleNoti}/>
            <Listado lista={lista} actListado={setlista} actNoti={handleNoti}/>
            {/* <br />
            <Mostrar texto={textoprueba} />
            <ElementoPrueba texto={manejarTexto}  /> */}
            <Notificador 
                showToast={toastShow} 
                messageToast={toastMessage} 
                typeToast={toastType} 
                handleToast={handleShowToast} />
            <Pie />
        </div>
    );
}