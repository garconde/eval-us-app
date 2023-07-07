import React from "react";

const Instrucciones = () => {
    return (
        <div className="container mt-4 mb-5">
            <div className="card bg-light shadow">
                <div className="card-body text-justify">
                    <p className="text-muted">Estimado/a coordinador/a...</p>
                    <h1 className="card-title">¡Bienvenido!</h1>
                    <p>
                        Para analizar los datos obtenidos de la prueba de usabilidad de este software,
                        siga los siguientes pasos en cualquier orden:
                    </p>

                    <h4>Atributos de la usabilidad</h4>
                    <ul>
                        <li>Seleccione la pestaña <b>Eficacia</b>, proporcione los datos de la
                            cantidad de subtareas realizadas por un grupo de usuarios, y obtenga
                            el reporte con gráficas.</li>
                        <li>En la pestaña <b>Eficiencia</b>, proporcione los datos de los tiempos
                            que un grupo de usuarios tomó en realizar dichas tareas, y luego reciba el reporte
                            con gráficas.</li>
                        <li>Seleccione la pestaña <b>Satisfacción por puntajes</b>, llene la tabla de puntajes
                            por preguntas según cada usuario, y obtenga el reporte con gráficas.</li>
                        <li>En la pestaña <b>Satisfacción por comentarios</b>, suba los comentarios de los
                            usuarios y obtenga el porcentaje de satifacción mediante un análisis de sentimientos.</li>
                    </ul>
                    <h4>Reporte final</h4>
                    <ul>
                        <li>Finalmente, cuando haya realizados los pasos anteriores, en la pestaña <
                            b>Usabilidad</b>, obtenga el reporte final con los resultados de las pruebas de
                            usabilidad, mostrado mediante gráficas. </li>
                        <li>El porcentaje de usabilidad total del sistema es obtenido a partir de los 
                            resultados de las pruebas de eficacia, eficiencia y satisfacción.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Instrucciones;