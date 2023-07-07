import servidorURL from '../config';


const obtenerResTiempos = async (id) => {
const datar = { id_soft : id};
  try {
    const response = await fetch(`${servidorURL}/obtener_res_tiempos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datar)
    });

    console.log(response);

    // Manejar la respuesta
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  } catch (error) {
    throw new Error('Error en la solicitud: ' + error.message);
  }
}

export default obtenerResTiempos;