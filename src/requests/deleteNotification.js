import axios from 'axios';
import { API_URL } from './constants';

export const deleteNotification = async ({ instance, token }, receiptId) => {
  const response = await axios.delete(
    `${API_URL}/waInstance${instance}/deleteNotification/${token}/${receiptId}`,
  );

  return response;
};
