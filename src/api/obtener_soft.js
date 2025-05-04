import servidorURL from '../config';


const obtenerSoft = async (id) => {
const data = { id_soft : id};
  try {
    const response = await fetch(`${servidorURL}/obtener_soft`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    //console.log(response);

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

export default obtenerSoft;