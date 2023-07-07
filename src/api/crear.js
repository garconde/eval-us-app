import axios from 'axios';
import servidorURL from '../config';

const crearDato = async (id) => {
  const data = { id_soft : id};
  try {
    const response = await axios.post(`${servidorURL}/nuevo_soft`, data)
    .then((response) => {
        //console.log(response);
        return response;
    })
    .catch((error) => {
        //console.log(error);
        return error;
    });
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default crearDato;