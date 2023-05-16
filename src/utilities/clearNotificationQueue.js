import { receiveNotification, deleteNotification } from '../requests';

export async function clearNotificationQueue(requestData) {
  try {
    let receive;
    // eslint-disable-next-line no-cond-assign, no-await-in-loop
    while (!receive || receive.data) {
      // eslint-disable-next-line no-await-in-loop
      receive = await receiveNotification(requestData);
      console.log(receive.data);
      if (receive.data) {
        const { receiptId } = receive.data;
        // eslint-disable-next-line no-await-in-loop
        const del = await deleteNotification(requestData, receiptId);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
