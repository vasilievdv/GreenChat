import React, { useRef, useEffect, useState } from 'react';
import { Card, Form, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessageThunk } from './thunks';
import { clearNotificationQueue, messageManager } from '../../utilities';
import styles from './chat.module.css';

function Chat(props) {
  const requestData = useSelector((state) => state.requestData);
  const [chat, setChat] = useState([]);
  const messageRef = useRef('');
  const messageInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let refreshInterval = null;
    if (requestData.length) {
      refreshInterval = setInterval(() => {
        clearNotificationQueue(requestData[0], messageManager, chat, setChat);
      }, 5000);
    }
    return () => {
      clearInterval(refreshInterval);
    };
  }, [requestData, chat]);

  const onSubmitMessageForm = (event) => {
    event.preventDefault();
    const currentMessage = messageRef.current.value;
    const { instance, token, chatId } = requestData[0];
    const id = `${chatId}@c.us`;
    const message = {
      chatId: id, message: currentMessage,
    };
    const requestPayload = { instance, token, message };
    dispatch(sendMessageThunk(requestPayload));
    const updatedChats = messageManager(chatId, message, chat);
    setChat(updatedChats);
    messageInputRef.current.reset();
  };

  return (
    <>
      <Card className={styles.chat}>
        {chat[0]?.messages
          .map((el) => (
            <div
              key={el.chatId}
              className={el.chatId
                ? styles.msgBox
                : `${styles.msgBox} ${styles.inMsg}`}
            >{el.message}
            </div>
          ))}
      </Card>
      <Form onSubmit={onSubmitMessageForm} ref={messageInputRef}>
        <Form.Control
          type="message"
          placeholder="Enter a message"
          size="sm"
          className={styles.messageInput}
          ref={messageRef}
        />
      </Form>
    </>
  );
}

export default Chat;
