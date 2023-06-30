import axios from 'axios';
import servidorURL from '../config';

const deleteData = async (data) => {
  try {
    const response = await axios.delete(`${servidorURL}/eliminar_soft`, {data: data});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export default deleteData;