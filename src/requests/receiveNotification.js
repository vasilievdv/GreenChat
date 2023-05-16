import axios from 'axios';
import { API_URL } from './constants';

export const receiveNotification = async ({ instance, token }) => {
  const response = await axios.get(
    `${API_URL}/waInstance${instance}/receiveNotification/${token}`,
  );

  return response;
};
