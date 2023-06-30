import axios from 'axios';
import servidorURL from '../config';

const createData = async (data) => {
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

export default createData;