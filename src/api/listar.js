import axios from 'axios';
import servidorURL from '../config';

const listarDatos = async () => {
  try {
    const response = await axios.get(`${servidorURL}/listar`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return null;
  }
};

export default listarDatos;