export function outMessageMenager(currentChatId, currentMessage, wholeChat) {
  let operatingChats = [];
  const updatedChat = [];
  const newChat = { chatId: currentChatId, messages: [currentMessage] };
  if (wholeChat.length) {
    operatingChats = [...wholeChat];
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
