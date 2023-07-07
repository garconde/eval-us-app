import React from "react";
import Graficador from "./graficador";
import obtenerSoft from "../api/obtener_soft";
import { useEffect } from "react";
import Graficador_usabilidad from "./graficador-usabilidad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble, faHandsClapping, faHourglass, faTasks } from "@fortawesome/free-solid-svg-icons";

export default function Contenido_usabilidad({ idSof }) {
    const [soft, setSoft] = React.useState([]);
    const [tieneValores, setTieneValores] = React.useState(false);


    useEffect(() => {
        if (idSof != null) {
            const obtenerData = async () => {
                try {

                    const data = await obtenerSoft(idSof);

                    setSoft(data);

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



    return (
        <div>

            <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-8">
                    <div className="card-body text-justify">
                        <h3 className="text-primary">Reporte de usabilidad</h3>
                        <h5 className="card-title mb-5">
                            A continuación se muestra el reporte de usabilidad del software.
                        </h5>

                        <div className="row">
                                                        
                            {/* Card */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-right-secondary border-bottom-secondary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                                                    Eficacia
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                            {soft.eficacia}%
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div
                                                                className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                style={{ width: soft.eficacia + "%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <FontAwesomeIcon className="fa-2x text-gray-300" icon={faTasks}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-right-secondary border-bottom-secondary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                                                    Eficiencia
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                            {soft.eficiencia}%
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div
                                                                className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                style={{ width: soft.eficiencia + "%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <FontAwesomeIcon className="fa-2x text-gray-300" icon={faHourglass}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-right-secondary border-bottom-secondary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                                                    Satisfaccion
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                            {soft.satisfaccion}%
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div
                                                                className="progress-bar bg-secondary"
                                                                role="progressbar"
                                                                style={{ width: soft.satisfaccion + "%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <FontAwesomeIcon className="fa-2x text-gray-300" icon={faHandsClapping}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-right-primary border-bottom-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Usabilidad
                                                </div>
                                                <div className="row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                            {soft.usabilidad}%
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm mr-2">
                                                            <div
                                                                className="progress-bar bg-primary"
                                                                role="progressbar"
                                                                style={{ width: soft.usabilidad + "%" }}
                                                                aria-valuenow={50}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <FontAwesomeIcon className="fa-2x text-gray-300" icon={faCheckDouble}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>


                        <div className="row">
                            {/* Chart  */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="card shadow mb-4">

                                    {/* Card Header  */}
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Eficacia por usuarios</h6>
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
                                                    <Graficador_usabilidad
                                                        dataGrafica={formatDataGraficaEficacia(soft)}
                                                        variablex={"Atributo"}
                                                        variabley={"Porcentaje"}
                                                        variablez={"Usabilidad"}
                                                        color={"fill"}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

function getColor() {
    // Generar un número aleatorio dentro del rango del largo de los datos
    const randomIndex = Math.floor(Math.random() * 8);

    const colors = ["#003f5c", "#2f4b7c",
        "#665191", "#a05195", "#d45087",
        "#f95d6a", "#ff7c43", "#ffa600"];

    return colors[randomIndex];
}



const formatDataGraficaEficacia = (data) => {
    let newData = [
        {
            Atributo: "Eficacia",
            Porcentaje: data.eficacia,
            Usabilidad: data.usabilidad,
            fill: getColor()

        },
        {
            Atributo: "Eficiencia",
            Porcentaje: data.eficiencia,
            Usabilidad: data.usabilidad,
            fill: getColor()
        },
        {
            Atributo: "Satisfacción",
            Porcentaje: data.satisfaccion,
            Usabilidad: data.usabilidad,
            fill: getColor()

        }
    ];

    return newData;
}