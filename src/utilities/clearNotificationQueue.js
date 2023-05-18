import { receiveNotification, deleteNotification } from '../requests';

export async function clearNotificationQueue(requestData, manager, chats, set) {
  let received;
  try {
    while (!received || received.data) {
      received = await receiveNotification(requestData);
      if (received.data) {
        const { receiptId, body } = received.data;
        const incomingMessage = {
          sender: body?.senderData?.sender.slice(0, 11),
          message: body?.messageData?.textMessageData?.textMessage,
        };
        if (manager) {
          const updatedChats = manager(incomingMessage.sender, incomingMessage, chats);
          set(updatedChats);
        }
        await deleteNotification(requestData, receiptId);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
