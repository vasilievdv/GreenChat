import { receiveNotification, deleteNotification } from '../requests';

export async function handleNotification(requestData) {
  let received;
  try {
    received = await receiveNotification(requestData);
    if (received.data) {
      const { receiptId, body } = received.data;
      const incomingMessage = {
        sender: body.senderData.sender.slice(0, 11),
        message: body.messageData.textMessageData.textMessage,
      };
      console.log(incomingMessage);
      await deleteNotification(requestData, receiptId);
    }
  } catch (error) {
    console.error(error);
  }
}
