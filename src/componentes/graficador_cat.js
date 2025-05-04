import React from "react";
import { BarChart, ResponsiveContainer } from "recharts";
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

export default function GraficadorCat({ dataGrafica, variablex, variabley, color, cat1, cat2, cat3  }) {



    //console.log("data DENTRO: ", dataGrafica);


    function getColor() {
        // Generar un número aleatorio dentro del rango del largo de los datos
        const randomIndex = Math.floor(Math.random() * dataGrafica.length);

        // Aquí puedes definir la lógica para asignar colores basados en el índice aleatorio
        const colors = ["#003f5c", "#2f4b7c",
            "#665191", "#a05195", "#d45087",
            "#f95d6a", "#ff7c43", "#ffa600"];

        return colors[randomIndex];
    }

    return (



        <div>
            <ResponsiveContainer
                width="100%"
                height="100%"
                margin={{ top: 0, right: 1, left: 1, bottom: 1 }}
                aspect={4 / 2}
                minHeight={500}
                minWidth={300}
            >
                <BarChart data={dataGrafica}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey= {variablex} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* console.log(getColor()); */}
                    <Bar dataKey={variabley} fill="#ff7c43" />
                    <Bar dataKey={cat1} fill="#d45087" />
                    <Bar dataKey={cat2} fill="#665191" />
                    <Bar dataKey={cat3} fill="#003f5c" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}