import servidorURL from '../config';

const guardarPuntajes = async (id, tabla) => {
  const data = { id_soft : id, puntajes : tabla};
  try {
    const response = await fetch(`${servidorURL}/guardar_puntajes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Manejar la respuesta
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error en la solicitud');
    }
  } catch (error) {
    throw new Error('Error en la solicitud: ' + error.message);
  }

  /* try {
    await axios.post(`${servidorURL}/guardar_tareas`, data)
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((error) => {
        console.log(error);
        return error;
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error);
  } */
};

export default guardarPuntajes;