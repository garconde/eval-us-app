import axios from 'axios';
import servidorURL from '../config';

const eliminarDato = async (id) => {
  const data = { id_soft : id};
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.delete(`${servidorURL}/eliminar_soft`, {data, headers});
    if (response.status === 200) {
      return response.data;
    }else{
      throw new Error('Error en la solicitud');
    }
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default eliminarDato;