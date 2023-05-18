export function messageManager(currentChatId, currentMessage, wholeChat) {
  const operatingChats = [...wholeChat];
  const newChat = { chatId: currentChatId, messages: [currentMessage] };
  if (wholeChat.length) {
    const findChatId = operatingChats
      .findIndex((element) => element.chatId === currentChatId);
    if (findChatId >= 0) {
      operatingChats[findChatId].messages.push(currentMessage);
    } else {
      operatingChats.push(newChat);
    }
  } else {
    operatingChats.push(newChat);
  }
  return operatingChats;
}
