import axios from 'axios';
import { API_URL } from './constants';

export const sendMessage = async ({ instance, token, message }) => {
  const response = await axios.post(
    `${API_URL}/waInstance${instance}/sendMessage/${token}`,
    message,
  );

  return response;
};
