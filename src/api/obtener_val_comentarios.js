import servidorURL from '../config';


const obtenerValComentarios = async (id) => {
const datar = { id_soft : id};
  try {
    const response = await fetch(`${servidorURL}/obtener_val_comentarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datar)
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

export default obtenerValComentarios;