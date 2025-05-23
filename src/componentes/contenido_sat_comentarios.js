import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCirclePlus, faDownload, faSave, faTable } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import obtenerValComentarios from "../api/obtener_val_comentarios";
import { Alert, FormControl, InputGroup, Table } from "react-bootstrap";
import { read, utils } from "xlsx";
import Papa from "papaparse";
import { Spreadsheet } from "react-spreadsheet";
import "../estilos/all.css"
import guardarComentarios from "../api/guardar_comentarios";
import Notificador from "./notificador";
import obtenerResComentarios from "../api/obtener_res_comentarios";
import GraficadorCat from "./graficador_cat";

var promedio = 0;
var userMax = 0;
var userMin = 0;
var userMaxIndex = 0;
var userMinIndex = 0;



export default function Contenido_sat_comentarios({ idSof }) {

    const [tabla, setTabla] = useState([]);
    const [tablaAux, setTablaAux] = useState([]); //Tabla auxiliar para guardar los datos de la tabla original
    const [fileData, setFileData] = useState([]);
    const [numPreguntas, setNumPreguntass] = useState("#P");
    const [numUsuarios, setNumUsuarios] = useState("#U");
    const [tieneValores, setTieneValores] = useState(false);
    const [showNotificacion, setShowNotificacion] = useState(false);
    const [mensajeNotificacion, setMensajeNotificacion] = useState("");
    const [tipoNotificacion, setTipoNotificacion] = useState("success");
    const [tabSuperior, setTabSuperior] = useState("datos");

    const [dataGraf, setDataGraf] = useState([]);
    //const [isButtonDisabled, setIsButtonDisabled] = useState(true);




    useEffect(() => {
        if (idSof != null) {
            const obtenerData = async () => {
                try {

                    const data = await obtenerValComentarios(idSof);



                    setTabla(data);
                    setTablaAux(data);

                    consultarGraficosBD(idSof);

                    if (data.length > 0) {
                        setTieneValores(true);
                    }
                } catch (error) {
                    console.error('Error al obtener el soft:', error);
                }
            };
            obtenerData();
        }
    }, []);


    const handleInputChange = (event) => {

        event.preventDefault();

        const file = event.target.files[0];

        if (!file) {

            console.error("Archivo no encontrado.");
            setFileData(null);
            return;

        }

        try {

            setFileData(file);

            //console.log(file);

            cargarTablaDesdeArchivo(file);

            // setIsButtonDisabled(false);
            // event.target.value = null;
        } catch (error) {
            console.error("Error al cargar el archivo:", error);
            setFileData(null);
        }
    };


    const cargarTablaDesdeArchivo = (file) => {

        //setIsButtonDisabled(true);


        //const file = fileData;
        //console.log(file);

        if (file || file != null) {
            const fileName = file.name.toLowerCase();

            if (fileName.endsWith(".csv")) {
                parseCsvFile(file);
            } else if (fileName.endsWith(".xlsx")) {
                parseXlsxFile(file);
            } else {
                console.log("Archivo no válido. Solo se permiten archivos .csv o .xlsx");
            }
        } else {
            console.log("No se ha seleccionado ningún archivo.");
        }
    };

    const parseCsvFile = (file) => {
        if (!file) {

            setTablaAux([]);

            setShowNotificacion(true);
            setMensajeNotificacion("Error al cargar el archivo.");
            setTipoNotificacion("danger");
            setTimeout(() => {
                setShowNotificacion(false);
            }, 3000);

            return;
        }

        try {
            Papa.parse(file, {
                header: true,
                complete: (result) => {
                    const arrayT = pasarAFormatoArregloTabla(result.data);
                    setTablaAux(arrayT);

                    setShowNotificacion(true);
                    setMensajeNotificacion("Archivo cargado correctamente.");
                    setTipoNotificacion("success");
                    setTimeout(() => {
                        setShowNotificacion(false);
                    }, 3000);


                    //console.log("arrayT: ", arrayT);
                    //console.log(result.data);
                },
            });
        } catch (error) {


            setShowNotificacion(true);
            setMensajeNotificacion("Error al cargar el archivo.");
            setTipoNotificacion("danger");
            setTimeout(() => {
                setShowNotificacion(false);
            }, 3000);


            console.error(error);
            //setTabla([]);
        }
    };

    const parseXlsxFile = (file) => {

        if (!file) {
            //setTabla([]);

            setShowNotificacion(true);
            setMensajeNotificacion("Error al cargar el archivo.");
            setTipoNotificacion("danger");
            setTimeout(() => {
                setShowNotificacion(false);
            }, 3000);


            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {

            try {
                const data = new Uint8Array(e.target.result);
                const workbook = read(data, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = utils.sheet_to_json(worksheet);

                const arrayT = pasarAFormatoArregloTabla(jsonData);
                setTablaAux(arrayT);


                setShowNotificacion(true);
                setMensajeNotificacion("Archivo cargado correctamente.");
                setTipoNotificacion("success");
                setTimeout(() => {
                    setShowNotificacion(false);
                }, 3000);


                //console.log(arrayT);
                //console.log(jsonData);

            } catch (error) {


                setShowNotificacion(true);
                setMensajeNotificacion("Error al cargar el archivo.");
                setTipoNotificacion("danger");
                setTimeout(() => {
                    setShowNotificacion(false);
                }, 3000);


                //setTabla([]);

                console.log(error);
            }
        };

        reader.readAsArrayBuffer(file);
    };

    const nuevoSubmit = (event) => {
        event.preventDefault();

        var p = 1;
        var u = 1;

        if (numPreguntas && numUsuarios) {

            if (numPreguntas > p) {
                p = numPreguntas;
            }
            if (numUsuarios > u) {
                u = numUsuarios;
            }
        }

        u = parseInt(u) + 1;

        const tablaNueva = Array.from({ length: u }, () =>
            Array.from({ length: p }, () => "")
        );

        setTablaAux(tablaNueva);

        setNumPreguntass("#P");
        setNumUsuarios("#U");

        //console.log(p);
        //console.log(u);
        //console.log(tablaNueva);
        //console.log("Nuevo submit");
    };


    const guardarDatos = async () => {

        //console.log("TablaAux Antes de guardar", tablaAux);

        const tablaComentarios = convertirANumerosPesos(tablaAux);

        if (validarMatriz(tablaComentarios)) {

            //setTabla(tabla);

            //Cargar a la base de datos
            try {
                const data = await guardarComentarios(idSof, tablaComentarios);
                if (data) {
                    //console.log("Datos guardados correctamente");


                    consultarGraficosBD(idSof);
                    setTabla(tablaAux);
                    //console.log("Tabla AL HABER GUARDADO", tabla);
                    //Aquí se debe NOTIFICAR al usuario que se guardó correctamente
                    setShowNotificacion(true);
                    setMensajeNotificacion("Datos guardados correctamente");
                    setTipoNotificacion("success");
                    setTimeout(() => {
                        setShowNotificacion(false);
                    }, 3000);
                }
            }
            catch (error) {

                //Aquí se debe NOTIFICAR al usuario que se guardó correctamente
                setShowNotificacion(true);
                setMensajeNotificacion("Error al guardar los datos. Revise bien los datos ingresados...");
                setTipoNotificacion("danger");
                setTimeout(() => {
                    setShowNotificacion(false);
                }, 3000);
                console.error('Error al guardar los datos:', error);
            }





            //console.log("Matriz CORRECTA");
            //console.log(tablaComentarios);
        } else {

            //Aquí se debe NOTIFICAR al usuario que la matriz no es válida
            setShowNotificacion(true);
            setMensajeNotificacion("Algún valor de la matriz no es válido, revise los datos ingresados");
            setTipoNotificacion("danger");
            setTimeout(() => {
                setShowNotificacion(false);
            }, 3000);

            //console.log("Matriz inválida");
        }

    };

    function convertirANumerosPesos(matriz) {
        var primeraFila = matriz[0]; // Obtener la primera fila de la matriz

        var numeros = primeraFila.map(function (elemento) {
            return parseInt(elemento); // Convertir cada elemento en la fila a un número entero
        });

        matriz[0] = numeros; // Reemplazar la primera fila en la matriz con los números convertidos

        //console.log("MATRIZ TRANSFORMADA: ", matriz);

        return matriz;
    }

    const consultarGraficosBD = async (idSof) => {
        try {
            const resp = await obtenerResComentarios(idSof);
            if (resp) {

                //console.log("Datos consultados correctamente");


                //console.log(resp.data);

                setDataGraf(resp);
            }
        }
        catch (error) {
            console.error('Error al consultar los datos:', error);
        }
    };


    function validarMatriz(matriz) {
        // Verificar si algún elemento es una cadena, vacío o nulo
        const tieneAdvertencia = matriz.some((fila, index) => {
            if (index === 0) {
                // Validar primera fila (solo números)
                return fila.some(elemento => isNaN(parseInt(elemento)) || elemento === null || elemento === "");
            } else {
                // Validar filas restantes (solo texto)
                return fila.some(elemento => typeof elemento !== "string" || elemento === null || elemento === "");
            }
        });

        return !tieneAdvertencia;
    }


    const actualizarCambioDeDatosSpreadSheet = (data) => {
        // Actualizar los datos de la tabla con el nuevo valor de data
        if (data === null) {
            return;
        }
        if (data.length == 0) {
            return;
        }
        const newArray = data.map(row =>
            row.map(({ value }) => value)
        );

        //console.log("Datos actualizados: ", newArray);

        setTablaAux(newArray);

    };



    const handleNumPreguntas = (event) => {
        setNumPreguntass(event.target.value);
    };

    const handleNumUsuarios = (event) => {
        setNumUsuarios(event.target.value);
    };


    const handleShowToast = () => {
        setShowNotificacion(false);
    }


    function pasarAFormatoArregloTabla(obj) {
        const arreglo = obj.map(objeto => {
            const valores = Object.values(objeto);
            return valores;
        });

        return arreglo;
    }

    function arregloAObjetoSpreadSheet(arreglo) {
        const objetos = arreglo.map(fila => {
            const objetosFila = fila.map(valor => ({ value: valor }));
            return objetosFila;
        });

        return objetos;
    }

    return (
        <div className="container-xl px-4 mt-n10 mrgb-50">
            {/* Wizard card example with navigation*/}
            <div className="card">
                <div className="card-header border-bottom">
                    {/* Wizard navigation*/}
                    <div
                        className="nav nav-pills nav-justified flex-column flex-sm-row nav-wizard"
                        id="cardTab"
                        role="tablist"
                    >
                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        {/* Wizard navigation item DATOS*/}
                        <a
                            onClick={() => setTabSuperior("datos")}
                            className={`nav-item nav-link ${tabSuperior === "datos" ? "active" : ""}`} // Se agrega o se quita active
                            id="datoswizard-tab"
                            href="#datoswizard"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="datoswizard"
                            aria-selected={` ${tabSuperior === "datos" ? "true" : ""}`} // Se agrega o se quita true
                            tabIndex={tabSuperior === "datos" ? -1 : 0} // Se agrega o se quita -1

                        >
                            <div className="wizard-step-icon">
                                <FontAwesomeIcon icon={faTable} />
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">Datos</div>
                                {/* <div className="wizard-step-text-details">
                                    Basic details and information
                                </div> */}
                            </div>
                        </a>


                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        {/* Wizard navigation item REPORTE*/}
                        <a
                            onClick={() => setTabSuperior("reporte")}
                            className={`nav-item nav-link ${tabSuperior === "reporte" ? "active" : ""}`} // Se agrega o se quita active                            id="reportewizard-tab"
                            href="#reportewizard"
                            data-bs-toggle="tab"
                            role="tab"
                            aria-controls="reportewizard"
                            aria-selected={` ${tabSuperior === "reporte" ? "true" : "false"}`} // Se agrega o se quita true
                            tabIndex={tabSuperior === "reporte" ? -1 : 0} // Se agrega o se quita -1
                        >
                            <div className="wizard-step-icon">
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">Reporte</div>
                                {/* <div className="wizard-step-text-details">
                                    Credit card information
                                </div> */}
                            </div>
                        </a>

                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="cardTabContent">






                        {/* Wizard tab pane item 1*/}
                        <div
                            className={`tab-pane py-5 py-xl-10 fade ${tabSuperior === "datos" ? "show active" : ""}`} // Se agrega o se quita active // Se agrega o se quita show active
                            id="datoswizard"
                            role="tabpanel"
                            aria-labelledby="datoswizard-tab"
                        >
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">Comentarios por usuarios</h3>
                                    <h5 className="card-title mb-5">
                                        Ingrese o edite los comentarios que cada usuario le dio como respuesta a cada pregunta abierta.
                                    </h5>






                                    {/* Crear un componente input file para subir el archivo de excel o csv*/}

                                    <h5 className="text small">Cree una nueva tabla de comentarios por usuarios </h5>
                                    <div className="d-flex form-group flex-column flex-sm-row">
                                        <InputGroup onSubmit={nuevoSubmit}>
                                            <FormControl type="number"
                                                placeholder="#P" required
                                                className="mb-2"
                                                value={numPreguntas}
                                                onChange={handleNumPreguntas}
                                            />

                                            <FormControl type="number"
                                                placeholder="#U"
                                                required
                                                className="mb-2"
                                                value={numUsuarios}
                                                onChange={handleNumUsuarios}

                                            />

                                            <a className="btn btn-info btn-icon-split mr-2 mb-2"
                                                onClick={nuevoSubmit}
                                            >
                                                <span className="icon text-white-10">
                                                    <FontAwesomeIcon icon={faCirclePlus} />
                                                </span>
                                                <span className="text">Nueva tabla</span>
                                            </a>
                                        </InputGroup>
                                    </div>

                                    <h5 className="text small">O cargue los dastos mediante un
                                        archivo CVS o Excel: </h5>
                                    <div className="d-flex form-group flex-column flex-sm-row">


                                        <InputGroup>
                                            <FormControl //onSubmit={handleInputSubmit}
                                                type="file"
                                                id="inputGroupFile02"
                                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, 
                                                application/vnd.ms-excel"
                                                required
                                                onChange={handleInputChange}
                                                //onClick={handleInputChange}
                                                className="mb-2"
                                            />

                                            {/* <Button type="submit"
                                                className={`btn mr-2 ${isButtonDisabled ? "btn-light" : "btn-primary"}`}
                                                onClick={handleInputSubmit}
                                                disabled={isButtonDisabled}
                                                onSubmit={handleInputSubmit}
                                            >
                                                Subir
                                            </Button> */}
                                            {/* <Button variant="secondary" type="button"
                                                className="btn btn-light mb-2"
                                                href="/plantillas/comentarios.xlsx" download="comentarios"
                                            >   Descargar ejemplo</Button> */}

                                            <a className="btn btn-light btn-icon-split mr-2 mb-2"
                                                href="/plantillas/comentarios.xlsx" download="comentarios">
                                                <span className="icon text-white-10">
                                                    <FontAwesomeIcon icon={faDownload} />
                                                </span>
                                                <span className="text">Descargar ejemplo</span>
                                            </a>

                                        </InputGroup>

                                    </div>






                                    {tablaAux.length > 0 ?
                                        <h5 className="small text-center">La fila
                                            <b>&nbsp;PESO&nbsp;</b>
                                            corresponde al peso porcentual que tiene cada pregunta
                                            <br />
                                            La suma de los pesos debe ser 100 y los comentarios deben ser cadenas de texto en cualquier idioma.
                                            <br />
                                        </h5>
                                        :
                                        ""}

                                </div>





                                {/* Aquí se toma una tabla: array de forma [ [] , [] , [] , ...] */}
                                {/* {tabla.length > 0 ? tablaRender(tabla) : ""} */}




                                <div className="scroll-container" >

                                    <div className="scroll-container">
                                        {/* Aquí se toma un objeto: [ [{value:5}, {value:3}, {value:5}...] , [...] , [...] , ...] */}

                                        {tablaAux.length > 0 ?

                                            <Spreadsheet data={arregloAObjetoSpreadSheet(tablaAux)}
                                                columnLabels={columnaTitulos(tablaAux.length > 0 ? tablaAux[0].length : 0)}
                                                rowLabels={filaTitulos(tablaAux.length)}
                                                className="table table-hover table-bordered"
                                                onChange={actualizarCambioDeDatosSpreadSheet}
                                            />









                                            : //Si la tabla está vacia, se muestra un mensaje

                                            <div className="d-flex justify-content-center">
                                                <Alert variant="primary" className="text-center">

                                                    <p>
                                                        No hay datos para mostrar, ¡manos a la obra!
                                                    </p>
                                                </Alert>
                                            </div>

                                        }

                                    </div>
                                </div>




                                <div style={{ display: "flex", justifyContent: "center" }}>




                                    <a className={`btn ${tablaAux.length > 0 ? "btn-primary" : "disabled"} 
                                     btn-icon-split text-white-10"`}
                                        onClick={guardarDatos}
                                        style={{ flexShrink: 0 }}
                                        unselectable={`${tablaAux.length > 0 ? "false" : "true"}`}
                                    >
                                        <span className="icon text-white-10">
                                            <FontAwesomeIcon icon={faSave} />
                                        </span>
                                        {/* Cambiar el texto del botón de acuerdo al estado de los datos */}
                                        <span className="text">{tieneValores ? "Actualizar datos" : "Guadar datos"}</span>
                                    </a>
                                </div>


                            </div>
                        </div>








                        {/* Wizard tab pane item 2*/}
                        <div
                            className={`tab-pane py-5 py-xl-10 fade ${tabSuperior === "reporte" ? "show active" : ""}`} // Se agrega o se quita active // Se agrega o se quita show active
                            id="reportewizard"
                            role="tabpanel"
                            aria-labelledby="reportewizard-tab"
                        >
                            {tabla.length > 0 && (
                                <div className="row justify-content-center">
                                    <div className="col-xxl-6 col-xl-8">
                                        <h3 className="text-primary">Porcentajes de satisfacción</h3>
                                        <h5 className="card-title mb-4">Resultados del análisis de los datos entregados</h5>

                                        {/* <div className="scroll-container py-sm-3" > */}

                                        {/*<div className="scroll-container"> */}




                                        <div className="row">
                                            {/* Chart  */}
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="card shadow mb-4">

                                                    {/* Card Header  */}
                                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                        <h6 className="m-0 font-weight-bold text-primary">Satisfacción por usuarios</h6>
                                                    </div>

                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <div className="chart-area">
                                                            <div className="chartjs-size-monitor">
                                                                <div className="chartjs-size-monitor-expand">
                                                                    <div className="" />

                                                                </div>
                                                                <div className="chartjs-size-monitor-shrink">
                                                                    <div className="" />
                                                                    <GraficadorCat
                                                                        dataGrafica={formatDataGraficaSatisfaccion(dataGraf)}
                                                                        variablex={"Usuario"}
                                                                        variabley={"Satisfaccion"}
                                                                        color={"fill"}
                                                                        cat1={"Neg"}
                                                                        cat2={"Pos"}
                                                                        cat3={"Neu"}

                                                                    />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="row">
                                            {/* Conclusion  */}
                                            <div className="col-xl-12 col-lg-12">
                                                <div className="card shadow mb-4">

                                                    {/* Card Header  */}
                                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                        <h6 className="m-0 font-weight-bold text-primary">Conclusiones</h6>
                                                    </div>

                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <h3> <b> La satisfacción por comentarios es de un {promedio}%</b></h3>
                                                        <p></p>
                                                        <p>El usuario con mayor satisfacción es el <b>Usuario {userMaxIndex + 1}</b> con un {userMax}%</p>
                                                        <p>El usuario con menor satisfacción es el <b>Usuario {userMinIndex + 1}</b> con un {userMin}%</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>






                                        {/* <div class="container-grafica">
                                        <div class="element-grafica element1-grafica">

                                        </div>
                                        <div class="element-grafica element2-grafica">
                                           
                                        </div>
                                    </div>

 */}


                                        {/*  </div>
                                    </div> */}
                                        {/* </div> */}

                                    </div>
                                </div>
                            )}

                            {tabla.length === 0 && (
                                <div className="d-flex justify-content-center">
                                    <Alert variant="primary" className="text-center">

                                        <p>
                                            No hay datos guardados, ¡manos a la obra!
                                        </p>
                                    </Alert>
                                </div>
                            )}


                        </div>








                    </div>
                </div>
            </div>

            <Notificador
                showToast={showNotificacion}
                messageToast={mensajeNotificacion}
                typeToast={tipoNotificacion}
                handleToast={handleShowToast}
            />

        </div >

    );
}

function getColor(vect) {
    // Generar un número aleatorio dentro del rango del largo de los datos
    const randomIndex = Math.floor(Math.random() * vect.length);

    // Aquí puedes definir la lógica para asignar colores basados en el índice aleatorio
    const colors = ["#003f5c", "#2f4b7c",
        "#665191", "#a05195", "#d45087",
        "#f95d6a", "#ff7c43", "#ffa600"];

    return colors[randomIndex];
}

const formatDataGraficaSatisfaccion = (dat) => {
    const dataGrafica = dat.map((satisfaccion, index) => {
        return {
            Usuario: `Usuario ${index + 1}`,
            Satisfaccion: satisfaccion["comp"],
            Neg: satisfaccion["neg"],
            Pos: satisfaccion["pos"],
            Neu: satisfaccion["neu"],
            //fill: getColor(dat)
        };
    });
    var suma = 0;
    userMax = 0;
    userMin = 100;
    userMaxIndex = 1;
    userMinIndex = 1;
    for (var i = 0; i < dat.length; i++) {
        suma += dat[i].comp;
        if (dat[i].comp > userMax) {
            userMax = dat[i].comp;
            userMaxIndex = i;
        }
        if (dat[i].comp < userMin) {
            userMin = dat[i].comp;
            userMinIndex = i;
        }
    }
    promedio = Math.round(suma / dat.length);
    
    return dataGrafica;
}


const columnaTitulos = (numcol) => {
    const titulos = [];
    for (let i = 0; i < numcol; i++) {
        titulos.push(`P${i + 1}`);
    }
    return titulos;
}

const filaTitulos = (numfil) => {
    const titulos = [];
    for (let i = 0; i < numfil; i++) {
        if (i === 0) {
            titulos.push("PESO");
            continue;
        }
        titulos.push(`U${i}`);
    }
    return titulos;
}

const tablaRender = (tablaAux) => {

    /* Aquí se toma una tabla: array de forma [ [] , [] , [] , ...] */

    return (
        <Table responsive bordered hover >
            <thead>
                <tr className="text-center">
                    <th className="bg-light"></th>
                    {/* Generar los valores de la primera columna */}
                    {tablaAux[0].map((_, index) => (
                        <th key={index} className="bg-light">

                            {`P${index + 1}`}

                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Generar las filas y columnas dinámicamente */}
                {tablaAux.map((fila, index) => (
                    <tr key={index} className="text-center">
                        {/* Generar la primera columna */}
                        <td className="bg-light">
                            <b>
                                {index === 0 ? 'PESO' : `U${index}`}
                            </b>
                        </td>

                        {/* Generar las columnas con los valores de la fila */}
                        {Object.values(fila).map((valor, index) => (
                            <td key={index}>{valor}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}