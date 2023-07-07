import React from "react";
import { Area, ComposedChart, ResponsiveContainer } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function Graficador_usabilidad({ dataGrafica, variablex, variabley, variablez, color }) {



    console.log("data DENTRO: ", dataGrafica);


    function getColor() {
        // Generar un número aleatorio dentro del rango del largo de los datos
        const randomIndex = Math.floor(Math.random() * dataGrafica.length);

        // Aquí puedes definir la lógica para asignar colores basados en el índice aleatorio
        const colors = ["#003f5c", "#2f4b7c",
            "#665191", "#a05195", "#d45087",
            "#f95d6a", "#ff7c43", "#ffa600"];
        return colors[randomIndex];
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}%`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            
            <div className="example-chart-wrapper">
                <div className="example-chart-responsive-container">
                    <div
                        className="recharts-responsive-container"
                        style={{ width: "100%", height: "100%", minWidth: 0 }}
                        width={800}
                        height="174"
                    >
                        <div
                            className="recharts-wrapper"
                            style={{
                                position: "relative",
                                cursor: "default",
                                width: 800,
                                height: 175
                            }}
                            role="region"
                        >
                            <ResponsiveContainer width="100%" height="100%"
                                aspect={5 / 2}


                            >
                                <ComposedChart
                                    width={500}
                                    height={300}
                                    data={dataGrafica}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    barGap={"20%"}
                                >
                                    <defs>
                                        <linearGradient id="colorUs" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey={variablex} />
                                    <YAxis domain={[0, 100]}/>
                                    <Tooltip /* content={<CustomTooltip />}  *//>
                                    <Legend />
                                    {/* console.log(getColor()); */}

                                    <Bar dataKey={variabley} fill={color} />

                                    <Area type="monotone"
                                        dataKey={variablez}
                                        stroke="#8884d8"
                                        fillOpacity={1} fill="url(#colorUs)"
                                    />


                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}